import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface SkillGroup {
  name: string
  items: string[]
}

export function Skills() {
  const { t } = useTranslation()
  const groups = t('skills.groups', { returnObjects: true }) as SkillGroup[]

  return (
    <section id="ferramentas" className="bg-paper-100 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-moss-500 uppercase">
            {t('skills.kicker')}
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink-950 sm:text-4xl">
            {t('skills.title')}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{group.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary" className="h-auto py-1">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
