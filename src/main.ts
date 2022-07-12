import { createApp } from "vue";
import App from "./App.vue";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import router from "@/router";
import { createHead } from "@vueuse/head";
import "./tail.scss";
const app = createApp(App);
const head = createHead(); // <--
app.use(head);
app.use(VueViewer);
app.use(router);
app.mount("#app");
