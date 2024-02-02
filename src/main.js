import {createApp} from 'vue'

import vuetify from "./plugins/vuetify";

import App from './App.vue'

import './assets/tailwind.css'

createApp(App)
    .use(vuetify)
    .mount('#app')
