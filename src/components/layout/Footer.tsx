import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/70 bg-forest-900 text-paper-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center">
        <span className="font-display text-lg font-semibold">D.V.M.S</span>
        <span className="text-sm text-paper-100/70">Environmental Solutions</span>
        <p className="mt-4 text-xs text-paper-100/60">
          © {year} D.V.M.S Environmental Solutions. {t('footer.rights')}
        </p>
        <p className="text-xs text-paper-100/40">{t('footer.madeWith')}</p>
      </div>
    </footer>
  )
}
