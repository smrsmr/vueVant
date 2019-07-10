import Vue from "vue";
import Router from "vue-router";
import index from "./views/index/index";

Vue.use(Router);

export default new Router({
  mode: "history",
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
      component: index
    },
    {
      path: "/search",
      name: "search",
      component: () => import("./views/search/index.vue")
    },
    {
      path: "/friends",
      name: "friends",
      component: () => import("./views/friends/index.vue")
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("./views/setting/index.vue")
    },
    {
      path: "/404",
      name: "error",
      component: () => import("./components/404.vue")
    }
  ]
});
