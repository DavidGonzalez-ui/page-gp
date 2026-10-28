import { defineConfig } from 'astro/config';

// En GitHub Actions, site y base se calculan solos según el repositorio:
//  - cuenta personal (usuario/kbs-gp-2728)  -> https://usuario.github.io/kbs-gp-2728
//  - repo oficial (kbs-gp-2728.github.io)   -> https://kbs-gp-2728.github.io
// En tu computador (npm run dev) no se necesita nada.
const repo = process.env.GITHUB_REPOSITORY;
let site, base;
if (repo) {
  const [owner, name] = repo.split('/');
  site = `https://${owner.toLowerCase()}.github.io`;
  if (!name.toLowerCase().endsWith('.github.io')) base = `/${name}`;
}

export default defineConfig({ site, base });
