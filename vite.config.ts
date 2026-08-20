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
    setupFiles: './src/test/setup.ts',
    css: true,
    env: {
      VITE_BACKEND_URL: 'http://localhost:3000',
    },
  },
});

export default mergeConfig(viteConfig, vitestConfig);
