import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/main/index/DashboardView.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import SignIn from '@/views/auth/SignIn.vue';
import SignUp from '@/views/auth/SignUp.vue';
import {hasToken} from "@/utils/cookie";
import {useBaseStore} from "@/stores/base";
import BaseLayout from "@/layouts/BaseLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

// 白名单路径列表
const whiteListPath = [];

// 白名单路由名列表
const whiteListName = ['SignIn', 'SignUp'];

// 跳转页面
const authPageName = "auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      redirect: {name: 'dashboard'},
      children: [
        {
          path: '/',
          component: MainLayout,
          children: [
            {
              path: '/dashboard',
              name: 'dashboard',
              component: DashboardView,
            },
          ],
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

      ],
    }
  ]
});

/**
 * 判断目标页面是否白名单
 *
 * @param to
 * @returns {boolean}
 */
const judgeWhite = (to) => {
  const pathWhite = whiteListPath.filter((item) => item === to.path);
  const nameWhite = whiteListName.filter((item) => item === to.name);
  return (pathWhite.length > 0 || nameWhite.length > 0);
}

router.beforeEach(async (to, from) => {

  // 获取目标页面是否白名单页面
  const isWhite = judgeWhite(to);

  // 目标页面是白名单，并且没有token存在;
  if (isWhite && !hasToken()) return true;

  // 目标页面是白名单，并且存在token，自动进入首页
  if (isWhite && hasToken()) return {path: '/'};

  // 目标页面非白名单，并且不存在Token，自动跳转至登录页
  if (!isWhite && !hasToken()) return {name: authPageName};

  // 目标页面非白名单，并存在token
  if (!isWhite && hasToken()) {
    const store = useBaseStore();
    // 仓库初始化
    const init = await store.init();
    if (init) return true;
    else return {name: authPageName}
  }
});

export default router
