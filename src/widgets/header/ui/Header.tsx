import { joinHref, navLinks, siteConfig } from '@/shared/config'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Logo } from '@/shared/ui/logo'

import { MobileNav } from './MobileNav'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <Container>
        <div className="flex items-center justify-between gap-4 rounded-full border bg-card/90 py-2 pr-2 pl-5 shadow-lg shadow-azure/30 backdrop-blur">
          <a href="#hero" aria-label={`${siteConfig.name} — в начало`}>
            <Logo name={siteConfig.name} />
          </a>

          <nav aria-label="Основная навигация" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="pill"
              className="hidden shadow-md shadow-primary/25 sm:inline-flex"
            >
              <a href={joinHref}>Вступить</a>
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  )
}
