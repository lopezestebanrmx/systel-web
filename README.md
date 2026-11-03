# systel-web

Sitio de **Systel** (Systel MTY): reparación de celulares a domicilio en Monterrey, hardware y desarrollo de software con IA.

Es un sitio estático de una página más el aviso de privacidad. No tiene backend, formularios, cookies ni analytics. Todo el contacto va por WhatsApp (wa.me).

## Comandos

```bash
npm install
npm run dev        # http://localhost:5174 (render en el navegador, solo para desarrollo)
npm run build      # tsc + vite build + prerender → dist/ (HTML estático, sin JavaScript)
npm run lint
npm run og         # regenera public/og-systel.png; súbelo al repo
```

## Ramas

- `main`: producción. Vercel la publica en la URL de producción.
- `staging`: desarrollo. Todos los commits van aquí; cada push crea un preview en Vercel.

## Dónde cambiar las cosas

- Datos del negocio, URL del sitio, horario, zonas, redes y SEO: `src/site.ts`.
- Mensajes prellenados de WhatsApp: `src/lib/whatsapp.ts`.
- Textos de la página: `src/content/home.ts` y `src/content/privacy.ts`.
