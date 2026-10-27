import { Quote } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Container } from '@/shared/ui/container'
import { Highlight, SectionHeading } from '@/shared/ui/section-heading'

import { testimonials } from '../model/testimonials'

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/60 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Отзывы"
          title={
            <>
              <Highlight>Что говорят</Highlight> участники
            </>
          }
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.name}>
              <figure className="flex h-full flex-col gap-6 rounded-3xl border bg-card p-6">
                <Quote className="size-8 text-highlight" aria-hidden />
                <blockquote className="flex-1 text-base text-pretty">{item.quote}</blockquote>
                <figcaption className="flex items-center gap-3">
                  <Avatar size="lg">
                    <AvatarImage src={item.image} alt="" />
                    <AvatarFallback className="bg-azure font-medium text-foreground">
                      {item.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.info}</p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
