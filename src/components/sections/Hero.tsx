import { motion } from 'framer-motion'
import { ArrowDownRight, Leaf } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-forest-900 via-forest-800 to-forest-900 text-paper-50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-5 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-sage-300/30 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-sage-200 uppercase"
        >
          <Leaf className="size-3.5" />
          {t('hero.kicker')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="max-w-3xl text-balance text-4xl leading-[1.08] font-semibold text-paper-50 sm:text-5xl lg:text-6xl"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-sage-200/90"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-2 text-sm font-medium tracking-wide text-clay-500"
        >
          {t('hero.role')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button
            size="lg"
            nativeButton={false}
            className="bg-sage-200 text-forest-900 hover:bg-sage-300"
            render={<a href="#mapas" />}
          >
            {t('hero.ctaProjects')}
            <ArrowDownRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            className="border-paper-50/30 bg-transparent text-paper-50 hover:bg-white/10"
            render={<a href="#contato" />}
          >
            {t('hero.ctaContact')}
          </Button>
        </motion.div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        className="relative block w-full text-paper-50"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 60 C 240 120 480 0 720 40 C 960 80 1200 20 1440 60 L1440 120 L0 120 Z"
        />
      </svg>
    </section>
  )
}
