// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Use @vitejs/plugin-vue for Vue

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // optional: change port if needed
  },
});
