import { imageUrl } from '@/shared/lib/image-url'
import { cn } from '@/shared/lib/utils'

// Официальная иконка Telegram (файл от владельца). Декоративная: подпись даёт ссылка вокруг неё.
export function TelegramIcon({ className }: { className?: string }) {
  return (
    <img
      src={imageUrl('telegram.webp')}
      alt=""
      aria-hidden
      width={128}
      height={128}
      className={cn('size-5 shrink-0 rounded-full', className)}
    />
  )
}
