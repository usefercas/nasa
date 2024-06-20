import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer(), // Asegúrate de llamar a la función autoprefixer()
      ],
    },
  },
  resolve: {
    alias: {
      'bootstrap': 'bootstrap/dist/css/bootstrap.min.css', // Alias para la versión CSS de Bootstrap
    },
  },
});
