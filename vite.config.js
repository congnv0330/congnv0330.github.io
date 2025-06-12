import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite'
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
  plugins: [tailwindcss(), webfontDownload()],
});
