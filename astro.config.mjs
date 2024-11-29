import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://stephenlit.github.io',
    base: 'product-preview',
    integrations: [tailwind()],
});
