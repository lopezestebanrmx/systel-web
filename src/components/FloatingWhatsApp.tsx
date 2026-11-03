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
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 grid size-14 place-items-center rounded-full bg-cian text-void shadow-[0_0_32px_-4px_rgba(34,211,238,0.6)] transition-colors hover:bg-hielo lg:hidden"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
