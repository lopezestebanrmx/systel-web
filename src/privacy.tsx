// Dev only: the build prerenders the page to plain HTML and ships no JavaScript (scripts/prerender.mjs).
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { PrivacyPage } from './pages/PrivacyPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
)
