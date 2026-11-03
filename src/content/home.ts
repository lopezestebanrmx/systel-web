// Every customer-facing sentence of the home page. Rules from the owner:
// - never say the technician takes the device or mention any fee for returning it;
// - no invented numbers, years, testimonials, reviews or client logos;
// - the $300 review (trip included, credited to the repair) is for phones only;
//   tablets and computers: "cotiza la revisión por WhatsApp";
// - payment at the end: cash or bank transfer (no card).
import { HOURS_LABEL } from '@/site'

export const REVIEW_FEE = '$300'

export const HERO = {
  title: 'Reparamos tu celular frente a ti, en tu casa u oficina.',
  lead: `El técnico va a donde estés, te dice qué tiene tu equipo y lo repara frente a ti. Pagas al final. La revisión de tu celular cuesta ${REVIEW_FEE}, incluye el traslado y se abona a la reparación.`,
  facts: [HOURS_LABEL, 'Garantía de 90 días', 'Pagas al final'],
}

export const REPAIR_SERVICE = {
  label: 'Línea principal',
  title: 'Reparación de celulares a domicilio',
  text: 'Vamos a tu casa u oficina y reparamos frente a ti: sin tienda, sin filas y sin perder de vista tu equipo.',
  points: [
    'iPhone, Android, tablets y laptops',
    'Pantalla, batería, centro de carga, cámara y bocina',
    `Revisión de celular: ${REVIEW_FEE}, traslado incluido y abonable a la reparación`,
    'Tablets y computadoras: cotiza la revisión por WhatsApp',
  ],
}

export const HARDWARE_SERVICE = {
  label: 'Hardware',
  title: 'Computadoras a la medida y piezas',
  text: 'Armamos tu computadora de escritorio según lo que necesitas hacer con ella, y te conseguimos la pieza cuando toca un cambio.',
  points: ['Armado de computadoras de escritorio a la medida', 'Venta de piezas para cambios y mejoras'],
}

export const SOFTWARE_SERVICE = {
  label: 'Software e IA',
  title: 'Sistemas a la medida y chatbots con IA',
  text: 'Desarrollamos sistemas para negocios: chatbots de WhatsApp con inteligencia artificial y automatización del trabajo de todos los días.',
  points: ['Chatbots de WhatsApp con IA', 'Inventario y punto de venta', 'Avisos y recordatorios automáticos'],
}

export const STEPS = [
  {
    title: 'Nos escribes por WhatsApp',
    text: 'Cuéntanos el modelo y qué le pasa. Nuestro asistente te contesta las 24 horas, te cotiza y te ayuda a agendar.',
  },
  {
    title: 'Agendamos la visita',
    text: `${HOURS_LABEL}. Agendamos desde el mismo día, con 1 hora de anticipación, en tu casa u oficina.`,
  },
  {
    title: 'Reparamos frente a ti',
    text: 'El técnico revisa tu equipo, te explica qué tiene y lo repara ahí mismo. La mayoría de las reparaciones se hacen en la misma visita, en 45 a 90 min.',
  },
  {
    title: 'Pagas al final y recibes tu garantía',
    text: 'Al terminar la visita pagas en efectivo o por transferencia. Tu garantía te llega por WhatsApp.',
  },
]

export const WARRANTY = {
  days: '90 días',
  covers: 'La reparación y las piezas que instalamos.',
  delivery: 'Al terminar te la enviamos en formato digital por WhatsApp, así no se pierde y la tienes siempre a la mano.',
  excludes: ['Golpes', 'Humedad', 'Equipos abiertos por otra persona', 'Fallas de software'],
}

export const SOFTWARE = {
  intro:
    'Hacemos sistemas a la medida, chatbots de WhatsApp con IA y automatización para talleres, comercios y pymes de Monterrey.',
  examples: [
    {
      title: 'Bot de WhatsApp que cotiza y agenda',
      text: 'Contesta a tus clientes las 24 horas, les da precios de tu catálogo y agenda citas dentro de tu horario.',
    },
    {
      title: 'Inventario y punto de venta',
      text: 'Controla piezas, ventas y corte de caja desde el celular o la computadora.',
    },
    {
      title: 'Avisos y recordatorios automáticos',
      text: 'Tus clientes reciben por WhatsApp el estado de su pedido, sus citas y lo que tienen pendiente, sin que nadie lo escriba a mano.',
    },
  ],
  fixflow:
    'Creamos FixFlow, el sistema con el que atendemos a nuestros propios clientes: cotiza por WhatsApp, agenda visitas y da seguimiento a cada reparación.',
}

export const FAQ = [
  {
    q: '¿Cuánto cuesta la revisión?',
    a: `En celulares, ${REVIEW_FEE}. Incluye el traslado del técnico y se abona a la reparación: si reparas, ese dinero cuenta como parte del pago. Para tablets y computadoras, cotiza la revisión por WhatsApp.`,
  },
  {
    q: '¿Cuánto tarda la reparación?',
    a: 'La mayoría de las reparaciones se hacen en la misma visita, en 45 a 90 min, frente a ti.',
  },
  {
    q: '¿Con cuánta anticipación tengo que agendar?',
    a: `Agendamos desde el mismo día, con 1 hora de anticipación. Las visitas son de ${HOURS_LABEL.toLowerCase()}. El asistente de WhatsApp te contesta las 24 horas y agenda dentro de ese horario.`,
  },
  {
    q: '¿Cómo pago?',
    a: 'Al final de la visita, cuando el técnico termina. Aceptamos efectivo y transferencia.',
  },
  {
    q: '¿Qué cubre la garantía?',
    a: 'La reparación y las piezas, durante 90 días. No cubre golpes, humedad, equipos abiertos por otra persona ni fallas de software. Te la enviamos en formato digital por WhatsApp al terminar.',
  },
  {
    q: '¿A qué zonas van?',
    a: 'Monterrey (excepto Cumbres), Guadalupe, San Nicolás y San Pedro. A Santa Catarina, Cumbres y García también vamos, con un costo de traslado que acordamos contigo por WhatsApp.',
  },
  {
    q: '¿Qué equipos reparan?',
    a: 'iPhone, Android, tablets y laptops. Cambiamos pantallas, baterías, centros de carga, cámaras y bocinas, entre otras reparaciones.',
  },
]
