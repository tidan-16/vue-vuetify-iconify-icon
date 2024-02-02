import '../assets/main.scss'
import '../assets/tailwind.css'
import 'iconify-icon';
import {createVuetify} from 'vuetify'

import {iconify, aliases} from "./icons/iconify";

export default createVuetify({
    icons: {
        defaultSet: 'iconify',
        aliases,
        sets: {iconify},
    }
})