import { CONTACT_EMAIL, FACEBOOK_URL, HOURS_LABEL, INSTAGRAM_URL, LEGAL_NAME, TAGLINE, WHATSAPP_DISPLAY } from '@/site'
import { waLink } from '@/lib/whatsapp'
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './BrandIcons'
import { Pending } from './Pending'

export function Footer() {
  const link = 'inline-flex min-h-11 items-center gap-3 hover:text-cian'
  return (
    <footer className="border-t border-acero bg-grafito pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="grid content-start gap-4">
          <img src="/brand/systel-firma.svg" alt="Systel MTY" width={179} height={48} className="h-12 w-auto justify-self-start" />
          <p className="max-w-sm text-niebla">{TAGLINE}. Hardware y desarrollo de software con IA.</p>
        </div>
        <div className="grid content-start gap-2">
          <h2 className="label-mono text-niebla">Contacto</h2>
          <ul className="grid">
            <li>
              <a href={waLink('reparacion')} target="_blank" rel="noopener" className={link}>
                <WhatsAppIcon className="size-5 text-cian" />
                <span>
                  WhatsApp <span className="font-mono text-sm text-niebla">{WHATSAPP_DISPLAY}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener" className={link}>
                <FacebookIcon className="size-5 text-cian" />
                Facebook
              </a>
            </li>
            <li>
              {INSTAGRAM_URL ? (
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className={link}>
                  <InstagramIcon className="size-5 text-cian" />
                  Instagram
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center gap-3 text-niebla">
                  <InstagramIcon className="size-5" />
                  Instagram <Pending what="usuario de Instagram" />
                </span>
              )}
            </li>
          </ul>
        </div>
        <div className="grid content-start gap-2">
          <h2 className="label-mono text-niebla">Horario de visitas</h2>
          <p>{HOURS_LABEL}</p>
          <p className="text-sm text-niebla">El asistente de WhatsApp contesta las 24 horas.</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-acero px-4 pt-6 text-sm text-niebla sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {LEGAL_NAME}
        </p>
        <p className="flex flex-wrap gap-x-6 gap-y-1">
          <a href="/aviso-de-privacidad" className="underline underline-offset-4 hover:text-hielo">
            Aviso de privacidad
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 hover:text-hielo">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  )
}
