import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: false
  },
  base: '/stickynote/',
  plugins: [reactRefresh()]
})