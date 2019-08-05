import Vue from "vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import VueI18n from "vue-i18n";
import { Toast, Button} from "vant";

import $public from "@/utils/public.js";
import $filters from "@/utils/filters.js";
import $language from "@/language/index.js";


import '@/assets/js/rem.js'
import "@/assets/css/reset.css";
import "@/assets/css/common.scss";

Vue.config.productionTip = false;
Vue.use(Toast).use(Button);


Vue.prototype.$public = $public;


// 语言
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.lang || 'cn',
  messages: $language
});

// 全局过滤器
Object.keys($filters).forEach(filterName => {
  Vue.filter(filterName, $filters[filterName])
})


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
