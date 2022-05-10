import { createApp } from "vue";
import App from "./App.vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import store from "./store";

import "./plugin.js";

const app = createApp(App);

app.use(store);

app.mount("#app");
