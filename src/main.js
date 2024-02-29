import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import App from "./App";

import "./assets/app.min.css";

Vue.use(BootstrapVue);

new Vue({ el: "#app", render: (h) => h(App) });
