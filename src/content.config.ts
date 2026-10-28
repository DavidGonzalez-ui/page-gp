// =============================================================================
// COLECCIONES DE CONTENIDO (Markdown)
// -----------------------------------------------------------------------------
// Cada colección es una carpeta de archivos .md dentro de src/content/.
// El "schema" valida el frontmatter (la parte entre ---) de cada archivo:
// si falta un campo obligatorio, `npm run dev` muestra el error.
// =============================================================================
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// -----------------------------------------------------------------------------
// 1. PROYECTOS  ->  src/content/proyectos/*.md
//    Un archivo por proyecto. El nombre del archivo es el id (y la URL).
// -----------------------------------------------------------------------------
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    resumen: z.string(),
    orden: z.number(),                              // posición en la lista
    color: z.enum(['blue', 'green', 'amber']),      // color del logo KBS
    etiquetas: z.array(z.string()).default([]),
    usuario: z.string(),                            // público objetivo
  }),
});

// -----------------------------------------------------------------------------
// 2. INTEGRANTES  ->  src/content/integrantes/*.md
//    Un archivo por persona. `proyecto` debe ser el id de un proyecto.
// -----------------------------------------------------------------------------
const integrantes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/integrantes' }),
  schema: z.object({
    nombre: z.string(),
    rol: z.string(),
    proyecto: z.enum(['data-explorer', 'opendata-etl', 'learning-analytics']),
    github: z.string().optional(),                  // solo el usuario, sin URL
  }),
});

// -----------------------------------------------------------------------------
// 3. SECCIONES  ->  src/content/secciones/*.md
//    Textos de las secciones de la página de inicio (Nosotros, Cómo
//    trabajamos, Contacto). Se editan en Markdown sin tocar el código.
// -----------------------------------------------------------------------------
const secciones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/secciones' }),
  schema: z.object({
    titulo: z.string(),
    etiqueta: z.string().optional(),                // texto pequeño sobre el título
    // Tarjetas opcionales (ej.: principios de trabajo)
    puntos: z.array(z.object({ titulo: z.string(), texto: z.string() })).default([]),
    // Enlace opcional (ej.: repositorio de GitHub en Contacto)
    enlace: z.object({
      texto: z.string(),
      url: z.string().url(),
      detalle: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { proyectos, integrantes, secciones };
