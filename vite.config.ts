import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

const viteConfig = defineViteConfig({
  plugins: [react()],
});

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
});

export default mergeConfig(viteConfig, vitestConfig);
