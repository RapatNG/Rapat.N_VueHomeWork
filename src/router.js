import { createRouter, createWebHistory } from "vue-router";
import main from "@/pages/main.vue";
import contact from "@/pages/contact.vue";
import home from "@/pages/home.vue";

const routes = [
  { path: "/", name: "home", component: home },
  { path: "/main", name: "main", component: main },
  { path: "/contact", name: "contact", component: contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
