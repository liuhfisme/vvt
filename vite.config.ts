import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      supportTs: true
    })
  ],
  resolve: {
    // alias: {
    // find: '/\/@\//',
    // replacement: pathResolve('src') + '/'
    // }
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: '#',
        replacement: resolve(__dirname, 'types')
      }
    ]
  }
})
