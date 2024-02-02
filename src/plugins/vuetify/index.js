import '@/assets/main.scss'
import 'iconify-icon';
import {createVuetify} from 'vuetify'

import {iconify, aliases} from "../icons/iconify";

export default createVuetify({
    theme: {
        defaultTheme: 'dark',
    },
    icons: {
        defaultSet: 'iconify',
        aliases,
        sets: {iconify},
    }
})