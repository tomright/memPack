import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/mainPage.vue"),
    name: "Главная страница",
    meta: {
      title: "Главная страница",
    },
  },
  {
    path: "/favorit",
    component: () => import("@/pages/youMemes.vue"),
    name: "Ваши мемы",
    meta: {
      title: "Ваши мемы",
    },
  },
  {
    path: "/register",
    component: () => import("@/pages/registerPage.vue"),
    name: "Регистрация",
    meta: {
      title: "Регистрация",
    },
  },
  {
    path: "/login",
    component: () => import("@/pages/logInPage.vue"),
    name: "Вход",
    meta: {
      title: "Вход",
    },
  },
  {
    path: "/aboutus",
    component: () => import("@/pages/aboutUs.vue"),
    name: "О приложении",
    meta: {
      title: "О приложении",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
