import {reactive} from 'vue'
import { defineStore } from 'pinia'
import {signIn, signUp} from "@/api/base/auth";

export const useAuthStore = defineStore('counter', () => {
  const state = reactive({
    auth: null,

  });

  // 处理登录
  const handleSignIn = (data) => {
    return new Promise((resolve, reject) => {
      signIn(data).then((resp) => {
        state.auth = resp;
        resolve()
      }).catch((e) => {
        reject()
      })
    });
  }


  // 处理注册
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

  const preSignIn = () => {

  }


  return { state, handleSignIn, handleSignUp, preSignIn }
})
