// Business facts and SEO data in one place. vite.config.ts imports this file
// to build each page's <head>, robots.txt and sitemap.xml, so it must stay
// free of imports.

/** Public origin, no trailing slash. Change it here when the own domain arrives. */
export const SITE_URL = 'https://systel-web.vercel.app'

export const BRAND = 'Systel'
/** Name in the schema and the legal text. Never "Systel MX". */
export const LEGAL_NAME = 'Systel MTY'
export const TAGLINE = 'Reparación de celulares a domicilio en Monterrey'

export const WHATSAPP_NUMBER = '522298519108'
export const WHATSAPP_DISPLAY = '+52 229 851 9108'
export const FACEBOOK_URL = 'https://www.facebook.com/systelmty/'
/** null until the account is ready; the footer shows it as pending. */
export const INSTAGRAM_URL: string | null = null
export const CONTACT_EMAIL = 'systel.ventas@gmail.com'

export const HOURS_LABEL = 'Lunes a sábado, 10:00 a 19:00'

/** Where the $300 review already includes the trip. */
export const ZONES_INCLUDED = ['Monterrey (excepto Cumbres)', 'Guadalupe', 'San Nicolás', 'San Pedro']
/** Reached with a trip cost agreed on WhatsApp. */
export const ZONES_NEGOTIATED = ['Santa Catarina', 'Cumbres', 'García']
/** Official city names for schema.org areaServed. */
const AREA_SERVED = ['Monterrey', 'Guadalupe', 'San Nicolás de los Garza', 'San Pedro Garza García']

export const OG_IMAGE = '/og-systel.png'

export type PageId = 'home' | 'privacy'

export const PAGES: Record<PageId, { path: string; title: string; description: string }> = {
  home: {
    path: '/',
    title: `${BRAND} · ${TAGLINE}`,
    description:
      'Reparamos tu celular en tu casa u oficina, frente a ti, y pagas al final. Monterrey, Guadalupe, San Nicolás y San Pedro. Cotiza por WhatsApp.',
  },
  privacy: {
    path: '/aviso-de-privacidad',
    title: `Aviso de privacidad · ${LEGAL_NAME}`,
    description: 'Este sitio no recopila datos personales. Así cuidamos tu información cuando nos escribes por WhatsApp.',
  },
}

/** schema.org LocalBusiness as a service-area business: no address on purpose. */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#negocio`,
    name: LEGAL_NAME,
    alternateName: BRAND,
    description: PAGES.home.description,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/systel-isotipo.svg`,
    image: `${SITE_URL}${OG_IMAGE}`,
    telephone: `+${WHATSAPP_NUMBER}`,
    email: CONTACT_EMAIL,
    sameAs: [FACEBOOK_URL, ...(INSTAGRAM_URL ? [INSTAGRAM_URL] : [])],
    areaServed: AREA_SERVED.map((name) => ({
      '@type': 'City',
      name,
      containedInPlace: { '@type': 'State', name: 'Nuevo León' },
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
    ],
  }
}
