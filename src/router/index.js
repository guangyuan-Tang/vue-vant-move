import Vue from "vue";
import Router from "vue-router";
import $public from "@/utils/public.js"
Vue.use(Router);


let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import(/* webpackChunkName: "index" */ "@/views/IndexModule/Index.vue"),
      meta: {
        title: "首页",
        auth: false,
        keepAlive: false
      }
    },
    {
      path: "/classify",
      name: "classify",
      component: () => import(/* webpackChunkName: "classify" */ "@/views/ClassifyModule/Classify.vue"),
      meta: {
        title: "分类",
        auth: false,
        keepAlive: false
      }
    },
    {
      path: "/buyCart",
      name: "buyCart",
      component: () => import(/* webpackChunkName: "buyCart" */ "@/views/BuyCartModule/BuyCart.vue"),
      meta: {
        title: "购物车",
        auth: true,
        keepAlive: false
      }
    },
    {
      path: "/user",
      name: "user",
      component: () => import(/* webpackChunkName: "cser" */ "@/views/UserModule/User.vue"),
      meta: {
        title: "个人中心",
        auth: true,
        keepAlive: false
      }
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