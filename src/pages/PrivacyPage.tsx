import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CONTACT_EMAIL, LEGAL_NAME } from '@/site'
import { PRIVACY_SECTIONS, PRIVACY_UPDATED } from '@/content/privacy'

/** Splits the paragraph around the contact email so it renders as a mailto link. */
function withEmailLink(text: string) {
  const [before, after] = text.split(CONTACT_EMAIL)
  if (after === undefined) return text
  return (
    <>
      {before}
      <a href={`mailto:${CONTACT_EMAIL}`} className="text-cian underline underline-offset-4">
        {CONTACT_EMAIL}
      </a>
      {after}
    </>
  )
}

export function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="contenido" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="label-mono text-cian">{LEGAL_NAME}</p>
        <h1 className="mt-3 text-5xl font-bold sm:text-6xl">Aviso de privacidad</h1>
        <p className="mt-3 font-mono text-sm text-niebla">Última actualización: {PRIVACY_UPDATED}</p>
        <div className="mt-10 grid gap-10">
          {PRIVACY_SECTIONS.map((section) => (
            <section key={section.title} className="grid gap-3 border-t border-acero pt-6">
              <h2 className="text-3xl font-semibold">{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="text-niebla">
                  {withEmailLink(p)}
                </p>
              ))}
            </section>
          ))}
        </div>
        <p className="mt-12">
          <a href="/" className="font-semibold text-cian underline underline-offset-4">
            ← Volver al inicio
          </a>
        </p>
      </main>
      <Footer />
    </>
  )
}
