import { WhatsAppButton } from './WhatsAppButton'

const NAV = [
  ['/#servicios', 'Servicios'],
  ['/#como-funciona', 'Cómo funciona'],
  ['/#zonas', 'Zonas'],
  ['/#garantia', 'Garantía'],
  ['/#software', 'Software e IA'],
  ['/#preguntas', 'Preguntas'],
] as const

/** Sticky top bar. Section links show from lg up; on phones the page is one scroll and the CTA stays visible. */
export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-acero bg-void/90 pt-[env(safe-area-inset-top)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/" className="shrink-0" aria-label="Systel, inicio">
          <img src="/brand/systel-firma.svg" alt="" width={149} height={40} className="h-9 w-auto sm:h-10" />
        </a>
        <nav aria-label="Secciones" className="hidden lg:block">
          <ul className="flex gap-6 text-sm text-niebla">
            {NAV.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-hielo">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <WhatsAppButton topic="reparacion" size="sm">
          Cotiza<span className="hidden sm:inline"> por WhatsApp</span>
        </WhatsAppButton>
      </div>
    </header>
  )
}
