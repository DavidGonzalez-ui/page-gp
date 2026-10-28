# Página del grupo KBS (Astro + Markdown)

## Probar en local
```
npm install
npm run dev
```
Abre http://localhost:4321

## Agregar contenido (todo en Markdown)
- Proyectos: `src/content/proyectos/*.md`
- Integrantes: `src/content/integrantes/*.md` (un archivo por persona; el campo `proyecto` es `data-explorer`, `opendata-etl` o `learning-analytics`)
- Secciones de la página de inicio: `src/content/secciones/`
  - `nosotros.md` → sección "Sobre el grupo"
  - `principios.md` → tarjetas "Cómo trabajamos" (campo `puntos`)
  - `contacto.md` → texto y enlace de GitHub (campo `enlace.url`)
- Menú y nombre del sitio: `src/config/sitio.ts`

## Estructura del código
```
src/
├── config/sitio.ts            Datos globales (nombre, menú)
├── content.config.ts          Esquemas de las colecciones Markdown
├── content/                   Todo el contenido editable (.md)
├── layouts/Base.astro         Estructura común de todas las páginas
├── components/
│   ├── layout/                Header (logo + menú) y Footer
│   ├── inicio/                Una sección de la portada por archivo
│   │   ├── Hero.astro             1. Portada
│   │   ├── MapaProyectos.astro       (mapa SVG del hero)
│   │   ├── Nosotros.astro         2. Sobre el grupo
│   │   ├── ListaProyectos.astro   3. Proyectos
│   │   ├── Principios.astro       4. Cómo trabajamos
│   │   └── Contacto.astro         5. Contacto (GitHub)
│   └── comunes/               Piezas reutilizables (títulos, lista de equipo)
├── pages/                     Rutas: /, /integrantes/, /proyectos/<id>/
├── styles/global.css          Estilos, organizados por secciones numeradas
└── lib/url.ts                 Ayuda para enlaces en GitHub Pages
public/
├── logo.png                   Logo original (favicon)
└── logo-transparente.png      Logo sin fondo (cabecera y pie)
```

## Publicar en GitHub Pages
1. Sube el repo a GitHub (rama `main`).
2. En Settings > Pages > Source, elige **GitHub Actions**.
3. El flujo `.github/workflows/deploy.yml` compila y publica solo.

`astro.config.mjs` calcula `site` y `base` automáticamente, así que el mismo código
funciona en una cuenta personal y en el repo oficial `kbs-gp-2728.github.io` sin cambios.
