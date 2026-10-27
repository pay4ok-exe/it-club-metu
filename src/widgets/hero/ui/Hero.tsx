import { ArrowRight } from 'lucide-react'

import { featuredMembers, joinHref, siteConfig } from '@/shared/config'
import { imageUrl } from '@/shared/lib/image-url'
import { AppImage } from '@/shared/ui/app-image'
import { Button } from '@/shared/ui/button'
import { Clouds } from '@/shared/ui/clouds'
import { Container } from '@/shared/ui/container'
import { PeopleStack } from '@/shared/ui/people-stack'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-linear-to-b from-azure to-azure-soft pt-32 md:pt-40"
    >
      <Clouds />

      <Container className="relative flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-card/60 py-1 pr-4 pl-1 text-sm backdrop-blur">
          <PeopleStack people={featuredMembers.slice(0, 3)} size="sm" />
          <span>Нас уже {siteConfig.membersCount} студентов</span>
        </div>

        <h1 className="max-w-4xl font-heading text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Учись быстрее. Создавай смелее. Расти вместе с нами.
        </h1>

        <p className="mt-5 max-w-xl text-base text-pretty text-muted-foreground md:text-lg">
          IT-клуб {siteConfig.university} для студентов 1–2 курса: направления от фронтенда до ИИ,
          менторы со старших курсов, хакатоны и первые проекты в портфолио. Даже если начинаешь с
          нуля.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="pill-lg" className="shadow-xl shadow-primary/25">
            <a href={joinHref}>
              Вступить в клуб
              <ArrowRight aria-hidden />
            </a>
          </Button>
          <Button
            asChild
            size="pill-lg"
            variant="outline"
            className="border-transparent bg-card/70 backdrop-blur"
          >
            <a href="#directions">Смотреть направления</a>
          </Button>
        </div>
      </Container>

      <div className="relative mx-auto mt-12 w-full max-w-6xl md:mt-16">
        <AppImage
          src={imageUrl('hero.webp')}
          alt="Студенты IT-клуба делают совместное селфи"
          fetchPriority="high"
          className="aspect-16/9 w-full object-cover object-top mask-t-from-85% mask-x-from-92%"
        />
      </div>
    </section>
  )
}
