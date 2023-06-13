import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/our-company",
      name: "our-company",
      component: () => import("../views/OurCompanyView.vue"),
    },
    {
      path: "/locations",
      name: "Location",
      component: () => import("../views/LocationView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/web-design",
      name: "web-design",
      component: () => import("../views/WebDesignView.vue"),
    },
    {
      path: "/app-design",
      name: "app-design",
      component: () => import("../views/AppDesignView.vue"),
    },
    {
      path: "/graphic-design",
      name: "graphic-design",
      component: () => import("../views/GraphicDesignView.vue"),
    },
  ],
});

export default router;
