import { Container } from '@/shared/ui/container'
import { Highlight, SectionHeading } from '@/shared/ui/section-heading'

import { steps } from '../model/steps'

export function JoinSteps() {
  return (
    <section
      id="join-steps"
      className="bg-linear-to-b from-background to-azure-soft py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Как вступить"
          title={
            <>
              <Highlight>Четыре шага</Highlight> до первой встречи
            </>
          }
        />

        <div className="relative mt-12">
          {/* Пунктирная линия, соединяющая шаги на десктопе */}
          <div
            aria-hidden
            className="absolute top-10 right-[12%] left-[12%] hidden border-t-2 border-dashed border-highlight lg:block"
          />
          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative flex flex-col items-center gap-3 rounded-3xl p-4 text-center"
              >
                <div className="relative flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <step.icon className="size-5" aria-hidden />
                  <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-highlight text-xs font-semibold text-foreground">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-2 font-heading text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
