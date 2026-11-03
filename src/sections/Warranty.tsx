import { ShieldCheck, X } from 'lucide-react'
import { WARRANTY } from '@/content/home'
import { Section } from '@/components/Section'

export function Warranty() {
  return (
    <Section id="garantia" label="04 · Garantía" title="Tu reparación tiene garantía digital">
      <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
        <div className="relative overflow-hidden border border-acero bg-grafito p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_65%)]"
          />
          <ShieldCheck className="size-10 text-cian" aria-hidden />
          <p className="mt-4 font-display text-6xl font-bold sm:text-7xl">{WARRANTY.days}</p>
          <p className="mt-2 text-xl">{WARRANTY.covers}</p>
          <p className="mt-4 max-w-prose text-niebla">{WARRANTY.delivery}</p>
        </div>
        <div className="border border-acero p-6 sm:p-8">
          <h3 className="text-2xl font-semibold">No cubre</h3>
          <ul className="mt-5 grid gap-3">
            {WARRANTY.excludes.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <X className="size-5 shrink-0 text-alerta" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
