import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuração para garantir que as rotas funcionem corretamente na Vercel
  build: {
    outDir: 'dist',
  },
  // Configuração para servir corretamente os arquivos estáticos
  publicDir: 'public',
  // Configuração para resolver caminhos de imagens
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})