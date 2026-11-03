import { CircleCheck, Handshake, type LucideIcon } from 'lucide-react'
import { ZONES_INCLUDED, ZONES_NEGOTIATED } from '@/site'
import { REVIEW_FEE } from '@/content/home'
import { Section } from '@/components/Section'

function ZoneList({ Icon, title, text, zones, accent }: { Icon: LucideIcon; title: string; text: string; zones: string[]; accent: string }) {
  return (
    <div className={`border border-acero border-t-2 bg-grafito p-6 sm:p-8 ${accent}`}>
      <h3 className="flex items-center gap-2.5 text-2xl font-semibold">
        <Icon className="size-6 shrink-0 text-cian" aria-hidden />
        {title}
      </h3>
      <p className="mt-2 text-niebla">{text}</p>
      <ul className="mt-5 grid gap-2 text-lg">
        {zones.map((zone) => (
          <li key={zone} className="border-b border-acero pb-2 last:border-0">
            {zone}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Zones() {
  return (
    <Section id="zonas" label="03 · Cobertura" title="Zonas donde te visitamos">
      <div className="grid gap-4 md:grid-cols-2">
        <ZoneList
          Icon={CircleCheck}
          title="Traslado incluido"
          text={`En celulares, la revisión de ${REVIEW_FEE} ya incluye que el técnico llegue a ti.`}
          zones={ZONES_INCLUDED}
          accent="border-t-cian"
        />
        <ZoneList
          Icon={Handshake}
          title="Traslado a convenir"
          text="También vamos. El costo del traslado lo acordamos contigo por WhatsApp antes de agendar."
          zones={ZONES_NEGOTIATED}
          accent="border-t-cobalto"
        />
      </div>
    </Section>
  )
}
