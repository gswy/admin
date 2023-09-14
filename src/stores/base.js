import {computed} from 'vue'
import { defineStore } from 'pinia'

import { useAuthStore } from '@/stores/auth';
import { useMenuStore } from '@/stores/menu';

export const useBaseStore = defineStore('base', () => {

  // Auth Store
  const auth = useAuthStore();

  // Menu Store
  const menu = useMenuStore();

  // 全局Loading
  const loading = computed(() => {
    return auth.loading || menu.loading;
  });

  // 全局加载完毕标识
  const hasInit = computed(() => {
    return auth.hasInit && menu.hasInit;
  });

  // 初始化仓库
  const init = () => {
    return new Promise((resolve, reject) => {
      if (hasInit.value) {
        resolve(true); return;
      }
      Promise.all([auth.init(), menu.init()])
        .then(() => {
          resolve(true)
        }).catch(() => {
          reject(false)
        });
    });
  }

  return { auth, menu, loading, init }
})
