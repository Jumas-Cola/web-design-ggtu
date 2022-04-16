import { createApp } from "vue";
import Slider from "./components/Slider.vue";
import Catalog from "./components/Catalog.vue";
import Consults from "./components/Consults.vue";
import NewsForm from "./components/NewsForm.vue";
import BackTop from "./components/BackTop.vue";

createApp(Slider).mount("#slider");
createApp(Catalog).mount("#catalog");
createApp(Consults).mount("#consults");
createApp(NewsForm).mount("#news-form");
createApp(BackTop).mount("#go-up");
