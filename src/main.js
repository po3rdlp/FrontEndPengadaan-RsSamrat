import { createApp } from "vue";
import App from "./App.vue";
import router from "./config/router/index.js";
import store from "./config/stateAuth/state";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
