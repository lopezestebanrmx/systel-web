// A real WhatsApp chat with Systel's assistant (FixFlow's quote bot), copied word for word from
// FixFlow's inbox on 2026-11-04. It was the owner's own test, so no customer appears in it; even so
// the address is hidden and a few messages are left out (marked). Never edit what a message says:
// only cut it, and mark the cut with […]. *bold* is WhatsApp formatting.

export type ChatMessage =
  | { from: 'cliente' | 'bot'; time: string; text: string }
  | { from: 'oculto'; time: string; text: string }
  | { from: 'corte'; text: string }

export const CHAT_CASE = {
  date: '29 de octubre de 2026',
  /** What the assistant did in this chat, nothing more. */
  highlights: [
    'Explicó cómo trabajamos: a domicilio, frente al cliente y pago al terminar.',
    'Dio las tres calidades de pantalla con su precio, tomado de nuestro catálogo.',
    'Recomendó una según el uso que el cliente le da al celular.',
    'Ofreció horarios libres del mismo día y agendó la visita con la dirección.',
  ],
  messages: [
    { from: 'cliente', time: '12:33', text: 'Hola se me quebro la pantalla de mi cel. Me pueden ayudar?' },
    { from: 'corte', text: 'El cliente confirma que es su iPhone 14 Pro y pregunta cómo trabajamos.' },
    {
      from: 'bot',
      time: '12:35',
      text:
        '[…] Para la pantalla del iPhone 14 Pro tengo estas opciones:\n' +
        '- Genérica: *$1,800* (la más económica)\n' +
        '- OLED: *$2,300* (colores y negros muy cercanos al original)\n' +
        '- Original clean: *$3,300* (el sistema la reconoce como original, sin avisos) […]',
    },
    { from: 'cliente', time: '12:46', text: 'Con la de 1800 en cuanto tiempo pueden venir?' },
    {
      from: 'bot',
      time: '12:46',
      text: '¡Podemos hoy mismo! […] Horarios disponibles hoy: 14:00, 14:30 o 15:00. ¿Cuál te acomoda? Pásame también tu dirección completa (calle, número, colonia y ciudad).',
    },
    { from: 'corte', text: 'El cliente manda su dirección (oculta) y pide las 15:30.' },
    {
      from: 'bot',
      time: '12:49',
      text: '¡Listo, tu visita quedó confirmada! 🎉\n\n- Hoy jueves 29 de octubre, 15:30\n- [Dirección oculta] […]',
    },
  ] satisfies ChatMessage[],
}
