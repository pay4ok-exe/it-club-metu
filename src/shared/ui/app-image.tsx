import { useState, type ComponentProps } from 'react'
import { ImageIcon } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

type AppImageProps = Omit<ComponentProps<'img'>, 'src' | 'alt'> & {
  src: string
  alt: string
}

// Картинка с плейсхолдером: пока файла нет в public/images, показываем его имя,
// чтобы было видно, что и куда положить.
export function AppImage({ src, alt, className, ...props }: AppImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null)

  if (failedSrc === src) {
    const fileName = src.split('/').pop()

    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex flex-col items-center justify-center gap-2 bg-linear-to-br from-azure-soft to-azure p-4 text-center text-xs text-muted-foreground',
          className,
        )}
      >
        <ImageIcon className="size-6 opacity-60" aria-hidden />
        <span className="font-mono break-all">{fileName}</span>
      </div>
    )
  }

  return (
    <img src={src} alt={alt} onError={() => setFailedSrc(src)} className={className} {...props} />
  )
}
