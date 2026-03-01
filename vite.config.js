import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mi-portifolio/', // Ruta base correcta para GitHub Pages
  build: {
    outDir: 'docs',
    emptyOutDir: true, // Borra la carpeta antes de generar el nuevo build
  },
});