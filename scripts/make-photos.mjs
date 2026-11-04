// Dev only (`npm run fotos`): crops the site's images and writes them to public/img as WebP in two
// widths (640 and 1024, or the crop's own width when it is narrower). Commit the output.
// Sources are relative to SYSTEL_PICTURES, or Pictures/Systel in the user's home folder.
import { mkdir, readdir, rm } from 'node:fs/promises'
import { homedir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const source = process.env.SYSTEL_PICTURES ?? path.join(homedir(), 'Pictures', 'Systel')
const out = path.join(root, 'public', 'img')

// crop = the part kept, in source pixels. Keep it in sync with PHOTOS in src/content/photos.ts.
const PHOTOS = [
  { file: 'fotos/01-banco.jpg', name: 'banco', crop: { left: 0, top: 300, width: 1024, height: 724 } },
  { file: 'fotos/02-ventosa.jpg', name: 'ventosa', crop: { left: 102, top: 0, width: 819, height: 1024 } },
  { file: 'fotos/04-rota-nueva.jpg', name: 'rota-nueva', crop: { left: 0, top: 256, width: 1024, height: 768 } },
  { file: 'fotos/06-entrega.jpg', name: 'entrega', crop: { left: 0, top: 0, width: 825, height: 1024 } },
  { file: 'fotos/07-laptop.jpg', name: 'laptop', crop: { left: 0, top: 230, width: 1024, height: 768 } },
  // 10 comes with a dark frame around the photo: it is cut off here.
  { file: 'fotos/10-puerta.jpg', name: 'puerta', crop: { left: 196, top: 344, width: 509, height: 636 } },
  { file: 'fotos/12-microscopio.jpg', name: 'microscopio', crop: { left: 0, top: 330, width: 825, height: 619 } },
  // The coverage story (1080²): only the hexagon map; its title, logo, number and legend are HTML on the page.
  { file: 'marca-2026/historias/zona/systel-mp2-4-cobertura.jpg', name: 'zonas', crop: { left: 245, top: 335, width: 590, height: 540 } },
]
const WIDTHS = [640, 1024]

await mkdir(out, { recursive: true })
for (const name of await readdir(out)) if (name.endsWith('.webp')) await rm(path.join(out, name))

for (const photo of PHOTOS) {
  const widths = [...new Set(WIDTHS.map((w) => Math.min(w, photo.crop.width)))]
  for (const width of widths) {
    const target = path.join(out, `${photo.name}-${width}.webp`)
    const info = await sharp(path.join(source, photo.file))
      .extract(photo.crop)
      .resize({ width })
      .webp({ quality: 80, effort: 6 })
      .toFile(target)
    console.log(`${path.basename(target)}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`)
  }
}
