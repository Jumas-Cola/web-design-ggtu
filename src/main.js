import { createApp } from "vue";
import Slider from "./components/Slider.vue";
import Catalog from "./components/Catalog.vue";
import Consults from "./components/Consults.vue";

createApp(Slider).mount("#slider");
createApp(Catalog).mount("#catalog");
createApp(Consults).mount("#consults");
