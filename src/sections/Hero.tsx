import { HERO } from '@/content/home'
import { BRAND, TAGLINE } from '@/site'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden bg-page">
      {/* Brand detail: a soft cian–cobalto wash and the isotipo, large and faint. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-48 size-[44rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),rgba(47,107,255,0.10)_45%,transparent_70%)]"
      />
      <img
        src="/brand/systel-isotipo.svg"
        alt=""
        width={480}
        height={480}
        className="pointer-events-none absolute top-1/2 -right-32 hidden size-[30rem] -translate-y-1/2 opacity-15 md:block lg:right-0 lg:opacity-25"
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="grid max-w-3xl gap-6">
          <p className="label-mono text-accent">
            {BRAND} · {TAGLINE}
          </p>
          <h1 id="hero-titulo" className="text-5xl font-bold sm:text-6xl lg:text-7xl">
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
      </div>
      <div aria-hidden="true" className="h-px bg-linear-to-r from-transparent via-cian/60 to-transparent" />
    </section>
  )
}
