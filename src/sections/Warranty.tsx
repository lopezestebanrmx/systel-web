import { ShieldCheck, X } from 'lucide-react'
import { WARRANTY } from '@/content/home'
import { Section } from '@/components/Section'

export function Warranty() {
  return (
    <Section id="garantia" label="04 · Garantía" title="Tu reparación tiene garantía digital">
      <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
        <div className="card relative overflow-hidden p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.22),rgba(47,107,255,0.08)_50%,transparent_70%)]"
          />
          <ShieldCheck className="relative size-10 text-accent" aria-hidden />
          <p className="relative mt-4 font-display text-6xl font-bold text-ink-strong sm:text-7xl">{WARRANTY.days}</p>
          <p className="relative mt-2 text-xl">{WARRANTY.covers}</p>
          <p className="relative mt-4 max-w-prose text-muted">{WARRANTY.delivery}</p>
        </div>
        <div className="card p-6 sm:p-8">
          <h3 className="text-2xl font-semibold">No cubre</h3>
          <ul className="mt-5 grid gap-3">
            {WARRANTY.excludes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <X className="size-5 shrink-0 text-danger" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
