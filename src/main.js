import Vue from "vue";
import VueI18n from "vue-i18n";

import App from "@/App.vue";
import store from "@/store/index.js";
import router from "@/router/index.js";
import { Toast, Button, Icon,} from "vant";

// 移动端适配
import 'amfe-flexible';
import $http from "@/utils/http.js";
import $public from "@/utils/public.js";
import $filters from "@/utils/filters.js";
import $language from "@/language/index.js";

import "@/assets/css/reset.css";
import "@/assets/css/common.scss";

Vue.config.productionTip = false;
Vue.use(Toast)
  .use(Button)
  .use(Icon);


Vue.prototype.$http = $http;
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
