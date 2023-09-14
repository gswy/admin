import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {getMenu} from "@/api/base/auth";

export const useMenuStore = defineStore('menu', () => {
    const state = reactive({
        loading: false,
        hasInit: false,
        menus: [],
    });

    // 初始化菜单
    const init = () => {
        return new Promise((resolve, reject) => {
            if (state.hasInit) {
                resolve(true); return;
            }
            state.loading = true;
            getMenu()
                .then(data => {
                    state.menus = data;
                    resolve(true)
                })
                .catch(e => {
                    state.menus = [];
                    reject(e)
                }).finally(() => {
                    state.hasInit = true;
                    state.loading = false;
                });
        });
    }

    return {
        menus: state.menus,
        loading: computed(() => state.loading),
        hasInit: state.hasInit,
        init,
    }
});