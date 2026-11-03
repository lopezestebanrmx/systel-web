import { BellRing, Bot, Boxes } from 'lucide-react'
import { SOFTWARE } from '@/content/home'
import { Section } from '@/components/Section'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const ICONS = [Bot, Boxes, BellRing]

/** One of the two dark blocks: the technology line reads as its own thing. */
export function Software() {
  return (
    <Section
      id="software"
      tone="dark"
      label="05 · Software e IA"
      title="Desarrollo de software e IA para tu negocio"
      intro={SOFTWARE.intro}
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {SOFTWARE.examples.map((example, i) => {
          const Icon = ICONS[i]
          return (
            <li key={example.title} className="grid content-start gap-3 border border-line bg-surface p-6">
              <Icon className="size-7 text-cobalto" aria-hidden />
              <h3 className="text-2xl font-semibold">{example.title}</h3>
              <p className="text-muted">{example.text}</p>
            </li>
          )
        })}
      </ul>
      <div className="mt-4 grid gap-6 border border-line border-l-2 border-l-accent p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="grid gap-2">
          <p className="label-mono text-accent">Caso propio</p>
          <p className="text-lg">{SOFTWARE.fixflow}</p>
        </div>
        <WhatsAppButton topic="software">Platiquemos tu proyecto</WhatsAppButton>
      </div>
    </Section>
  )
}
