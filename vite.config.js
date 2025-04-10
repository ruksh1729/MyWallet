import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'public/manifest.json', dest: 'build' },
        { src: 'public/background.js', dest: 'build' },
        { src: 'public/content.js', dest: 'build' },
        { src: 'public/assets/*', dest: 'build/assets' },
        { src: 'public/vite.svg', dest: 'build' }
      ],
      hook: 'writeBundle'
    })
  ],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  publicDir: 'public'
});
