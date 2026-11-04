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
    {
      from: 'bot',
      time: '12:34',
      text: '¡Claro, te ayudo! 😊 ¿Es el mismo iPhone 14 Pro del que hablamos hace rato o es otro equipo? Si es otro, dime marca y modelo.',
    },
    { from: 'cliente', time: '12:34', text: 'Es el mismo, como trabajan?' },
    {
      from: 'bot',
      time: '12:35',
      text:
        'Trabajamos a domicilio: el técnico va a tu casa u oficina, revisa tu iPhone frente a ti y normalmente lo repara ahí mismo. Pagas al terminar. […]\n\n' +
        'Para la pantalla del iPhone 14 Pro tengo estas opciones:\n' +
        '- Genérica: *$1,800* (la más económica)\n' +
        '- OLED: *$2,300* (colores y negros muy cercanos al original)\n' +
        '- Original clean: *$3,300* (el sistema la reconoce como original, sin avisos)\n\n' +
        'Para recomendarte una: ¿usas mucho el cel (redes, fotos, video) y te importa que no salga el aviso de pieza no genuina?',
    },
    { from: 'cliente', time: '12:44', text: 'Si para redes, fotos y video' },
    {
      from: 'bot',
      time: '12:44',
      text:
        'Para uso de redes, fotos y video te recomiendo la *OLED* de *$2,300*. Tiene colores intensos y negros profundos, muy cercanos al original, a precio intermedio. Ojo: el sistema puede mostrar un aviso de pieza desconocida.\n\n' +
        'Alternativas:\n' +
        '- Genérica: *$1,800* (colores menos vivos, algo más de consumo de batería)\n' +
        '- Original clean: *$3,300* (sin avisos de pieza no genuina)\n\n' +
        '¿Con cuál te quedas? Con eso te calculo la entrega y el total.',
    },
    { from: 'cliente', time: '12:46', text: 'Con la de 1800 en cuanto tiempo pueden venir?' },
    {
      from: 'bot',
      time: '12:46',
      text:
        '¡Podemos hoy mismo! El técnico puede llegar hoy y la reparación toma entre 30 y 45 minutos de trabajo. La hora exacta de entrega la confirma el técnico en la visita.\n\n' +
        'Cotización:\n' +
        '- Cambio de pantalla Genérica: *$1,800*\n' +
        '- Total: *$1,800* (pagas al terminar)\n\n' +
        'Horarios disponibles hoy: 14:00, 14:30 o 15:00. ¿Cuál te acomoda? Pásame también tu dirección completa (calle, número, colonia y ciudad).',
    },
    { from: 'oculto', time: '12:48', text: 'Dirección y referencias del cliente (ocultas)' },
    { from: 'corte', text: 'El asistente confirma el número del local y la ciudad, y el cliente pide las 15:30.' },
    {
      from: 'bot',
      time: '12:49',
      text:
        '¡Listo, tu visita quedó confirmada! 🎉\n\n' +
        '- Hoy jueves 29 de octubre, 15:30\n' +
        '- [Dirección oculta]\n\n' +
        'El técnico revisa tu iPhone 14 Pro frente a ti y, si se puede, cambia la pantalla Genérica ahí mismo por *$1,800*. Pagas al terminar. Si hace falta revisión, cuesta *$300* y se abona al total de la reparación.',
    },
  ] satisfies ChatMessage[],
}
