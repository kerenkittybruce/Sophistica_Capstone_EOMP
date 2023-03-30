import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductsView from "@/views/ProductsView.vue";
import ContactUsView from "@/views/ContactUsView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import AdminView from "@/views/AdminView.vue";
import SingleProductView from "@/views/SingleProductView.vue";
import UserProfileView from "@/views/UserProfileView.vue";
<<<<<<< HEAD
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
=======
import ForgetView from "@/views/ForgotPasswordView.vue";
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactUsView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckoutView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/single",
    name: "single",
    component: SingleProductView,
  },
  {
    path: "/user",
    name: "user",
    component: UserProfileView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/forgotten",
    name: "forgotten",
    component: ForgetView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/forgotten",
    name: "forgotten",
    component: ForgotPasswordView,
  },
  {
    path: "/:patchMatch(.*)*",
    name: "login",
    meta: {
      title: "Login",
    },
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
