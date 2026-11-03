// SSR entry used only at build time by scripts/prerender.mjs.
import { renderToStaticMarkup } from 'react-dom/server'
import { HomePage } from './pages/HomePage'
import { PrivacyPage } from './pages/PrivacyPage'
import type { PageId } from './site'

export function render(page: PageId): string {
  return renderToStaticMarkup(page === 'home' ? <HomePage /> : <PrivacyPage />)
}
