// After `vite build` (client) and `vite build --ssr src/prerender.tsx --outDir .ssr`:
// renders each page into its HTML, drops the client JavaScript (the site has no
// interactivity) and writes /aviso-de-privacidad as a flat file for cleanUrls.
import { readFile, rm, writeFile, readdir } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, '.ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'prerender.js')).href)

const pages = [
  { id: 'home', from: 'index.html', to: 'index.html' },
  { id: 'privacy', from: 'aviso-de-privacidad/index.html', to: 'aviso-de-privacidad.html' },
]

for (const page of pages) {
  const file = path.join(dist, page.from)
  let html = await readFile(file, 'utf8')
  if (!html.includes('<div id="root"></div>')) throw new Error(`${page.from}: no empty #root`)
  html = html
    .replace('<div id="root"></div>', `<div id="root">${render(page.id)}</div>`)
    .replace(/\s*<script type="module"[^>]*><\/script>/g, '')
    .replace(/\s*<link rel="modulepreload"[^>]*>/g, '')
  if (/<script(?![^>]*application\/ld\+json)/.test(html)) throw new Error(`${page.from}: a script tag is left`)
  await writeFile(path.join(dist, page.to), html)
}

await rm(path.join(dist, 'aviso-de-privacidad'), { recursive: true })
for (const name of await readdir(path.join(dist, 'assets'))) {
  if (name.endsWith('.js')) await rm(path.join(dist, 'assets', name))
}
await rm(ssrDir, { recursive: true })
console.log('prerendered:', pages.map((p) => p.to).join(', '))
