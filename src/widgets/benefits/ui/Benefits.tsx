import { ArrowRight } from 'lucide-react'

import { joinHref } from '@/shared/config'
import { imageUrl } from '@/shared/lib/image-url'
import { AppImage } from '@/shared/ui/app-image'
import { Button } from '@/shared/ui/button'
import { Clouds } from '@/shared/ui/clouds'
import { Container } from '@/shared/ui/container'
import { Highlight, SectionHeading } from '@/shared/ui/section-heading'

import { benefits } from '../model/benefits'

export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-linear-to-b from-background via-azure-soft to-azure pt-20 md:pt-28"
    >
      <Clouds className="top-1/3" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Зачем вступать?"
          title={
            <>
              <Highlight>Клуб, в котором</Highlight> растёшь по-настоящему
            </>
          }
          description="Здесь не просто слушают лекции — здесь учатся делать, ошибаться и получать результат вместе."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <li key={benefit.title}>
              <article className="flex h-full flex-col gap-1 rounded-3xl border bg-card p-4 shadow-sm">
                <p className="text-xs text-muted-foreground">{benefit.eyebrow}</p>
                <h3 className="font-heading text-lg font-semibold">{benefit.title}</h3>
                <p className="flex-1 text-sm text-muted-foreground">{benefit.text}</p>
                <AppImage
                  src={benefit.image}
                  alt=""
                  loading="lazy"
                  className="mt-3 aspect-4/3 w-full rounded-2xl object-cover"
                />
              </article>
            </li>
          ))}
        </ul>
      </Container>

      <div className="relative mt-12 md:-mt-4">
        <AppImage
          src={imageUrl('hill.webp')}
          alt=""
          loading="lazy"
          className="aspect-5/2 w-full object-cover object-top mask-t-from-70% md:aspect-3/1"
        />
        <div className="absolute right-[6%] bottom-[12%] flex h-[85%] items-end gap-3 md:right-[10%]">
          <Button
            asChild
            size="pill"
            className="mb-[40%] hidden shadow-lg shadow-primary/30 sm:inline-flex"
          >
            <a href={joinHref}>
              Начать сейчас
              <ArrowRight aria-hidden />
            </a>
          </Button>
          <AppImage
            src={imageUrl('mascot-point.webp')}
            alt="Маскот клуба показывает на кнопку"
            loading="lazy"
            className="aspect-3/4 h-full rounded-3xl object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  )
}
