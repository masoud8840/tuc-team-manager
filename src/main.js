import { createApp } from "vue";
import App from "./App.vue";
// Style
import "./assets/Styles.scss";
import router from "./router/index.js";
// Firebase Config
import "./firebase/index.js";
createApp(App).use(router).mount("#app");
