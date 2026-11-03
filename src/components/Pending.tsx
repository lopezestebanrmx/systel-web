/** A visible placeholder for data the owner still has to give. Never ship a guess instead. */
export function Pending({ what }: { what: string }) {
  return (
    <span className="inline-flex items-center gap-1 border border-dashed border-danger px-1.5 font-mono text-xs text-ink">
      [PENDIENTE: {what}]
    </span>
  )
}
