import { HERO } from '@/content/home'
import { BRAND, TAGLINE } from '@/site'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="honeycomb relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-void/40 via-void/80 to-void" aria-hidden="true" />
      {/* Cyan glow behind the key element, as the brand guide asks (never text shadows). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:grid-cols-[1fr_auto]">
        <div className="grid max-w-3xl gap-6">
          <p className="label-mono text-cian">
            {BRAND} · {TAGLINE}
          </p>
          <h1 id="hero-titulo" className="text-5xl font-bold sm:text-6xl lg:text-7xl">
            {HERO.title}
          </h1>
          <p className="max-w-2xl text-lg text-niebla sm:text-xl">{HERO.lead}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton topic="reparacion">Cotiza por WhatsApp</WhatsAppButton>
            <a
              href="#como-funciona"
              className="inline-flex min-h-12 items-center justify-center border border-acero px-6 font-semibold text-hielo transition-colors hover:border-niebla"
            >
              Cómo funciona
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-niebla">
            {HERO.facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span className="size-2 bg-cobalto" aria-hidden="true" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <img src="/brand/systel-isotipo.svg" alt="" width={288} height={288} className="hidden size-72 lg:block" />
      </div>
    </section>
  )
}
