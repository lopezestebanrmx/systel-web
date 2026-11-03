import { ChevronDown } from 'lucide-react'
import { FAQ } from '@/content/home'
import { Section } from '@/components/Section'

/** Native <details>: keyboard and screen-reader friendly, no JavaScript. */
export function Faq() {
  return (
    <Section id="preguntas" label="06 · Preguntas frecuentes" title="Lo que más nos preguntan">
      <div className="grid max-w-3xl gap-3">
        {FAQ.map(({ q, a }) => (
          <details key={q} className="group card open:border-accent/40">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 text-lg font-semibold text-ink-strong [&::-webkit-details-marker]:hidden">
              {q}
              <ChevronDown className="size-5 shrink-0 text-accent transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <p className="px-5 pb-5 text-muted">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
