import { cn } from '@/shared/lib/utils'

// Декоративные облака из размытых пятен — фон для «небесных» блоков
export function Clouds({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div className="absolute -top-16 -left-24 h-56 w-[28rem] rounded-full bg-background/70 blur-3xl" />
      <div className="absolute top-24 -right-32 h-64 w-[32rem] rounded-full bg-background/60 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 h-40 w-80 rounded-full bg-background/50 blur-3xl" />
      <div className="absolute -bottom-10 right-1/4 h-48 w-96 rounded-full bg-background/60 blur-3xl" />
    </div>
  )
}
