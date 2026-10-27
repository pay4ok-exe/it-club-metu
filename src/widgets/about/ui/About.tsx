import { Send } from 'lucide-react'
import type { ReactNode } from 'react'

import { featuredMembers, joinHref, siteConfig } from '@/shared/config'
import { imageUrl } from '@/shared/lib/image-url'
import { cn } from '@/shared/lib/utils'
import { AppImage } from '@/shared/ui/app-image'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { PeopleStack } from '@/shared/ui/people-stack'

import { stats } from '../model/stats'
import { RocketIllustration } from './RocketIllustration'
import { SparklesIllustration } from './SparklesIllustration'

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <h2 className="sr-only">О клубе</h2>
        <div className="relative mx-auto max-w-4xl text-center font-heading text-3xl leading-snug font-medium text-balance md:text-5xl md:leading-tight">
          <span
            aria-hidden
            className="absolute -top-8 -left-2 font-serif text-7xl text-muted-foreground/30 md:-left-8 md:text-8xl"
          >
            “
          </span>
          {siteConfig.name} — место, где{' '}
          <PeopleStack
            people={featuredMembers}
            size="lg"
            className="mx-1 inline-flex align-middle"
          />{' '}
          первокурсники{' '}
          <Sticker className="bg-pastel-lemon">
            <SparklesIllustration className="size-8 md:size-11" />
          </Sticker>{' '}
          превращают идеи в реальные проекты{' '}
          <Sticker className="rotate-6 bg-pastel-peach">
            <RocketIllustration className="size-8 md:size-11" />
          </Sticker>{' '}
          и находят свою команду
        </div>

        <div className="mt-16 grid items-center gap-10 md:mt-20 lg:grid-cols-3">
          <dl className="flex flex-col gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="grid grid-cols-[7rem_1fr] items-start gap-4">
                <dt className="flex flex-col">
                  <span className="font-heading text-4xl font-semibold">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </dt>
                <dd className="pt-2 text-sm text-muted-foreground">{stat.text}</dd>
              </div>
            ))}
          </dl>

          <div className="relative mx-auto w-full max-w-xs">
            <PaperPlane />
            <div className="aspect-3/4 overflow-hidden rounded-3xl bg-azure-soft">
              <AppImage
                src={imageUrl('mascot-wave.webp')}
                alt="Маскот клуба машет рукой"
                loading="lazy"
                className="size-full object-contain object-bottom motion-safe:animate-float"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-sm text-muted-foreground lg:pl-6">
            <p>
              Мы объединяем студентов, которые хотят не только учиться, но и делать: собирать
              команды, участвовать в хакатонах и запускать свои проекты.
            </p>
            <p>
              Каждую неделю — встречи по направлениям, раз в семестр — большой хакатон клуба. Всё
              бесплатно, а опыт не обязателен.
            </p>
            <Button asChild size="pill" className="mt-2 self-start">
              <a href={joinHref}>Присоединиться</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Sticker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'mx-1 inline-flex size-10 -rotate-6 items-center justify-center rounded-2xl align-middle shadow-sm md:size-14',
        className,
      )}
    >
      {children}
    </span>
  )
}

// Бумажный самолётик с пунктирным следом, как в референсе
function PaperPlane() {
  return (
    <div aria-hidden className="absolute -top-10 -right-6 flex items-start text-brand">
      <svg viewBox="0 0 80 40" className="h-10 w-20 text-muted-foreground/50" fill="none">
        <path
          d="M2 36 C 20 0, 50 40, 76 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 5"
        />
      </svg>
      <Send className="-mt-2 size-7 -rotate-12" />
    </div>
  )
}
