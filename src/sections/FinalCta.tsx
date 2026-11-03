import { WhatsAppButton } from '@/components/WhatsAppButton'
import { HOURS_LABEL } from '@/site'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-titulo" className="honeycomb relative overflow-hidden bg-page-alt">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),rgba(47,107,255,0.08)_45%,transparent_70%)]"
      />
      <div className="relative mx-auto grid max-w-6xl justify-items-start gap-5 px-4 py-16 sm:px-6 sm:py-24">
        <h2 id="cta-titulo" className="max-w-3xl text-4xl font-bold sm:text-5xl">
          ¿Se rompió tu celular? Escríbenos y lo reparamos frente a ti.
        </h2>
        <p className="text-lg text-muted">
          Visitas de {HOURS_LABEL.toLowerCase()}. El asistente te contesta las 24 horas.
        </p>
        <WhatsAppButton topic="reparacion">Cotiza por WhatsApp</WhatsAppButton>
      </div>
    </section>
  )
}
