import { CalendarDays } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

import type { Direction, DirectionTone } from '../model/types'

const toneClassName: Record<DirectionTone, string> = {
  blue: 'bg-tile-blue',
  green: 'bg-tile-green',
  orange: 'bg-tile-orange',
  yellow: 'bg-tile-yellow',
  purple: 'bg-tile-purple',
  pink: 'bg-tile-pink',
}

type DirectionCardProps = {
  direction: Direction
}

// Минималистичная карточка: цветная плашка с линейной иконкой, под ней текст
export function DirectionCard({ direction }: DirectionCardProps) {
  const Icon = direction.icon

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={cn(
          'relative flex aspect-2/1 items-center justify-center sm:aspect-4/3',
          toneClassName[direction.tone],
        )}
      >
        {/* «Кнопки окна», как в референсе */}
        <span aria-hidden className="absolute top-4 left-4 flex items-center gap-1.5">
          <span className="h-1.5 w-6 rounded-full bg-paper" />
          <span className="size-1.5 rounded-full bg-paper/70" />
          <span className="size-1.5 rounded-full bg-paper/70" />
        </span>
        <Icon
          aria-hidden
          strokeWidth={1.5}
          className="size-16 text-tile-ink transition-transform duration-300 group-hover:scale-110 md:size-20"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-lg leading-snug font-medium">{direction.title}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{direction.description}</p>
        <div className="flex items-center justify-between gap-2 pt-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" aria-hidden />
            {direction.schedule}
          </span>
          <span className="truncate">{direction.tags.join(' · ')}</span>
        </div>
      </div>
    </article>
  )
}
