import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "@/route";

const app = createApp(App);

axios.defaults.baseURL = "http://localhost:8080";
app.config.globalProperties.$http = axios;

app.use(router);

app.mount("#app");
