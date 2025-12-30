import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  plugins: [
    // React SWC plugin
    react(),
    // tailwindcss plugin
    tailwindcss()
  ],
  build: {
    target: 'esnext',
  },
  publicDir: './public',
  server: {
    // Allow network access to dev server
    host: "0.0.0.0",
    allowedHosts: true,
    port: 5173
  },
});

