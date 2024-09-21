import { readdirSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

function getDirectoriesSync(path: string) {
  const entries = readdirSync(path, { withFileTypes: true })
  return entries
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}

const COMPONENT_NAMES = getDirectoriesSync('../components')

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types',
    }),
  ],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'DawnUI',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'vue',
        '@popperjs/core',
        'async-validator',
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('/packages/hooks/')) {
            return 'hooks'
          }
          if (id.includes('/packages/utils/')) {
            return 'utils'
          }

          for (const item of COMPONENT_NAMES) {
            if (id.includes(`/packages/components/${item}/`)) {
              return item
            }
          }
        },
      },
    },
  },
})
