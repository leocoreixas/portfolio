import { useTranslation } from 'react-i18next'
import type { Project } from '@/lib/projects'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function ProjectCard({ project }: { project: Project }) {
  const {
    t,
    i18n: { language },
  } = useTranslation()
  const lang = language?.startsWith('en') ? 'en' : 'pt'

  return (
    <Dialog>
      <DialogTrigger
        nativeButton={false}
        render={<Card className="group cursor-pointer overflow-hidden py-0" />}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-forest-900">
          <img
            src={project.image}
            alt={project.title[lang]}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent p-4">
            <span className="text-xs font-medium text-sage-200">
              {project.location[lang]}
            </span>
          </div>
        </div>
        <CardContent className="flex flex-col gap-3 pb-5">
          <h3 className="font-display text-lg leading-snug font-semibold text-ink-950">
            {project.title[lang]}
          </h3>
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {project.description[lang]}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="outline" className="text-[0.7rem]">
                {tool}
              </Badge>
            ))}
          </div>
        </CardContent>
      </DialogTrigger>

      <DialogContent className="max-w-3xl sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            {project.title[lang]}
          </DialogTitle>
          <DialogDescription>{project.location[lang]}</DialogDescription>
        </DialogHeader>
        <img
          src={project.image}
          alt={project.title[lang]}
          className="max-h-[65vh] w-full rounded-lg object-contain"
        />
        <p className="text-sm leading-relaxed text-ink-900/80">
          {project.description[lang]}
        </p>
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-semibold text-muted-foreground">
            {t('projects.tools')}:
          </span>
          {project.tools.map((tool) => (
            <Badge key={tool} variant="secondary">
              {tool}
            </Badge>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
