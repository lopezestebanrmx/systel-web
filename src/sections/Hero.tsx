import { HERO } from '@/content/home'
import { BRAND, TAGLINE } from '@/site'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { PhotoFigure } from '@/components/PhotoFigure'
import { PHOTOS } from '@/content/photos'

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden bg-page">
      {/* Brand detail: a soft cian–cobalto wash behind the photo. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-48 size-[44rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),rgba(47,107,255,0.10)_45%,transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
        <div className="grid gap-6">
          <p className="label-mono text-accent">
            {BRAND} · {TAGLINE}
          </p>
          <h1 id="hero-titulo" className="text-5xl font-bold sm:text-6xl">
            {HERO.title}
          </h1>
          <p className="max-w-2xl text-lg text-muted sm:text-xl">{HERO.lead}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton topic="reparacion">Cotiza por WhatsApp</WhatsAppButton>
            <a
              href="#como-funciona"
              className="inline-flex min-h-12 items-center justify-center border border-line bg-surface px-6 font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Cómo funciona
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted">
            {HERO.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span className="size-2 bg-cian" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <PhotoFigure
          photo={PHOTOS.banco}
          priority
          sizes="(min-width: 1152px) 512px, (min-width: 1024px) 44vw, calc(100vw - 32px)"
        />
      </div>
      <div aria-hidden="true" className="h-px bg-linear-to-r from-transparent via-cian/60 to-transparent" />
    </section>
  )
}
