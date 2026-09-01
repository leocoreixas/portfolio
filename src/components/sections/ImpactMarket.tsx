import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface MarketCase {
  name: string
  description: string
}

export function ImpactMarket() {
  const { t } = useTranslation()
  const cases = t('marketSection.cases', { returnObjects: true }) as MarketCase[]

  return (
    <section id="mercado" className="bg-paper-50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-moss-500 uppercase">
            {t('marketSection.kicker')}
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink-950 sm:text-4xl">
            {t('marketSection.title')}
          </h2>
          <p className="mt-4 text-ink-900/80">{t('marketSection.intro')}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cases.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <TrendingUp className="size-5 text-clay-500" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl border-l-2 border-forest-700 pl-5 text-balance text-lg font-medium text-ink-950 italic">
          {t('marketSection.conclusion')}
        </p>
      </div>
    </section>
  )
}
