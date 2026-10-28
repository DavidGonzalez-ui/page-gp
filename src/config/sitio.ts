// =============================================================================
// CONFIGURACIÓN GENERAL DEL SITIO
// -----------------------------------------------------------------------------
// Datos que se repiten en varias partes de la página (nombre, menú, etc.).
// Si necesitas cambiar un texto global, cámbialo aquí y se actualiza en todo
// el sitio. Los textos largos de cada sección viven en Markdown, en
// src/content/secciones/*.md
// =============================================================================

export const SITIO = {
  nombre: 'KBS',
  nombreCompleto: 'Sistemas Basados en el Conocimiento',
  descripcion: 'Grupo de investigación Sistemas Basados en el Conocimiento (KBS).',
};

// Menú principal (cabecera). `href` es relativo a la raíz del sitio;
// la función url() de src/lib/url.ts le agrega el "base" de GitHub Pages.
export const MENU = [
  { texto: 'Nosotros', href: '/#nosotros' },
  { texto: 'Proyectos', href: '/#proyectos' },
  { texto: 'Integrantes', href: '/integrantes/' },
  { texto: 'Contacto', href: '/#contacto' },
];
