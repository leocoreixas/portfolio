import { motion } from 'framer-motion'
import { Globe2, Sprout } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()

  const facts = [
    {
      icon: Sprout,
      value: t('about.factExperience'),
      label: t('about.factExperienceLabel'),
    },
    {
      icon: Globe2,
      value: t('about.factLanguages'),
      label: t('about.factLanguagesLabel'),
    },
  ]

  return (
    <section id="sobre" className="bg-paper-50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest text-moss-500 uppercase">
              {t('about.kicker')}
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-ink-950 sm:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-balance text-lg leading-relaxed text-ink-900/80">
              {t('about.bio')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 shadow-sm"
              >
                <fact.icon className="mt-0.5 size-5 shrink-0 text-forest-700" />
                <div>
                  <p className="font-display text-lg font-semibold text-ink-950">
                    {fact.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
