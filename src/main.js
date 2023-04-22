import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Vue3Lazyload from 'vue3-lazyload';
import { createPinia } from 'pinia';

const pinia = createPinia();

import "./style.css";
//theme
import "primevue/resources/themes/vela-green/theme.css";

//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";


const app = createApp(App);

app.use(Vue3Lazyload, {
    lazyComponent: true
});
app.use(pinia);
app.use(router);
app.use(PrimeVue);
app.mount('#app')
