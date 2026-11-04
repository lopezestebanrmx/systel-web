import type { ReactNode } from 'react'
import { Bot, Check, Cpu, Smartphone, type LucideIcon } from 'lucide-react'
import { HARDWARE_SERVICE, REPAIR_SERVICE, SOFTWARE_SERVICE } from '@/content/home'
import { Section } from '@/components/Section'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { PhotoFigure } from '@/components/PhotoFigure'
import { PHOTOS, type Photo } from '@/content/photos'
import { CodeScreen } from '@/components/CodeScreen'

type Service = { label: string; title: string; text: string; points: string[] }

const CARD_SIZES = '(min-width: 1152px) 320px, (min-width: 1024px) 28vw, calc(100vw - 82px)'

function ServiceCard({ service, Icon, photo, overlay, children }: {
  service: Service
  Icon: LucideIcon
  photo: Photo
  overlay?: ReactNode
  children: ReactNode
}) {
  return (
    <article className="card relative flex flex-col gap-5 p-6 sm:p-8">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-cian to-cobalto" />
      <PhotoFigure photo={photo} sizes={CARD_SIZES} className="aspect-4/3" overlay={overlay} labelInside />
      <div className="flex items-center justify-between gap-3">
        <p className="label-mono text-accent">{service.label}</p>
        <span className="grid size-11 place-items-center rounded-full bg-accent/10">
          <Icon className="size-6 text-accent" aria-hidden />
        </span>
      </div>
      <h3 className="text-3xl font-semibold">{service.title}</h3>
      <p className="text-muted">{service.text}</p>
      <ul className="grid gap-3">
        {service.points.map((point) => (
          <li key={point} className="grid grid-cols-[1.25rem_1fr] gap-2.5">
            <Check className="mt-1 size-4 text-accent" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-2">{children}</div>
    </article>
  )
}

export function Services() {
  return (
    <Section
      id="servicios"
      tone="alt"
      label="01 · Servicios"
      title="Soluciones tecnológicas integrales en Monterrey"
      intro="Reparamos tu celular donde estés, armamos tu computadora y desarrollamos el software de tu negocio."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <ServiceCard service={REPAIR_SERVICE} Icon={Smartphone} photo={PHOTOS.rotaNueva}>
          <WhatsAppButton topic="reparacion" className="w-full">
            Cotiza tu reparación
          </WhatsAppButton>
        </ServiceCard>
        <ServiceCard service={HARDWARE_SERVICE} Icon={Cpu} photo={PHOTOS.microscopio}>
          <WhatsAppButton topic="hardware" variant="secondary" className="w-full">
            Cotiza por WhatsApp
          </WhatsAppButton>
        </ServiceCard>
        <ServiceCard service={SOFTWARE_SERVICE} Icon={Bot} photo={PHOTOS.laptop} overlay={<CodeScreen />}>
          <a
            href="#software"
            className="inline-flex min-h-12 w-full items-center justify-center border border-line px-6 font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Ver qué hacemos
          </a>
        </ServiceCard>
      </div>
    </Section>
  )
}
