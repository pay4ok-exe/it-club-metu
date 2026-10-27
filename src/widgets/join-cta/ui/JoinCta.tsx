import { JoinForm } from '@/features/join-club'
import { siteConfig } from '@/shared/config'
import { imageUrl } from '@/shared/lib/image-url'
import { AppImage } from '@/shared/ui/app-image'
import { Clouds } from '@/shared/ui/clouds'
import { Container } from '@/shared/ui/container'

export function JoinCta() {
  return (
    <section id="join-cta" className="py-20 md:py-28">
      <Container>
        <div className="relative grid items-center gap-10 overflow-hidden rounded-4xl bg-linear-to-br from-azure to-azure-soft p-6 md:p-12 lg:grid-cols-2">
          <Clouds />

          <div className="relative flex flex-col gap-4">
            <h2 className="font-heading text-3xl leading-tight font-semibold text-balance md:text-5xl">
              Готов начать? Вступай в {siteConfig.name}
            </h2>
            <p className="max-w-md text-muted-foreground">
              Оставь заявку — мы напишем в Telegram в течение двух дней и пригласим на ближайшую
              встречу. Опыт не нужен, нужен только интерес.
            </p>
            <AppImage
              src={imageUrl('mascot-laptop.webp')}
              alt="Маскот клуба с ноутбуком"
              loading="lazy"
              className="mt-4 hidden aspect-square w-64 rounded-3xl object-contain motion-safe:animate-float lg:block"
            />
          </div>

          <div className="relative rounded-3xl bg-card p-6 shadow-xl shadow-azure/40 md:p-8">
            <JoinForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
