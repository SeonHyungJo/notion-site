import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@/', replacement: '/src/' },
    ]
  },
  plugins: [reactRefresh()]
})
