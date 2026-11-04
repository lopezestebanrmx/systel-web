// Illustrative photos (AI-generated, not real jobs): never present them as before/after, as a
// testimonial or as "today's work". The ones that show a result carry the "Imagen ilustrativa"
// caption. Files come from `npm run fotos` (scripts/make-photos.mjs); keep widths and sizes in sync.

export type Photo = {
  /** public/img/<name>-<width>.webp */
  name: string
  /** Generated widths, smallest first; the last one is the full size. */
  widths: number[]
  width: number
  height: number
  alt: string
  /** Shows a result, so it carries the "Imagen ilustrativa" caption. */
  illustrative?: boolean
}

export const PHOTOS = {
  banco: {
    name: 'banco',
    widths: [640, 1024],
    width: 1024,
    height: 724,
    alt: 'Celular abierto sobre un tapete de reparación, junto a desarmadores, pinzas y una púa de apertura.',
  },
  puerta: {
    name: 'puerta',
    widths: [509],
    width: 509,
    height: 636,
    alt: 'Mano que sostiene un maletín de herramientas en la puerta de una casa.',
  },
  ventosa: {
    name: 'ventosa',
    widths: [640, 819],
    width: 819,
    height: 1024,
    alt: 'Manos con guantes que levantan la pantalla de un celular con una ventosa y una púa.',
  },
  entrega: {
    name: 'entrega',
    widths: [640, 825],
    width: 825,
    height: 1024,
    alt: 'Mano que sostiene un celular con la pantalla encendida, en una sala.',
    illustrative: true,
  },
  rotaNueva: {
    name: 'rota-nueva',
    widths: [640, 1024],
    width: 1024,
    height: 768,
    alt: 'Pantalla de celular estrellada junto a una pantalla nueva.',
    illustrative: true,
  },
  microscopio: {
    name: 'microscopio',
    widths: [640, 825],
    width: 825,
    height: 619,
    alt: 'Microscopio con luz sobre una pieza electrónica, junto a unas pinzas.',
  },
  laptop: {
    name: 'laptop',
    widths: [640, 1024],
    width: 1024,
    height: 768,
    alt: 'Laptop sobre un escritorio, junto a un celular abierto en un tapete de herramientas.',
  },
  maletin: {
    name: 'maletin',
    widths: [640, 1024],
    width: 1024,
    height: 490,
    alt: 'Maletín de herramientas abierto sobre la mesa de una casa, junto a un celular con la pantalla rota.',
  },
} satisfies Record<string, Photo>
