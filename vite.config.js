import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // This is your main entry point (e.g., your homepage)
        main: resolve(__dirname, 'index.html'),
        // This is your nested game page
        game: resolve(__dirname, 'game/index.html'),
      },
    },
  },
});