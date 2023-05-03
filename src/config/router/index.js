import { createRouter, createWebHistory } from "vue-router";
import Homepages from "../../views/Homepages.vue";
import Vendorpages from "../../views/Vendorpages.vue";
import Login from "../../components/auth/Login.vue";
import Productpages from "../../views/Productpages.vue";
import Productviewpage from "../../views/Productviewpage.vue";
import Productlistall from "../../views/Productlistall.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Homepages",
      component: Homepages,
    },
    {
      path: "/vendorInput",
      component: Vendorpages,
    },
    {
      path: "/Login",
      component: Login,
    },
    {
      path: "/product",
      component: Productpages,
    },
    {
      path: "/productview",
      component: Productviewpage,
    },
    {
      path: "/productlist/pengadaan/dev/v1/products/:page/:size",
      component: Productlistall,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
