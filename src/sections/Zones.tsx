import { CircleCheck, Handshake, type LucideIcon } from 'lucide-react'
import { ZONES_INCLUDED, ZONES_NEGOTIATED } from '@/site'
import { REVIEW_FEE } from '@/content/home'
import { Section } from '@/components/Section'
import { PhotoFigure } from '@/components/PhotoFigure'
import { PHOTOS } from '@/content/photos'

function ZoneList({ Icon, title, text, zones, bar }: { Icon: LucideIcon; title: string; text: string; zones: string[]; bar: string }) {
  return (
    <div className="card relative p-6 sm:p-8">
      <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${bar}`} />
      <h3 className="flex items-center gap-2.5 text-2xl font-semibold">
        <Icon className="size-6 shrink-0 text-accent" aria-hidden />
        {title}
      </h3>
      <p className="mt-2 text-muted">{text}</p>
      <ul className="mt-5 grid gap-2 text-lg">
        {zones.map((zone) => (
          <li key={zone} className="border-b border-line pb-2 last:border-0">
            {zone}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Zones() {
  return (
    <Section id="zonas" tone="alt" label="03 · Cobertura" title="Zonas donde te visitamos">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid content-start gap-3 md:col-span-2 lg:col-span-1">
          <PhotoFigure photo={PHOTOS.zonas} sizes="(min-width: 1152px) 355px, (min-width: 1024px) 31vw, calc(100vw - 32px)" />
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted" aria-label="Simbología del mapa">
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="size-3 rotate-45 border-2 border-cian bg-cian/20" />
              Vamos
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="size-3 rotate-45 border-2 border-dashed border-cobalto" />
              Se negocia
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="size-3 rotate-45 border-2 border-line" />
              No cubrimos
            </li>
          </ul>
        </div>
        <ZoneList
          Icon={CircleCheck}
          title="Traslado incluido"
          text={`En celulares, la revisión de ${REVIEW_FEE} ya incluye que el técnico llegue a ti.`}
          zones={ZONES_INCLUDED}
          bar="bg-cian"
        />
        <ZoneList
          Icon={Handshake}
          title="Traslado a convenir"
          text="También vamos. El costo del traslado lo acordamos contigo por WhatsApp antes de agendar."
          zones={ZONES_NEGOTIATED}
          bar="bg-cobalto"
        />
      </div>
    </Section>
  )
}
