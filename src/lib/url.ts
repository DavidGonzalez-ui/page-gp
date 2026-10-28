// =============================================================================
// UTILIDAD: url()
// Respeta el "base" de Astro para que los enlaces funcionen en GitHub Pages.
// Uso: url('/integrantes/')  ->  '/kbs-gp-2728/integrantes/' (en una cuenta personal)
// =============================================================================
export const url = (p: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + p;
