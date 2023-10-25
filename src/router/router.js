import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/mainPage.vue"),
    name: "Домашнаяя страница",
    title: "memPack",
  },
  {
    path: "/memes/:id",
    component: () => import("@/pages/currentMem.vue"),
    name: "Текущий мем",
    title: "memPack",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
