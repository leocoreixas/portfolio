import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

const EMAIL = 'dvms.ambiental@gmail.com'
const PHONE_DISPLAY = '(21) 99554-6108'
const PHONE_LINK = '+5521995546108'
const LINKEDIN_URL = 'https://www.linkedin.com/in/danilovmsantos/'

export function Contact() {
  const { t } = useTranslation()

  const cards = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: PHONE_DISPLAY,
      href: `https://wa.me/${PHONE_LINK}`,
    },
    {
      icon: ExternalLink,
      label: t('contact.linkedin'),
      value: 'danilovmsantos',
      href: LINKEDIN_URL,
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: t('contact.locationValue'),
      href: undefined,
    },
  ]

  return (
    <section id="contato" className="bg-forest-900 py-24 text-paper-50">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-sage-300 uppercase">
            {t('contact.kicker')}
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-paper-100/75">{t('contact.subtitle')}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {cards.map((card) => {
            const content = (
              <div className="flex items-center gap-4 rounded-xl border border-paper-50/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
                <card.icon className="size-5 shrink-0 text-sage-300" />
                <div>
                  <p className="text-xs tracking-wide text-paper-100/60 uppercase">
                    {card.label}
                  </p>
                  <p className="font-medium text-paper-50">{card.value}</p>
                </div>
              </div>
            )
            return card.href ? (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={card.label}>{content}</div>
            )
          })}
        </div>

        <div className="mt-10">
          <Button
            size="lg"
            nativeButton={false}
            className="bg-sage-200 text-forest-900 hover:bg-sage-300"
            render={<a href={`mailto:${EMAIL}`} />}
          >
            <Mail className="size-4" />
            {t('contact.sendEmail')}
          </Button>
        </div>
      </div>
    </section>
  )
}
