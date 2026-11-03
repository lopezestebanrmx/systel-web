import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { OG_IMAGE, PAGES, SITE_URL, localBusinessJsonLd, type PageId } from './src/site.ts'

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headFor(page: PageId): string {
  const { path, title, description } = PAGES[page]
  const url = `${SITE_URL}${path === '/' ? '/' : path}`
  const tags = [
    `<title>${escapeAttr(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="es_MX" />`,
    `<meta property="og:site_name" content="Systel" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Systel: reparación de celulares a domicilio en Monterrey" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ]
  if (page === 'home') {
    // "<" is escaped so the JSON can never close the script tag.
    const json = JSON.stringify(localBusinessJsonLd()).replace(/</g, '\\u003c')
    tags.push(`<script type="application/ld+json">${json}</script>`)
  }
  return tags.join('\n    ')
}

/** Fills <!--head--> per page and emits robots.txt + sitemap.xml from src/site.ts. */
function siteMeta(): Plugin {
  return {
    name: 'systel-site-meta',
    transformIndexHtml(html, ctx) {
      const page: PageId = ctx.path.startsWith('/aviso-de-privacidad') ? 'privacy' : 'home'
      return html.replace('<!--head-->', headFor(page))
    },
    configureServer(server) {
      // The production URL has no trailing slash (vercel.json cleanUrls).
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/aviso-de-privacidad') req.url = '/aviso-de-privacidad/'
        next()
      })
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      })
      const urls = Object.values(PAGES)
        .map(({ path }) => `  <url><loc>${SITE_URL}${path}</loc></url>`)
        .join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss(), siteMeta()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: { port: 5174, strictPort: true },
  build: isSsrBuild
    ? { emptyOutDir: true }
    : {
        // One stylesheet for both pages, named after the site rather than a component.
        cssCodeSplit: false,
        rollupOptions: {
          input: {
            home: fileURLToPath(new URL('./index.html', import.meta.url)),
            privacy: fileURLToPath(new URL('./aviso-de-privacidad/index.html', import.meta.url)),
          },
        },
      },
}))
