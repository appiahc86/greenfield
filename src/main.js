import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import "./style.css";
//theme
import "primevue/resources/themes/vela-green/theme.css";

//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";



const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount('#app')
