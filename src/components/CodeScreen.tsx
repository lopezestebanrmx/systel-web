/**
 * Decorative "editor" drawn over the blank laptop screen of the laptop photo: real lines from
 * src/lib/whatsapp.ts, clipped like a small window. Positions are percentages of that photo's crop
 * (screen at x 9.8–54.7 %, y 30–68.4 % of 1024×768), so it only fits PHOTOS.laptop.
 */
const LINES = [
  ['k', 'export function '],
  ['f', 'waLink'],
  ['p', '(topic: WaTopic): string {'],
]
const BODY = [
  '  return `https://wa.me/${WHATSAPP_NUMBER}',
  '    ?text=${encodeURIComponent(',
  '      WA_MESSAGES[topic])}`',
  '}',
]

export function CodeScreen() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-[30%] left-[9.8%] h-[38.4%] w-[44.9%] overflow-hidden bg-ink-strong/95 px-[3%] py-[2.5%] font-mono text-[clamp(5px,1.6vw,9px)] leading-[1.45] whitespace-pre text-hielo"
    >
      <p className="text-niebla/80">{'// src/lib/whatsapp.ts'}</p>
      <p>
        {LINES.map(([kind, text]) => (
          <span key={text} className={kind === 'k' ? 'text-niebla' : kind === 'f' ? 'text-cobalto' : ''}>
            {text}
          </span>
        ))}
      </p>
      {BODY.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  )
}
