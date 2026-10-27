import { CalendarDays, MapPin } from 'lucide-react'

import { joinHref } from '@/shared/config'
import { AppImage } from '@/shared/ui/app-image'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Highlight, SectionHeading } from '@/shared/ui/section-heading'

import { featuredEvent, upcomingEvents } from '../model/events'
import { EventCard } from './EventCard'

export function Events() {
  return (
    <section id="events" className="bg-muted/60 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Афиша"
          title={
            <>
              <Highlight>Ближайшие</Highlight> события клуба
            </>
          }
          description="Хакатоны, митапы и воркшопы — приходи даже без опыта, новичкам всегда рады."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <article className="flex flex-col gap-5 rounded-3xl bg-linear-to-br from-pastel-sky to-pastel-lilac p-3 md:flex-row lg:flex-col">
            <AppImage
              src={featuredEvent.image}
              alt="Участники хакатона работают в командах"
              loading="lazy"
              className="aspect-video w-full rounded-2xl object-cover md:w-1/2 lg:w-full"
            />
            <div className="flex flex-col gap-3 p-3 pt-0 md:pt-3 lg:pt-0">
              <Badge variant="outline" className="border-transparent bg-card/80">
                {featuredEvent.type}
              </Badge>
              <h3 className="font-heading text-2xl font-semibold">{featuredEvent.title}</h3>
              <p className="text-sm text-muted-foreground">{featuredEvent.description}</p>
              <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4" aria-hidden />
                  {featuredEvent.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4" aria-hidden />
                  {featuredEvent.place}
                </span>
              </p>
              <Button asChild size="pill" className="mt-1 self-start">
                <a href={joinHref}>Хочу участвовать</a>
              </Button>
            </div>
          </article>

          <ul className="flex flex-col gap-4">
            {upcomingEvents.map((event) => (
              <li key={event.id} className="flex-1">
                <EventCard event={event} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
