import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, relative } from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Pages whose frontmatter says `const draft = true;`. The same flag adds noindex in Base.astro,
// so a page is either indexable and in the sitemap, or neither.
function draftPaths() {
  const root = fileURLToPath(new URL('./src/pages', import.meta.url));
  const paths = new Set();
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.astro') && /^const draft = true;?\s*$/m.test(readFileSync(full, 'utf8'))) {
        const route = relative(root, full)
          .replace(/\\/g, '/')
          .replace(/\.astro$/, '')
          .replace(/(^|\/)index$/, '');
        paths.add(route ? `/${route}/` : '/');
      }
    }
  };
  walk(root);
  return paths;
}
const drafts = draftPaths();

export default defineConfig({
  site: 'https://www.raniclinickanchi.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !drafts.has(new URL(page).pathname) })],
  vite: {
    plugins: [tailwindcss()],
  },
});
