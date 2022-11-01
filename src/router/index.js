import { ROUTE_LAYOUT, ROUTE_LINK, ROUTE_NAME } from "@/consts/route.const";
import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/configs/firebase";

// Auth Guards
const requireAuth = (to, from, next) => {
  const user = auth.currentUser;
  if (!user) next({ name: ROUTE_NAME.LOGIN, params: {} });
  else next();
};

// User exist
const checkUser = (to, from, next) => {
  const user = auth.currentUser;
  if (user) next({ name: ROUTE_NAME.PROFILE, params: {} });
  next();
};

const routes = [
  {
    path: ROUTE_LINK.REGISTER,
    name: ROUTE_NAME.REGISTER,
    meta: {
      layout: ROUTE_LAYOUT.AUTH,
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
    beforeEnter: checkUser,
  },
  {
    path: ROUTE_LINK.LOGIN,
    name: ROUTE_NAME.LOGIN,
    meta: {
      layout: ROUTE_LAYOUT.AUTH,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
    beforeEnter: checkUser,
  },
  {
    path: ROUTE_LINK.LOGOUT,
    name: ROUTE_NAME.LOGOUT,
    meta: {
      layout: ROUTE_LAYOUT.DEFAULT,
    },
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/LogoutView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: ROUTE_LINK.HOME,
    name: ROUTE_NAME.HOME,
    meta: {
      layout: ROUTE_LAYOUT.DEFAULT,
      text: "Home",
      leading: true,
      isFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/IndexView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: ROUTE_LINK.PROFILE,
    name: ROUTE_NAME.PROFILE,
    meta: {
      layout: ROUTE_LAYOUT.DEFAULT,
      text: "My Profile",
      isFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/ProfileView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: ROUTE_LINK.REPORT,
    name: ROUTE_NAME.REPORT,
    meta: {
      layout: ROUTE_LAYOUT.DEFAULT,
      text: "My Report",
      isFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/ReportView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: ROUTE_LINK.BUDGET,
    name: ROUTE_NAME.BUDGET,
    meta: {
      layout: ROUTE_LAYOUT.DEFAULT,
      text: "My Budget",
      isFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/BudgetView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: ROUTE_LINK.TRANSACTION,
    name: ROUTE_NAME.TRANSACTION,
    meta: {
      layout: ROUTE_LAYOUT.DEFAULT,
      text: "Add Transaction",
    },
    component: () =>
      import(
        /* webpackChunkName: "transaction" */ "../views/TransactionView.vue"
      ),
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
