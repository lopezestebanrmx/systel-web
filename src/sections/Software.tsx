import { ArrowUpRight, BellRing, Bot, Boxes, Check } from 'lucide-react'
import { SOFTWARE } from '@/content/home'
import { CHAT_CASE } from '@/content/chatCase'
import { FIXFLOW_URL } from '@/site'
import { Section } from '@/components/Section'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { ChatCase } from '@/components/ChatCase'

const ICONS = [Bot, Boxes, BellRing]

export function Software() {
  return (
    <Section
      id="software"
      tone="alt"
      label="05 · Software e IA"
      title="Desarrollo de software e IA para tu negocio"
      intro={SOFTWARE.intro}
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {SOFTWARE.examples.map((example, i) => {
          const Icon = ICONS[i]
          return (
            <li key={example.title} className="card grid content-start gap-3 p-6">
              <Icon className="size-7 text-accent" aria-hidden />
              <h3 className="text-2xl font-semibold">{example.title}</h3>
              <p className="text-muted">{example.text}</p>
            </li>
          )
        })}
      </ul>
      <div className="card mt-4 grid gap-8 border-l-2 border-l-cian p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-12">
        <div className="grid content-start gap-5 lg:sticky lg:top-24 lg:self-start">
          <p className="label-mono text-accent">Caso propio · FixFlow</p>
          <p className="text-lg">{SOFTWARE.fixflow}</p>
          <div className="grid gap-3">
            <h3 className="text-2xl font-semibold">Así atiende nuestro asistente por WhatsApp</h3>
            <ul className="grid gap-3">
              {CHAT_CASE.highlights.map((point) => (
                <li key={point} className="grid grid-cols-[1.25rem_1fr] gap-2.5">
                  <Check className="mt-1 size-4 text-accent" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <a
              href={FIXFLOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-6 py-3 text-center font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Ve FixFlow, nuestro software para talleres de reparación de celulares
              <ArrowUpRight className="size-5 shrink-0" aria-hidden />
              <span className="sr-only">(se abre en otra pestaña)</span>
            </a>
            <WhatsAppButton topic="software" variant="secondary">Platiquemos tu proyecto</WhatsAppButton>
          </div>
        </div>
        <ChatCase />
      </div>
    </Section>
  )
}
