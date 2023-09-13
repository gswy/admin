import {reactive} from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('counter', () => {
  const state = reactive({

  });
  return { state }
})
