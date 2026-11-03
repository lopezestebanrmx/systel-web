// Short notice for the website only (owner's text, 2026-11-03). It names no person
// and no address on purpose: the full notice is shared on WhatsApp before a visit.
import { CONTACT_EMAIL, LEGAL_NAME } from '@/site'

export const PRIVACY_UPDATED = '3 de noviembre de 2026'

export const PRIVACY_SECTIONS = [
  {
    title: 'Este sitio no recopila datos personales',
    paragraphs: [
      `El sitio web de ${LEGAL_NAME} es informativo. No tiene formularios, no usa cookies, no tiene herramientas de analítica y no carga servicios de terceros. Navegarlo no nos da ningún dato tuyo.`,
    ],
  },
  {
    title: 'El contacto es por WhatsApp',
    paragraphs: [
      'Los botones del sitio abren WhatsApp con un mensaje listo para enviar. Tú decides si lo mandas.',
      'Si contratas un servicio, antes de la visita te compartimos por WhatsApp nuestro aviso de privacidad completo.',
    ],
  },
  {
    title: 'Dudas y derechos ARCO',
    paragraphs: [
      `Para cualquier duda sobre tus datos, o para ejercer tus derechos de acceso, rectificación, cancelación u oposición (ARCO), escríbenos a ${CONTACT_EMAIL}.`,
    ],
  },
]
