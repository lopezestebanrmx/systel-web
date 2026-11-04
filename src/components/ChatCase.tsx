import { Fragment, type ReactNode } from 'react'
import { EyeOff } from 'lucide-react'
import { CHAT_CASE, type ChatMessage } from '@/content/chatCase'

/** WhatsApp's *bold* as <strong>; everything else is plain text with its line breaks. */
function formatted(text: string): ReactNode {
  return text.split(/(\*[^*\n]+\*)/g).map((part, i) =>
    part.startsWith('*') && part.endsWith('*') && part.length > 2 ? <strong key={i}>{part.slice(1, -1)}</strong> : <Fragment key={i}>{part}</Fragment>,
  )
}

function Bubble({ message }: { message: ChatMessage }) {
  if (message.from === 'corte') {
    return <li className="px-6 py-1 text-center font-mono text-[11px] leading-snug text-muted">… {message.text} …</li>
  }
  if (message.from === 'oculto') {
    return (
      <li className="ml-auto flex max-w-[85%] items-center gap-2 rounded-lg rounded-tr-sm border border-dashed border-line bg-surface px-3 py-2 text-sm text-muted">
        <EyeOff className="size-4 shrink-0" aria-hidden />
        {message.text}
      </li>
    )
  }
  const mine = message.from === 'cliente'
  return (
    <li className={`max-w-[85%] ${mine ? 'ml-auto' : ''}`}>
      <p className="sr-only">{mine ? 'Cliente' : 'Asistente'}, {message.time}:</p>
      <div
        className={`rounded-lg px-3 py-2 text-sm leading-snug whitespace-pre-line shadow-[0_1px_1px_rgba(5,8,15,0.06)] ${
          mine ? 'rounded-tr-sm bg-accent text-on-accent' : 'rounded-tl-sm border border-line bg-surface text-ink'
        }`}
      >
        {formatted(message.text)}
        <span aria-hidden="true" className={`mt-1 block text-right font-mono text-[10px] ${mine ? 'text-on-accent/80' : 'text-muted'}`}>
          {message.time}
        </span>
      </div>
    </li>
  )
}

/** The real chat of CHAT_CASE in a phone-like frame. Static HTML, no JavaScript. */
export function ChatCase() {
  return (
    <figure className="grid gap-3">
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_12px_32px_-16px_rgba(11,18,32,0.25)]">
        <div className="flex items-center gap-3 border-b border-line bg-surface px-4 py-3">
          <img src="/favicon.svg" alt="" width={32} height={32} className="size-8 rounded-full" />
          <div className="grid leading-tight">
            <span className="font-semibold text-ink-strong">Systel</span>
            <span className="text-xs text-muted">Asistente R5 · WhatsApp</span>
          </div>
        </div>
        <ol className="honeycomb grid gap-2.5 bg-page-alt px-3 py-4" aria-label="Conversación">
          {CHAT_CASE.messages.map((message, i) => (
            <Bubble key={i} message={message} />
          ))}
        </ol>
      </div>
      <figcaption className="text-xs text-muted">
        Conversación de prueba con el asistente real de Systel, el {CHAT_CASE.date}: las respuestas son las que dio, sin cambiar palabras. Ocultamos la dirección y recortamos algunos mensajes (marcados con […]).
      </figcaption>
    </figure>
  )
}
