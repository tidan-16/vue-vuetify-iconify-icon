import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag === 'iconify-icon',
                }
            },
        }),
        vuetify({
            styles: {
                configFile: 'src/assets/settings.scss',
            },
        }),
        AutoImport({
            imports: ['vue'],
            dts: true,
            vueTemplate: true,
        }),
        Components({
            dts: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    }
})
