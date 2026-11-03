import { WHATSAPP_NUMBER } from '@/site'

/** Prefilled first message per section, so the chat (and FixFlow's inbox) shows where the customer came from. */
export const WA_MESSAGES = {
  reparacion: 'Hola Systel, quiero cotizar una reparación',
  hardware: 'Hola Systel, quiero cotizar una computadora o una pieza',
  software: 'Hola Systel, quiero platicar sobre un proyecto de software',
} as const

export type WaTopic = keyof typeof WA_MESSAGES

export function waLink(topic: WaTopic): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES[topic])}`
}
