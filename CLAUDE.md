# CLAUDE.md

Systel's public website (brand "Systel", legal/schema name "Systel MTY", never "Systel MX"). Separate from FixFlow; don't touch that repo from here.

## Commands

```bash
npm run dev        # Vite dev server on :5174, client-rendered (dev only)
npm run build      # tsc -b → vite build (client) → vite build --ssr src/prerender.tsx → scripts/prerender.mjs
npm run lint
npm run og         # redraw public/og-systel.png (satori + resvg, brand fonts from @fontsource); commit it
```

Run `npm run build && npm run lint` before calling a change done.

## How it works

- Stack: Vite 8, React 19, TypeScript strict, Tailwind v4 (`@theme` tokens in `src/index.css` = the 2026 brand guide: void, grafito, acero, niebla, hielo, cobalto, cian, alerta; Saira Condensed / Manrope / JetBrains Mono, self-hosted latin subsets). Dark only, by brand choice.
- **The production build ships no JavaScript.** React only renders at build time: `scripts/prerender.mjs` writes each page's markup into `dist/*.html`, strips the module script and deletes `assets/*.js`. Anything interactive must work without JS (FAQ uses `<details>`). The dev server still renders on the client (`src/main.tsx`, `src/privacy.tsx`).
- Two pages: `index.html` and `aviso-de-privacidad/index.html` (Vite multi-page inputs). The privacy page is written as `dist/aviso-de-privacidad.html` and served at `/aviso-de-privacidad` by `cleanUrls` in `vercel.json`.
- `src/site.ts` is the single source of business facts and SEO (`SITE_URL`, hours, zones, socials, `PAGES` titles/descriptions, the LocalBusiness JSON-LD). It must stay import-free because `vite.config.ts` imports it to fill `<!--head-->` in each HTML and to emit `robots.txt` and `sitemap.xml`. When the own domain arrives, change `SITE_URL` there only.
- WhatsApp: every button uses `waLink(topic)` from `src/lib/whatsapp.ts`, one prefilled message per section (reparacion, hardware, software).
- `vercel.json`: strict CSP (`'self'` only; no third-party requests), security headers, immutable cache for `/assets/*`.

## Content rules (owner, 2026-11-03)

- Never say the technician takes the device away or mention any fee for returning it. The message is: the technician comes to your home or office, repairs in front of you, you pay at the end.
- The $300 review (trip included, credited to the repair) is for **phones only**; tablets and computers: "cotiza la revisión por WhatsApp".
- Payment: cash or bank transfer, never card. Warranty: 30 days on repair and parts; excludes drops, moisture, devices opened by someone else and software; sent digitally by WhatsApp.
- Hardware line: custom desktop builds and parts; never promise home delivery or installation.
- FixFlow is mentioned by name as our own case, with no link.
- No invented numbers, years, testimonials, reviews, client logos or software prices. Unknown data goes in as a visible `<Pending what="…" />`.
- No person's name or any address anywhere (site, code, commits, README). The privacy page stays short: no data collected, contact by WhatsApp, full notice shared by WhatsApp before a visit, ARCO requests to the contact email.
- Copy is Spanish (es-MX, "tú"); code and comments are English.

## Branches

`main` = production, `staging` = development. Commit to `staging`; merge to `main` only when the owner approves.
