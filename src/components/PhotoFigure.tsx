import type { ReactNode } from 'react'
import type { Photo } from '@/content/photos'

type Props = {
  photo: Photo
  /** The `sizes` attribute: how wide the image shows at each breakpoint. */
  sizes: string
  /** Above the fold: loads first instead of lazily. */
  priority?: boolean
  /** Extra classes for the image box, e.g. an aspect ratio. */
  className?: string
  /** Short visible caption; "Imagen ilustrativa" is added for photos that show a result. */
  caption?: ReactNode
  /** Decorative layer drawn over the image (aria-hidden by the caller). */
  overlay?: ReactNode
  /** object-position when the box crops the image, e.g. 'object-[50%_70%]'. */
  position?: string
  /** Put "Imagen ilustrativa" inside the image's corner, so cards in a row keep their text aligned. */
  labelInside?: boolean
}

/** An illustrative photo in a light frame, with explicit size so the layout never jumps. */
export function PhotoFigure({ photo, sizes, priority = false, className = '', caption, overlay, position = 'object-center', labelInside = false }: Props) {
  const labelBelow = photo.illustrative && !labelInside
  const src = (w: number) => `/img/${photo.name}-${w}.webp`
  const largest = photo.widths[photo.widths.length - 1]
  return (
    <figure className="grid gap-2">
      <div className={`relative overflow-hidden rounded-md border border-line bg-page-alt ${className}`}>
        <img
          src={src(largest)}
          srcSet={photo.widths.map((w) => `${src(w)} ${w}w`).join(', ')}
          sizes={sizes}
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
          className={`block h-full w-full object-cover ${position}`}
        />
        {overlay}
        {photo.illustrative && labelInside && (
          <span className="absolute right-2 bottom-2 rounded-sm bg-surface/90 px-2 py-0.5 text-xs text-muted">Imagen ilustrativa</span>
        )}
      </div>
      {(caption || labelBelow) && (
        <figcaption className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm">
          {caption && <span className="font-semibold text-ink">{caption}</span>}
          {labelBelow && <span className="text-xs text-muted">Imagen ilustrativa</span>}
        </figcaption>
      )}
    </figure>
  )
}
