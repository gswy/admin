import {reactive} from 'vue'
import { defineStore } from 'pinia'

export const useBaseStore = defineStore('counter', () => {
  const state = reactive({
    menus: [],
  });
  return { state }
})
