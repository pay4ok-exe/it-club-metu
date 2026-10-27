import { Container } from '@/shared/ui/container'

import { technologies } from '../model/technologies'

export function TechStack() {
  return (
    <section id="tech-stack" aria-labelledby="tech-stack-title" className="py-14">
      <Container>
        <h2 id="tech-stack-title" className="text-center text-sm font-medium text-muted-foreground">
          Технологии, которые мы разбираем вместе
        </h2>
      </Container>

      <div className="mt-8 overflow-hidden mask-x-from-80%">
        {/* Список продублирован для бесшовной прокрутки */}
        <ul className="flex w-max animate-marquee gap-14 motion-reduce:animate-none">
          {[...technologies, ...technologies].map((name, index) => (
            <li
              key={`${name}-${index}`}
              aria-hidden={index >= technologies.length}
              className="font-heading text-2xl font-semibold whitespace-nowrap text-foreground/40"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
