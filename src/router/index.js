import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Todo from "../views/Todo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/todo",
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/example",
    name: "Example",
    component: null,
  },
  {
    path: "/example1",
    name: "Example1",
    component: null,
  },
  {
    path: "/example2",
    name: "Example2",
    component: null,
  },
  {
    path: "/example3",
    name: "Example3",
    component: null,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "text-dark",
});

export default router;
