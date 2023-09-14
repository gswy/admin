import {computed, reactive} from 'vue'
import { defineStore } from 'pinia'
import { signIn, signUp, getMine } from '@/api/base/auth'
import {hasToken, setToken} from '@/utils/cookie';

export const useAuthStore = defineStore('counter', () => {
  const state = reactive({
    auth: null
  });

  const hasAuth = computed(() => { state.auth !== null })

  // 处理登录
  const handleSignIn = (data) => {
    return new Promise((resolve, reject) => {
      signIn(data).then(({token, expired}) => {
        setToken(token, expired);
        loadAuthInfo();
        resolve()
      }).catch((e) => {
        reject()
      })
    });
  }

  const handleSignUp = (data) => {
    return new Promise((resolve, reject) => {
      signUp(data).then((resp) => {
        state.auth = resp;
        resolve()
      }).catch((e) => {
        reject()
      })
    });
  }

  const loadAuthInfo = () => {
    return getMine();
  }

  const init = () => {
    return new Promise((resolve, reject) => {

    });
  }


  return { state, hasAuth, handleSignIn, handleSignUp, init }
})
