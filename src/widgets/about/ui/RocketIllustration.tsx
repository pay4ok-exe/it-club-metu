import { useId } from 'react'

import { cn } from '@/shared/lib/utils'

// Задержки анимаций задаём через style: шорткат animate-* из motion-safe перебивает классы animation-delay
const flicker = 'origin-top transform-fill motion-safe:animate-flicker'
const puff = 'origin-center transform-fill opacity-0 motion-safe:animate-puff'

// Взлетающая ракета — замена эмодзи 🚀. Рисуем вертикально и поворачиваем всю группу.
export function RocketIllustration({ className }: { className?: string }) {
  const id = useId()
  const bodyGradient = `${id}-body`
  const flameGradient = `${id}-flame`

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      overflow="visible"
      aria-hidden
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id={bodyGradient} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.5" style={{ stopColor: 'var(--paper)' }} />
          <stop offset="1" style={{ stopColor: 'var(--azure)' }} />
        </linearGradient>
        <linearGradient id={flameGradient} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--sun)' }} />
          <stop offset="1" style={{ stopColor: 'var(--flame)' }} />
        </linearGradient>
      </defs>

      <g transform="translate(24 24) rotate(40) scale(1.25) translate(-24 -24)">
        <g className="motion-safe:animate-bob">
          {/* Дым из сопла */}
          <circle cx="21" cy="42" r="2.2" className={cn(puff, 'fill-muted-foreground/30')} />
          <circle
            cx="27"
            cy="43"
            r="1.8"
            className={cn(puff, 'fill-muted-foreground/30')}
            style={{ animationDelay: '-0.4s' }}
          />
          <circle
            cx="24"
            cy="45"
            r="1.5"
            className={cn(puff, 'fill-muted-foreground/30')}
            style={{ animationDelay: '-0.8s' }}
          />

          {/* Пламя */}
          <path
            d="M20.5 30C20.5 35 22.5 38.5 24 42C25.5 38.5 27.5 35 27.5 30Z"
            fill={`url(#${flameGradient})`}
            className={flicker}
          />
          <path
            d="M22.2 30C22.2 33.5 23.2 35.5 24 37.5C24.8 35.5 25.8 33.5 25.8 30Z"
            className={cn(flicker, 'fill-sun-light')}
            style={{ animationDelay: '-0.09s' }}
          />

          {/* Стабилизаторы */}
          <path d="M17.4 20.5L12 27.5L13 32L17.6 28Z" className="fill-coral" />
          <path d="M30.6 20.5L36 27.5L35 32L30.4 28Z" className="fill-coral" />

          {/* Корпус, сопло и нос */}
          <path d="M19.5 27H28.5L27.5 30H20.5Z" className="fill-muted-foreground" />
          <path d="M24 4C30 9.5 32 17 31 27H17C16 17 18 9.5 24 4Z" fill={`url(#${bodyGradient})`} />
          <path
            d="M24 4C27.2 6.9 29.3 10.3 30.3 14H17.7C18.7 10.3 20.8 6.9 24 4Z"
            className="fill-coral"
          />

          {/* Иллюминатор */}
          <circle cx="24" cy="19" r="3.6" strokeWidth="1.6" className="fill-brand stroke-paper" />
          <circle cx="22.9" cy="17.9" r="1.1" className="fill-paper/80" />
        </g>
      </g>
    </svg>
  )
}
