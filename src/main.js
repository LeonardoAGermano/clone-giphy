import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

window.axios = require("axios");
window.axios.defaults.headers.common["Accept"] = "application/json";
window.axios.defaults.baseURL = "//api.giphy.com/v1";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
