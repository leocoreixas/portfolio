import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const { i18n } = useTranslation()
  const isPt = i18n.language?.startsWith('pt')

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => i18n.changeLanguage(isPt ? 'en' : 'pt')}
      aria-label="Toggle language"
      className="gap-1.5"
    >
      <Languages className="size-3.5" />
      {isPt ? 'EN' : 'PT'}
    </Button>
  )
}
