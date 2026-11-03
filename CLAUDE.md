# CLAUDE.md

Systel's public website (brand "Systel", legal/schema name "Systel MTY", never "Systel MX"). Separate from FixFlow; don't touch that repo from here.

## Commands

```bash
npm run dev        # Vite dev server on :5174, client-rendered (dev only)
npm run build      # tsc -b → vite build (client) → vite build --ssr src/prerender.tsx → scripts/prerender.mjs
npm run lint
npm run og         # redraw public/og-systel.png (satori + resvg, brand fonts from @fontsource); commit it
npm run garantia   # rebuild tools/garantia/generador-garantia.html from template.html (fonts + logo inlined); commit it and copy it to Pictures\Systel\marca-2026\garantia
```

Run `npm run build && npm run lint` before calling a change done.

## Warranty generator (`tools/garantia/`)

A local, offline tool that is not part of the site build and is never published (customer data must stay on the owner's computer). The owner fills in a repair and downloads a branded PNG for WhatsApp (canvas, 1080 wide, at least 1350 tall, growing with the content), plus a copyable message. The warranty is 90 days from the repair date (`DAYS`). Its text covers the scope, duration, conditions and how to claim, as LFPC art. 78 asks. It names no address by the owner's decision (2026-11-03), although art. 78 also asks for a "domicilio para reclamaciones"; don't add one. Edit `template.html`, never the built file.

## How it works

- Stack: Vite 8, React 19, TypeScript strict, Tailwind v4, Saira Condensed / Manrope / JetBrains Mono (self-hosted latin subsets).
- Theme (owner, 2026-11-03): **all light, no black sections** (the owner tried dark blocks for Software e IA and the footer and rejected them). Sections alternate `bg-page` (white) / `bg-page-alt` (#F2F6FC) through `<Section tone>`. Components use only the semantic tokens in `src/index.css` `@theme` (page, page-alt, surface, line, ink, ink-strong, muted, accent, accent-hover, on-accent, danger); never hardcode a color per component. Contrast values are in the comment above `@theme`. **Cian (#22D3EE) is never text** (1.8:1 on white): icons, lines, borders and gradients only. Text, links and primary buttons use `accent` = cobalto darkened to #2659E6 (5.8:1 on white, 5.3:1 on page-alt).
- Logos: `systel-firma-claro.svg` in the header and footer, `systel-isotipo.svg` as the faint hero decoration (md+). `systel-firma.svg` (light wordmark) is only used by the dark OG image. `public/favicon.svg` is `systel-perfil.svg` (the monogram on a Void square) because the transparent monogram vanishes on light browser tabs.
- **The production build ships no JavaScript.** React only renders at build time: `scripts/prerender.mjs` writes each page's markup into `dist/*.html`, strips the module script and deletes `assets/*.js`. Anything interactive must work without JS (FAQ uses `<details>`). The dev server still renders on the client (`src/main.tsx`, `src/privacy.tsx`).
- Two pages: `index.html` and `aviso-de-privacidad/index.html` (Vite multi-page inputs). The privacy page is written as `dist/aviso-de-privacidad.html` and served at `/aviso-de-privacidad` by `cleanUrls` in `vercel.json`.
- `src/site.ts` is the single source of business facts and SEO (`SITE_URL`, hours, zones, socials, `PAGES` titles/descriptions, the LocalBusiness JSON-LD). It must stay import-free because `vite.config.ts` imports it to fill `<!--head-->` in each HTML and to emit `robots.txt` and `sitemap.xml`. When the own domain arrives, change `SITE_URL` there only.
- WhatsApp: every button uses `waLink(topic)` from `src/lib/whatsapp.ts`, one prefilled message per section (reparacion, hardware, software).
- `vercel.json`: strict CSP (`'self'` only; no third-party requests), security headers, immutable cache for `/assets/*`.

## Content rules (owner, 2026-11-03)

- Never say the technician takes the device away or mention any fee for returning it. The message is: the technician comes to your home or office, repairs in front of you, you pay at the end.
- The $300 review (trip included, credited to the repair) is for **phones only**; tablets and computers: "cotiza la revisión por WhatsApp".
- Payment: cash or bank transfer, never card. Warranty: 90 days on repair and parts (the legal minimum, LFPC art. 77; was 30 until 2026-11-03); excludes drops, moisture, devices opened by someone else and software; sent digitally by WhatsApp.
- Hardware line: custom desktop builds and parts; never promise home delivery or installation.
- FixFlow is mentioned by name as our own case, with no link.
- No invented numbers, years, testimonials, reviews, client logos or software prices. Unknown data goes in as a visible `<Pending what="…" />`.
- No person's name or any address anywhere (site, code, commits, README). The privacy page stays short: no data collected, contact by WhatsApp, full notice shared by WhatsApp before a visit, ARCO requests to the contact email.
- Copy is Spanish (es-MX, "tú"); code and comments are English.

## Branches

`main` = production, `staging` = development. Commit to `staging`; merge to `main` only when the owner approves.
