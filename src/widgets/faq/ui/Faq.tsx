import { siteConfig } from '@/shared/config'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Highlight, SectionHeading } from '@/shared/ui/section-heading'
import { TelegramIcon } from '@/shared/ui/telegram-icon'

import { faqItems } from '../model/faq'

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={
              <>
                <Highlight>Частые</Highlight> вопросы
              </>
            }
            description="Не нашёл ответ? Напиши нам — ответим в течение дня."
          />
          <Button asChild size="pill" variant="outline">
            <a href={siteConfig.contacts.telegram} target="_blank" rel="noreferrer">
              <TelegramIcon />
              Написать в Telegram
            </a>
          </Button>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="rounded-2xl border bg-card px-5 last:border-b"
            >
              <AccordionTrigger className="py-4 text-base font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
