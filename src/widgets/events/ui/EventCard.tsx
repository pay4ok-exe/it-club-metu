import { Clock, MapPin } from 'lucide-react'

import { Badge } from '@/shared/ui/badge'

import type { ClubEvent } from '../model/events'

export function EventCard({ event }: { event: ClubEvent }) {
  return (
    <article className="flex h-full items-center gap-4 rounded-3xl border bg-card p-4">
      <div className="flex size-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-azure-soft">
        <span className="font-heading text-2xl leading-none font-semibold">{event.day}</span>
        <span className="text-xs text-muted-foreground">{event.month}</span>
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <Badge variant="secondary">{event.type}</Badge>
        <h3 className="font-heading font-semibold">{event.title}</h3>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden />
            {event.time}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" aria-hidden />
            {event.place}
          </span>
        </p>
      </div>
    </article>
  )
}
