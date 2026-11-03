import { CONTACT_EMAIL, FACEBOOK_URL, GOOGLE_PROFILE_URL, HOURS_LABEL, INSTAGRAM_URL, LEGAL_NAME, TAGLINE, WHATSAPP_DISPLAY } from '@/site'
import { waLink } from '@/lib/whatsapp'
import { FacebookIcon, GoogleIcon, InstagramIcon, WhatsAppIcon } from './BrandIcons'
import { Pending } from './Pending'

export function Footer() {
  const link = 'inline-flex min-h-11 items-center gap-3 hover:text-accent'
  return (
    <footer className="border-t border-line bg-page pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="grid content-start gap-4">
          <img src="/brand/systel-firma-claro.svg" alt="Systel MTY" width={179} height={48} className="h-12 w-auto justify-self-start" />
          <p className="max-w-sm text-muted">{TAGLINE}. Hardware y desarrollo de software con IA.</p>
        </div>
        <div className="grid content-start gap-2">
          <h2 className="label-mono text-muted">Contacto</h2>
          <ul className="grid">
            <li>
              <a href={waLink('reparacion')} target="_blank" rel="noopener" className={link}>
                <WhatsAppIcon className="size-5 text-accent" />
                <span>
                  WhatsApp <span className="font-mono text-sm text-muted">{WHATSAPP_DISPLAY}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener" className={link}>
                <FacebookIcon className="size-5 text-accent" />
                Facebook
              </a>
            </li>
            <li>
              {INSTAGRAM_URL ? (
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className={link}>
                  <InstagramIcon className="size-5 text-accent" />
                  Instagram
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center gap-3 text-muted">
                  <InstagramIcon className="size-5" />
                  Instagram <Pending what="usuario de Instagram" />
                </span>
              )}
            </li>
            <li>
              <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener" className={link}>
                <GoogleIcon className="size-5 text-accent" />
                Google
              </a>
            </li>
          </ul>
        </div>
        <div className="grid content-start gap-2">
          <h2 className="label-mono text-muted">Horario de visitas</h2>
          <p>{HOURS_LABEL}</p>
          <p className="text-sm text-muted">El asistente de WhatsApp contesta las 24 horas.</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-line px-4 pt-6 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {LEGAL_NAME}
        </p>
        <p className="flex flex-wrap gap-x-6 gap-y-1">
          <a href="/aviso-de-privacidad" className="underline underline-offset-4 hover:text-ink">
            Aviso de privacidad
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 hover:text-ink">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  )
}
