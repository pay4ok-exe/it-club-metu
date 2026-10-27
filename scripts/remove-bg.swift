// Удаляет фон через Apple Vision (как «Поднять объект» в Фото), обрезает по объекту с отступом и сохраняет PNG с альфой.
// Если Vision берёт только главный объект и теряет мелкие (летающие значки и т.п.), передай области
// с ними в пикселях от левого верхнего угла — маски объединятся.
//
// usage: swift scripts/remove-bg.swift <input> <output.png> [padding=0.03] [x,y,w,h ...]
// затем: cwebp -q 82 -alpha_q 90 -m 6 output.png -o public/images/<name>.webp
import CoreImage
import Foundation
import ImageIO
import Vision

let args = CommandLine.arguments
let inURL = URL(fileURLWithPath: args[1])
let outURL = URL(fileURLWithPath: args[2])
let pad = args.count > 3 ? (Double(args[3]) ?? 0.03) : 0.03
let regions: [CGRect] = args.dropFirst(4).map {
  let p = $0.split(separator: ",").map { CGFloat(Double($0)!) }
  return CGRect(x: p[0], y: p[1], width: p[2], height: p[3])
}

let source = CGImageSourceCreateWithURL(inURL as CFURL, nil)!
let image = CGImageSourceCreateImageAtIndex(source, 0, nil)!
let fullHeight = CGFloat(image.height)

// Маска всех объектов переднего плана для картинки (или её фрагмента)
func mask(for cg: CGImage) throws -> CIImage? {
  let handler = VNImageRequestHandler(cgImage: cg, options: [:])
  let request = VNGenerateForegroundInstanceMaskRequest()
  try handler.perform([request])
  guard let observation = request.results?.first else { return nil }
  let buffer = try observation.generateScaledMaskForImage(
    forInstances: observation.allInstances, from: handler)
  return CIImage(cvPixelBuffer: buffer)
}

var union = try mask(for: image)!
for region in regions {
  guard let crop = image.cropping(to: region), let regionMask = try mask(for: crop) else {
    print("no object in region \(region)")
    continue
  }
  // CoreImage считает y снизу
  let placed = regionMask.transformed(
    by: CGAffineTransform(translationX: region.minX, y: fullHeight - region.maxY))
  union = placed.applyingFilter("CIMaximumCompositing", parameters: [kCIInputBackgroundImageKey: union])
}

let original = CIImage(cgImage: image)
let clear = CIImage(color: .clear).cropped(to: original.extent)
let cutout = original.applyingFilter(
  "CIBlendWithMask",
  parameters: [kCIInputBackgroundImageKey: clear, kCIInputMaskImageKey: union.cropped(to: original.extent)])

// Границы непрозрачной области
let context = CIContext()
let colorSpace = CGColorSpace(name: CGColorSpace.sRGB)!
let width = image.width
let height = image.height
var pixels = [UInt8](repeating: 0, count: width * height * 4)
context.render(
  cutout, toBitmap: &pixels, rowBytes: width * 4, bounds: original.extent, format: .RGBA8,
  colorSpace: colorSpace)
var minX = width, minY = height, maxX = 0, maxY = 0
for y in 0..<height {
  for x in 0..<width where pixels[(y * width + x) * 4 + 3] > 8 {
    minX = min(minX, x); maxX = max(maxX, x); minY = min(minY, y); maxY = max(maxY, y)
  }
}
// render пишет строки сверху вниз — переводим обратно в координаты CoreImage
let box = CGRect(
  x: CGFloat(minX), y: CGFloat(height - 1 - maxY),
  width: CGFloat(maxX - minX + 1), height: CGFloat(maxY - minY + 1))
let padX = (box.width * pad).rounded()
let padY = (box.height * pad).rounded()
let canvas = box.insetBy(dx: -padX, dy: -padY)

try context.writePNGRepresentation(
  of: cutout.cropped(to: canvas), to: outURL, format: .RGBA8, colorSpace: colorSpace)
print("regions: \(regions.count), size: \(Int(canvas.width))x\(Int(canvas.height))")
