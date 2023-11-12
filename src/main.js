import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router.js";
import store from "@/store";
import "@/style.css";
import masonry from "@yeger/vue-masonry-wall";

const app = createApp(App);

app.use(router).use(store).use(masonry).mount("#app");
