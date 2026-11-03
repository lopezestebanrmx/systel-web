import { WhatsAppButton } from '@/components/WhatsAppButton'
import { HOURS_LABEL } from '@/site'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-titulo" className="honeycomb relative border-t border-acero">
      <div className="absolute inset-0 bg-void/85" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl justify-items-start gap-5 px-4 py-16 sm:px-6 sm:py-24">
        <h2 id="cta-titulo" className="max-w-3xl text-4xl font-bold sm:text-5xl">
          ¿Se rompió tu celular? Escríbenos y lo reparamos frente a ti.
        </h2>
        <p className="text-lg text-niebla">
          Visitas de {HOURS_LABEL.toLowerCase()}. El asistente te contesta las 24 horas.
        </p>
        <WhatsAppButton topic="reparacion">Cotiza por WhatsApp</WhatsAppButton>
      </div>
    </section>
  )
}
