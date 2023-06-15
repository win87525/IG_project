import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
// import { Store, store } from './store/index';

const app = createApp(App);

// app.use(store)
app.use(router);

app.mount("#app");
