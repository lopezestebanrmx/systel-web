import { STEPS } from '@/content/home'
import { Section } from '@/components/Section'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export function HowItWorks() {
  return (
    <Section
      id="como-funciona"
      label="02 · Reparación a domicilio"
      title="Cómo funciona"
      intro="Sin tienda física: el técnico va a tu casa u oficina, repara frente a ti y pagas al final."
    >
      <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {STEPS.map((step, i) => (
          <li key={step.title} className="grid content-start gap-3 border-t-2 border-acero pt-5">
            <span className="font-mono text-sm font-medium text-cian" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="text-2xl font-semibold">
              <span className="sr-only">Paso {i + 1}: </span>
              {step.title}
            </h3>
            <p className="text-niebla">{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <WhatsAppButton topic="reparacion">Agenda tu visita por WhatsApp</WhatsAppButton>
      </div>
    </Section>
  )
}
