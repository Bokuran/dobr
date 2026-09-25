import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // 👇 ДОБАВЬТЕ ЭТУ СТРОКУ
  base: '/Bokuran/', // Замените my-vite-app на имя вашего репозитория на GitHub
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  // ... остальные настройки
})