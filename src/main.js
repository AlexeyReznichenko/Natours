import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
// import OhVueIcon from "oh-vue-icons/components/Icon";
// import {
//   RiMap2Line,
//   BiGlobe,
//   FaRegularCompass,
//   OiHeart
// } from "oh-vue-icons/icons";
// OhVueIcon.add([RiMap2Line, BiGlobe, FaRegularCompass, OiHeart]);

// Vue.component("v-icon", OhVueIcon);

Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: h => h(App)
});
