import { Menu } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageToggle } from '@/components/LanguageToggle'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const NAV_ITEMS = [
  { key: 'about', href: '#sobre' },
  { key: 'skills', href: '#ferramentas' },
  { key: 'services', href: '#servicos' },
  { key: 'projects', href: '#mapas' },
  { key: 'market', href: '#mercado' },
  { key: 'contact', href: '#contato' },
] as const

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-paper-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-lg font-semibold text-forest-800">
            D.V.M.S
          </span>
          <span className="hidden text-xs tracking-wide text-muted-foreground sm:inline">
            Environmental Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-900/80 transition-colors hover:bg-secondary/60 hover:text-ink-950"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageToggle />
          </div>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="md:hidden" />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-10 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <SheetClose
                    key={item.key}
                    render={
                      <a
                        href={item.href}
                        className="rounded-lg px-3 py-2.5 text-base font-medium text-ink-900/80 hover:bg-secondary/60"
                      />
                    }
                  >
                    {t(`nav.${item.key}`)}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 px-3">
                <LanguageToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
