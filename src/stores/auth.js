import {computed, reactive} from 'vue'
import { defineStore } from 'pinia'
import { signIn, getMine } from '@/api/base/auth'
import {delToken, setToken} from '@/utils/cookie';

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    loading: false,
    hasInit: false,
    user: null,
  });

  const loading = computed(() => state.loading);
  const hasInit = computed(() => state.hasInit);
  const user = computed(() => state.user);


  // 处理登录
  const handleSignIn = (data) => {
    return new Promise((resolve, reject) => {
      signIn(data).then(({token, expired}) => {
        setToken(token, expired);
        resolve(true)
      }).catch((e) => {
        reject(false)
      });
    });
  }

  const loadAuthInfo = () => {
    return new Promise((resolve, reject) => {
      getMine().then((data) => {
        state.user = data;
        resolve(true);
      }).catch((e) => {
        state.user = null;
        delToken()
        reject(false);
      });
    });
  }

  const init = () => {
    return new Promise((resolve, reject) => {
      if (state.hasInit) {
        resolve(true); return;
      }
      state.loading = true;
      loadAuthInfo().then((result) => {
        resolve(result)
      }).catch((e) => {
        reject(e)
      }).finally(() => {
        state.loading = false;
        state.hasInit = true;
      });
    });
  }

  return {
    user,
    loading,
    hasInit,
    handleSignIn,
    init
  }
})
