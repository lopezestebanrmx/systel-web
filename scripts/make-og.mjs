// Draws public/og-systel.png (1200×630) with satori + resvg from the brand's
// firma and fonts. Run `npm run og` after changing it and commit the PNG.
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const font = (pkg, file) => readFile(path.join(root, 'node_modules/@fontsource', pkg, 'files', file))

const firma = await readFile(path.join(root, 'public/brand/systel-firma.svg'), 'utf8')
const firmaUri = `data:image/svg+xml;base64,${Buffer.from(firma).toString('base64')}`
const hexTile = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">${Array.from({ length: 8 }, (_, row) =>
    Array.from({ length: 24 }, (_, col) => {
      const x = col * 56 + (row % 2 ? 28 : 0) - 28
      const y = row * 96 - 40
      return `<path d="M${x + 28} ${y}l28 16v32l-28 16-28-16V${y + 16}zM${x + 28} ${y + 64}v32" fill="none" stroke="#1B2740" stroke-opacity="0.55" stroke-width="1.5"/>`
    }).join(''),
  ).join('')}</svg>`,
).toString('base64')

const h = (type, style, children) => ({ type, props: { style, children } })

const tree = h(
  'div',
  {
    width: 1200,
    height: 630,
    display: 'flex',
    flexDirection: 'column',
    padding: '64px 80px',
    boxSizing: 'border-box',
    backgroundColor: '#05080F',
    backgroundImage: `url(data:image/svg+xml;base64,${hexTile})`,
    color: '#E8F1FF',
    fontFamily: 'Saira Condensed',
  },
  [
    { type: 'img', props: { src: firmaUri, width: 447, height: 120 } },
    h('div', { display: 'flex', flexGrow: 1 }, ''),
    h('div', { display: 'flex', flexDirection: 'column', fontSize: 100, fontWeight: 700, lineHeight: 1 }, [
      h('div', { display: 'flex' }, 'Reparación de celulares'),
      h('div', { display: 'flex', gap: 24 }, [
        h('div', { display: 'flex' }, 'a domicilio'),
        h('div', { display: 'flex', color: '#22D3EE' }, '· Monterrey'),
      ]),
    ]),
  ],
)

const svg = await satori(tree, {
  width: 1200,
  height: 630,
  fonts: [
    { name: 'Saira Condensed', data: await font('saira-condensed', 'saira-condensed-latin-700-normal.woff'), weight: 700 },
  ],
})
const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng()
await writeFile(path.join(root, 'public/og-systel.png'), png)
console.log(`public/og-systel.png ${(png.length / 1024).toFixed(0)} KB`)
