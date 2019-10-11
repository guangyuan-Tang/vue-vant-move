import Vue from "vue";
import Router from "vue-router";
import $store from "@/store/index.js";
import $public from "@/utils/public.js"
Vue.use(Router);


let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      meta: { title: "首页", auth: false, keepAlive: false },
      component: () => import("@/views/IndexModule/Index.vue"),
    },
    {
      path: "/classify",
      name: "classify",
      meta: { title: "分类", auth: false, keepAlive: false },
      component: () => import("@/views/ClassifyModule/Classify.vue"),
    },
    {
      path: "/buyCart",
      name: "buyCart",
      meta: { title: "购物车", auth: true, keepAlive: false },
      component: () => import("@/views/BuyCartModule/BuyCart.vue"),
    },
    {
      path: "/user",
      name: "user",
      meta: { title: "个人中心", auth: true, keepAlive: false },
      component: () => import("@/views/UserModule/User.vue"),
    },
    
  ]
});

// 公共导航守卫
router.beforeEach((to, from, next) => {
  // 路由发生改变修改页面的title
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // 保存当前页面 url，用于后续跳转
  if (["/login", "/register"].indexOf(to.path) === -1) {
    $public.setSession("backUrl", to.fullPath);
  }

  
  //重置全局loading状态
  $store.commit("resetLoading");


  next();

  // 登录校验
  // if (to.meta.auth) {
  //   // 需要登录
  //   if (isToken) {
  //     next();
  //   } else {
  //     let path = "/login";
  //     let query = to.query;
  //     next({ path, query });
  //   }
  // } else {
  //   next();
  // }

});


export default router