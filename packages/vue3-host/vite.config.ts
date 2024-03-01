/// <reference types="vitest" />
import path, { join } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vueSvgPlugin from 'vite-svg-loader'
import AutoImport from 'unplugin-auto-import/vite'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(__dirname, '/node_modules/$1')
      },

      {
        find: /@\//,
        replacement: join(__dirname, 'src/')
      }
    ]
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  plugins: [
    Vue(),
    // https://github.com/jpkleemans/vite-svg-loader
    vueSvgPlugin({
      svgoConfig: {
        multipass: true,

        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeTitle: false
              }
            }
          },
          'removeDimensions',
          {
            name: 'sortAttrs',
            params: {
              xmlnsOrder: 'alphabetical'
            }
          },
          {
            name: 'cleanupListOfValues',
            params: {
              floatPrecision: 0
            }
          },
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ preserveAspectRatio: 'none' }]
            }
          }
        ]
      }
    }),
    // https://github.com/antfu/vite-plugin-components
    Components({
      extensions: ['vue'],
      dirs: ['src/components', 'src/containers'],
      dts: true
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'pinia',
        '@vueuse/core',
        'vue',
        'vue-router',
        'vue-i18n',
        'vitest',
      ],
      dts: 'src/auto-imports.d.ts'
    }),
    federation({
      name: 'host-app',
      remotes: {
        vue3microfront: `${process.env.VITE_APP_VIVIT_MICROFRONT}/assets/remoteEntry.js`,
      },
      shared: ['vue', 'pinia', 'vue-router'],
    }),
    // https://github.com/intlify/bundle-tools/blob/main/packages/unplugin-vue-i18n/README.md
    VueI18nPlugin({
      include: [path.resolve(__dirname, 'locales/**')]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/basic.scss";`
      }
    }
  },
  build: {
    minify: true,
    target: 'esnext'
  }
})
