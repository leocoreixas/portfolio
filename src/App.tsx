import { Suspense, lazy } from 'react'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { ImpactMarket } from '@/components/sections/ImpactMarket'
import { Projects } from '@/components/sections/Projects'
import { Services } from '@/components/sections/Services'
import { Skills } from '@/components/sections/Skills'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const MapSection = lazy(() =>
  import('@/components/sections/MapSection').then((m) => ({
    default: m.MapSection,
  }))
)

function App() {
  return (
    <div className="min-h-screen bg-paper-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Suspense fallback={<div className="h-[480px] bg-paper-100" />}>
          <MapSection />
        </Suspense>
        <ImpactMarket />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

