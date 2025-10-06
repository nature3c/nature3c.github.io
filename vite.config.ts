import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',                 // user site
  build: { outDir: 'docs' }, // serve from /docs on main
});
