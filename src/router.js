import Vue from "vue";
import Router from "vue-router";
import index from "./views/index/index";

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "*", redirect: "/404" },
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: index,
      meta: {
        // 页面标题title
        title: "首页"
      }
    },
    {
      path: "/search",
      name: "search",
      component: () => import("./views/search/index.vue"),
      meta: {
        // 页面标题title
        title: "搜索"
      }
    },
    {
      path: "/friends",
      name: "friends",
      component: () => import("./views/friends/index.vue"),
      meta: {
        // 页面标题title
        title: "联系人"
      }
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("./views/setting/index.vue"),
      meta: {
        // 页面标题title
        title: "设置"
      }
    },
    {
      path: "/404",
      name: "error",
      component: () => import("./components/404.vue"),
      meta: {
        // 页面标题title
        title: "404"
      }
    }
  ]
});
