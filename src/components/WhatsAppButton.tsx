import type { ReactNode } from 'react'
import { waLink, type WaTopic } from '@/lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'

type Props = {
  topic: WaTopic
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'sm'
  className?: string
}

/** Opens WhatsApp with the section's prefilled message. */
export function WhatsAppButton({ topic, children, variant = 'primary', size = 'md', className = '' }: Props) {
  const look =
    variant === 'primary'
      ? 'bg-cian text-void hover:bg-hielo shadow-[0_0_32px_-6px_rgba(34,211,238,0.45)]'
      : 'border border-cian/60 text-hielo hover:border-cian hover:bg-cian/10'
  const dims = size === 'md' ? 'min-h-12 px-6' : 'min-h-10 px-4 text-sm'
  return (
    <a
      href={waLink(topic)}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-2.5 font-semibold transition-colors ${dims} ${look} ${className}`}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      <span>{children}</span>
      <span className="sr-only"> (abre WhatsApp)</span>
    </a>
  )
}
