import { defineConfig } from 'vite'
import { qrcode } from 'vite-plugin-qrcode';

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qrcode()],
})
