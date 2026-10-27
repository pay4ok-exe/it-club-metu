import { useId } from 'react'

import { cn } from '@/shared/lib/utils'

// Четырёхлучевая звезда радиусом 1 с центром в (0, 0) — масштабируется через transform группы
const STAR =
  'M0 -1C0.1 -0.32 0.32 -0.1 1 0C0.32 0.1 0.1 0.32 0 1C-0.1 0.32 -0.32 0.1 -1 0C-0.32 -0.1 -0.1 -0.32 0 -1Z'

// Задержки задаём через style: шорткат animate-* из motion-safe перебивает классы animation-delay
const twinkle = 'origin-center transform-fill motion-safe:animate-twinkle'

// Мерцающие искры — замена эмодзи ✨
export function SparklesIllustration({ className }: { className?: string }) {
  const gradientId = useId()

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden focusable="false" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--sun)' }} />
          <stop offset="1" style={{ stopColor: 'var(--sun-deep)' }} />
        </linearGradient>
      </defs>

      <g transform="translate(20 26) scale(16)">
        <path d={STAR} fill={`url(#${gradientId})`} className={twinkle} />
      </g>
      <g transform="translate(16 22) scale(5)">
        <path d={STAR} className={cn(twinkle, 'fill-sun-light')} />
      </g>
      <g transform="translate(37 11) scale(8)">
        <path
          d={STAR}
          fill={`url(#${gradientId})`}
          className={twinkle}
          style={{ animationDelay: '-0.8s' }}
        />
      </g>
      <g transform="translate(39 37) scale(5)">
        <path
          d={STAR}
          fill={`url(#${gradientId})`}
          className={twinkle}
          style={{ animationDelay: '-1.6s' }}
        />
      </g>
      <circle
        cx="8"
        cy="10"
        r="1.8"
        className={cn(twinkle, 'fill-sun')}
        style={{ animationDelay: '-1.2s' }}
      />
      <circle
        cx="31"
        cy="44"
        r="1.4"
        className={cn(twinkle, 'fill-sun-deep')}
        style={{ animationDelay: '-0.4s' }}
      />
    </svg>
  )
}
