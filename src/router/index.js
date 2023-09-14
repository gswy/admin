import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/main/index/DashboardView.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import SignIn from '@/views/auth/SignIn.vue';
import SignUp from '@/views/auth/SignUp.vue';
import {useAuthStore} from '@/stores/auth';
import {getToken, hasToken} from "@/utils/cookie";

const whiteListPath = [];
const whiteListName = ['SignIn', 'SignUp'];
const authPageName = "auth";

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
});

const judgeWhite = (to) => {
  const pathWhite = whiteListPath.filter((item) => item === to.path);
  const nameWhite = whiteListName.filter((item) => item === item.name);
  return (pathWhite.length > 0 || nameWhite > 0) && !hasToken();
}

router.beforeEach(async (to, from) => {
  if (judgeWhite(to)) return true;
  const authStore = useAuthStore();
  if (hasToken()) {

  } else {

  }



});




export default router
