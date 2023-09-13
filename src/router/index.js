import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from "@/views/main/index/DashboardView.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import SignIn from "@/views/auth/SignIn.vue";
import SignUp from "@/views/auth/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {name: 'dashboard'}
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthLayout,
      redirect: {name: 'SignIn'},
      children: [
        {
          name: 'SignIn',
          path: 'sign-in',
          component: SignIn,
        },
        {
          name: 'SignUp',
          path: 'sign-up',
          component: SignUp,
        }
      ]
    },
  ]
})

export default router
