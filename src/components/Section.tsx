import type { ReactNode } from 'react'

type Props = { id: string; label: string; title: ReactNode; intro?: ReactNode; children: ReactNode; className?: string }

/** A page section with the brand's mono "spec label" above the heading. */
export function Section({ id, label, title, intro, children, className = '' }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`border-t border-acero py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="grid max-w-3xl gap-3">
          <p className="label-mono text-cian">{label}</p>
          <h2 id={`${id}-titulo`} className="text-4xl font-semibold sm:text-5xl">
            {title}
          </h2>
          {intro && <div className="text-lg text-niebla">{intro}</div>}
        </header>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  )
}
