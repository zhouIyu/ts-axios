import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  plugins: [
    viteMockServe({
      ignore: /^_/,
      mockPath: 'mock',
      supportTs: true,
      watchFiles: true
    })
  ]
})
