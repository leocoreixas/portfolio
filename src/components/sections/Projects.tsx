import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export function Projects() {
  const { t } = useTranslation()

  return (
    <section id="mapas" className="bg-paper-50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-moss-500 uppercase">
            {t('projects.kicker')}
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink-950 sm:text-4xl">
            {t('projects.title')}
          </h2>
          <p className="mt-3 text-ink-900/70">{t('projects.subtitle')}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
