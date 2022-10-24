import { ROUTE_LAYOUT, ROUTE_LINK, ROUTE_NAME } from "@/consts/route.const";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: ROUTE_LINK.HOME,
    name: ROUTE_NAME.HOME,
    meta: {
      layout: ROUTE_LAYOUT.DEFAULT,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/IndexView.vue"),
  },
  {
    path: ROUTE_LINK.REGISTER,
    name: ROUTE_NAME.REGISTER,
    meta: {
      layout: ROUTE_LAYOUT.AUTH,
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
  },
  {
    path: ROUTE_LINK.LOGIN,
    name: ROUTE_NAME.LOGIN,
    meta: {
      layout: ROUTE_LAYOUT.AUTH,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
