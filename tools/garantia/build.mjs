// Builds tools/garantia/generador-garantia.html: the warranty template with the
// brand fonts and the light logo inlined, so the single file works offline.
// The tool is local (customer data never leaves the browser) and is not part of
// the website build. Run `npm run garantia`, then copy the HTML wherever the
// team uses it (the owner keeps it in Pictures\Systel\marca-2026\garantia).
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '../..')
const b64 = async (file) => (await readFile(path.join(root, file))).toString('base64')
const font = (pkg, name) => b64(`node_modules/@fontsource/${pkg}/files/${name}`)

const replacements = {
  __FONT_SAIRA_700__: await font('saira-condensed', 'saira-condensed-latin-700-normal.woff2'),
  __FONT_MANROPE_400__: await font('manrope', 'manrope-latin-400-normal.woff2'),
  __FONT_MANROPE_600__: await font('manrope', 'manrope-latin-600-normal.woff2'),
  __FONT_MONO_500__: await font('jetbrains-mono', 'jetbrains-mono-latin-500-normal.woff2'),
  __LOGO__: await b64('public/brand/systel-firma-claro.svg'),
}

let html = await readFile(path.join(here, 'template.html'), 'utf8')
for (const [token, value] of Object.entries(replacements)) {
  if (!html.includes(token)) throw new Error(`template.html: missing ${token}`)
  html = html.replaceAll(token, value)
}
const out = path.join(here, 'generador-garantia.html')
await writeFile(out, html)
console.log(`${path.relative(root, out)} ${(html.length / 1024).toFixed(0)} KB`)
