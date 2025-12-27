import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

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

