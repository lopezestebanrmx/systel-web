import type { ReactNode } from 'react'

type Tone = 'base' | 'alt' | 'dark'

type Props = {
  id: string
  label: string
  title: ReactNode
  intro?: ReactNode
  tone?: Tone
  children: ReactNode
}

const TONES: Record<Tone, string> = {
  base: 'bg-page',
  alt: 'bg-page-alt',
  dark: 'theme-dark',
}

/** A page section with the brand's mono "spec label" above the heading. Tones alternate to separate sections. */
export function Section({ id, label, title, intro, tone = 'base', children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`py-16 sm:py-24 ${TONES[tone]}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="grid max-w-3xl gap-3">
          <p className="label-mono text-accent">{label}</p>
          <h2 id={`${id}-titulo`} className="text-4xl font-semibold sm:text-5xl">
            {title}
          </h2>
          {intro && <div className="text-lg text-muted">{intro}</div>}
        </header>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  )
}
