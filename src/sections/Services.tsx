import type { ReactNode } from 'react'
import { Bot, Check, Cpu, Smartphone, type LucideIcon } from 'lucide-react'
import { HARDWARE_SERVICE, REPAIR_SERVICE, SOFTWARE_SERVICE } from '@/content/home'
import { Section } from '@/components/Section'
import { WhatsAppButton } from '@/components/WhatsAppButton'

type Service = { label: string; title: string; text: string; points: string[] }

function ServiceCard({
  service,
  Icon,
  featured = false,
  children,
}: {
  service: Service
  Icon: LucideIcon
  featured?: boolean
  children: ReactNode
}) {
  return (
    <article
      className={`flex flex-col gap-5 border border-acero bg-grafito p-6 sm:p-8 ${featured ? 'border-t-2 border-t-cian' : ''}`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className={`label-mono ${featured ? 'text-cian' : 'text-niebla'}`}>{service.label}</p>
        <Icon className="size-6 text-cobalto" aria-hidden />
      </div>
      <h3 className="text-3xl font-semibold">{service.title}</h3>
      <p className="text-niebla">{service.text}</p>
      <ul className="grid gap-3">
        {service.points.map((point) => (
          <li key={point} className="grid grid-cols-[1.25rem_1fr] gap-2.5">
            <Check className="mt-1 size-4 text-cian" aria-hidden />
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
      label="01 · Servicios"
      title="Soluciones tecnológicas integrales en Monterrey"
      intro="Reparamos tu celular donde estés, armamos tu computadora y desarrollamos el software de tu negocio."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <ServiceCard service={REPAIR_SERVICE} Icon={Smartphone} featured>
          <WhatsAppButton topic="reparacion" className="w-full">
            Cotiza tu reparación
          </WhatsAppButton>
        </ServiceCard>
        <ServiceCard service={HARDWARE_SERVICE} Icon={Cpu}>
          <WhatsAppButton topic="hardware" variant="secondary" className="w-full">
            Cotiza por WhatsApp
          </WhatsAppButton>
        </ServiceCard>
        <ServiceCard service={SOFTWARE_SERVICE} Icon={Bot}>
          <a
            href="#software"
            className="inline-flex min-h-12 w-full items-center justify-center border border-acero px-6 font-semibold transition-colors hover:border-niebla"
          >
            Ver qué hacemos
          </a>
        </ServiceCard>
      </div>
    </Section>
  )
}
