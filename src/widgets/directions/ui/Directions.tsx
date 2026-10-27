import { DirectionCard, directions } from '@/entities/direction'
import { Container } from '@/shared/ui/container'
import { Highlight, SectionHeading } from '@/shared/ui/section-heading'

export function Directions() {
  return (
    <section id="directions" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Направления"
          title={
            <>
              <Highlight>Навыки, которые</Highlight> пригодятся в реальной работе
            </>
          }
          description="Восемь треков — от первой строчки кода до олимпиад. Можно попробовать несколько и выбрать своё."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {directions.map((direction) => (
            <li key={direction.id}>
              <DirectionCard direction={direction} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
