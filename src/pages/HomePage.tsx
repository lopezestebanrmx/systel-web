import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { Hero } from '@/sections/Hero'
import { Services } from '@/sections/Services'
import { HowItWorks } from '@/sections/HowItWorks'
import { Zones } from '@/sections/Zones'
import { Warranty } from '@/sections/Warranty'
import { Software } from '@/sections/Software'
import { Faq } from '@/sections/Faq'
import { FinalCta } from '@/sections/FinalCta'

export function HomePage() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-cian focus:px-4 focus:py-2 focus:text-void">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Services />
        <HowItWorks />
        <Zones />
        <Warranty />
        <Software />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
