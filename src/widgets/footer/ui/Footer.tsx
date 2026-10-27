import { Camera, CodeXml, Mail, MapPin } from 'lucide-react'

import { joinHref, navLinks, siteConfig } from '@/shared/config'
import { Container } from '@/shared/ui/container'
import { Logo } from '@/shared/ui/logo'
import { TelegramIcon } from '@/shared/ui/telegram-icon'

const currentYear = new Date().getFullYear()

const socials = [
  { label: 'Instagram', href: siteConfig.contacts.instagram, icon: Camera },
  { label: 'GitHub', href: siteConfig.contacts.github, icon: CodeXml },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 pt-16 pb-8">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo name={siteConfig.name} />
            <p className="max-w-xs text-sm text-muted-foreground">{siteConfig.description}</p>
            <ul className="flex gap-2">
              <li>
                <a
                  href={siteConfig.contacts.telegram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="block rounded-full transition-transform hover:scale-105"
                >
                  <TelegramIcon className="size-10" />
                </a>
              </li>
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                  >
                    <social.icon className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Навигация в подвале">
            <h2 className="mb-4 text-sm font-semibold">Клуб</h2>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={joinHref} className="hover:text-foreground">
                  Вступить
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-semibold">Контакты</h2>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Mail className="size-4" aria-hidden />
                  {siteConfig.contacts.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4" aria-hidden />
                {siteConfig.contacts.address}
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t pt-6 text-xs text-muted-foreground">
          © {currentYear} {siteConfig.name}. Сделано участниками клуба.
        </p>
      </Container>
    </footer>
  )
}
