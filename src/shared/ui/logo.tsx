import { cn } from '@/shared/lib/utils'

type LogoProps = {
  name: string
  className?: string
}

// Знак: четыре «пикселя»-лепестка, отсылка к логотипу референса
export function Logo({ name, className }: LogoProps) {
  return (
    <span
      className={cn('inline-flex items-center gap-2 font-heading text-lg font-semibold', className)}
    >
      <span aria-hidden className="grid size-7 grid-cols-2 gap-0.5 rotate-45">
        <span className="rounded-full rounded-br-none bg-brand" />
        <span className="rounded-full rounded-bl-none bg-brand/70" />
        <span className="rounded-full rounded-tr-none bg-brand/70" />
        <span className="rounded-full rounded-tl-none bg-brand" />
      </span>
      {name}
    </span>
  )
}
