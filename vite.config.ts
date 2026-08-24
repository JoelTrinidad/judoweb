import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

const viteConfig = defineViteConfig({
  plugins: [react(), tailwindcss()],
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    // Sin esto, happy-dom intenta cargar de verdad el `src` de los <iframe> (ej. embeds de
    // YouTube en technique-description), disparando peticiones de red reales durante los tests.
    environmentOptions: {
      happyDOM: {
        settings: {
          disableIframePageLoading: true,
        },
      },
    },
    setupFiles: './src/test/setup.ts',
    css: true,
    env: {
      VITE_BACKEND_URL: 'http://localhost:3000',
    },
  },
});

export default mergeConfig(viteConfig, vitestConfig);
