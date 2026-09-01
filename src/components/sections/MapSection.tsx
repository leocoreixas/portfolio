import 'maplibre-gl/dist/maplibre-gl.css'
import { useState } from 'react'
import { Map, Marker, Popup, NavigationControl } from 'react-map-gl/maplibre'
import { useTranslation } from 'react-i18next'
import { projects } from '@/lib/projects'

const MAP_STYLE = 'https://demotiles.maplibre.org/style.json'

export function MapSection() {
  const {
    t,
    i18n: { language },
  } = useTranslation()
  const lang = language?.startsWith('en') ? 'en' : 'pt'
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = projects.find((p) => p.id === activeId)

  return (
    <section className="bg-paper-100 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-moss-500 uppercase">
            {t('map.kicker')}
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-ink-950 sm:text-4xl">
            {t('map.title')}
          </h2>
          <p className="mt-3 text-ink-900/70">{t('map.subtitle')}</p>
        </div>

        <div className="mt-10 h-[480px] overflow-hidden rounded-2xl border border-border shadow-sm">
          <Map
            initialViewState={{ longitude: -43.8, latitude: -22.2, zoom: 5.4 }}
            mapStyle={MAP_STYLE}
            style={{ width: '100%', height: '100%' }}
          >
            <NavigationControl position="top-right" />
            {projects.map((project) => (
              <Marker
                key={project.id}
                longitude={project.coordinates[0]}
                latitude={project.coordinates[1]}
                anchor="bottom"
                onClick={(e) => {
                  e.originalEvent.stopPropagation()
                  setActiveId(project.id)
                }}
              >
                <span className="block size-4 cursor-pointer rounded-full border-2 border-white bg-clay-500 shadow-md" />
              </Marker>
            ))}

            {active && (
              <Popup
                longitude={active.coordinates[0]}
                latitude={active.coordinates[1]}
                anchor="top"
                onClose={() => setActiveId(null)}
                closeButton
                closeOnClick={false}
              >
                <div className="max-w-[220px] p-1">
                  <p className="font-display text-sm font-semibold text-ink-950">
                    {active.title[lang]}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {active.location[lang]}
                  </p>
                </div>
              </Popup>
            )}
          </Map>
        </div>
      </div>
    </section>
  )
}
