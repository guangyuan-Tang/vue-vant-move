import Vue from "vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import { Toast, Button} from "vant";

import $public from "@/utils/public.js";
import filters from '@/utils/filters.js';

// import http from "@/utils/http";
import '@/assets/js/rem.js'


import "@/assets/css/reset.css";
import "@/assets/css/common.scss";

Vue.config.productionTip = false;

Vue.use(Toast).use(Button);

Vue.prototype.$public = $public;
// Vue.prototype.$http = http;

// 全局过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
