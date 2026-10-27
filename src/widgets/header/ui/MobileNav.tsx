import { Menu } from 'lucide-react'

import { joinHref, navLinks, siteConfig } from '@/shared/config'
import { Button } from '@/shared/ui/button'
import { Logo } from '@/shared/ui/logo'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet'

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className="rounded-full md:hidden"
          aria-label="Открыть меню"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>
            <Logo name={siteConfig.name} />
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Мобильная навигация" className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <a href={link.href} className="rounded-xl px-3 py-2.5 text-base hover:bg-muted">
                {link.label}
              </a>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <SheetClose asChild>
            <Button asChild size="pill-lg" className="w-full">
              <a href={joinHref}>Вступить в клуб</a>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
