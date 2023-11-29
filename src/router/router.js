import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/mainPage.vue"),
    name: "Домашнаяя страница",
    title: "Главная страница",
  },
  {
    path: "/favorit",
    component: () => import("@/pages/youMemes.vue"),
    name: "Ваши мемы",
    title: "Избранное",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
