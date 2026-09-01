import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface ServiceItem {
  code: string
  title: string
  description: string
}

export function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as ServiceItem[]

  return (
    <section id="servicos" className="bg-forest-900 py-24 text-paper-50">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-sage-300 uppercase">
            {t('services.kicker')}
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {t('services.title')}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-2xl border border-paper-50/10 bg-white/5 p-7"
            >
              <span className="font-display text-2xl font-semibold text-sage-300">
                {item.code}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-paper-50">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-100/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
