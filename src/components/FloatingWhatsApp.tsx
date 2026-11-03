import { waLink } from '@/lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'

/** Always-reachable WhatsApp button on phones, where most visitors arrive. */
export function FloatingWhatsApp() {
  return (
    <a
      href={waLink('reparacion')}
      target="_blank"
      rel="noopener"
      aria-label="Cotiza por WhatsApp (abre WhatsApp)"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 grid size-14 place-items-center rounded-full bg-accent text-on-accent shadow-[0_8px_24px_-6px_rgba(38,89,230,0.6)] transition-colors hover:bg-accent-hover lg:hidden"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
