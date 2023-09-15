import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {getMenu} from "@/api/base/auth";

export const useMenuStore = defineStore('menu', () => {
    const state = reactive({
        loading: false,
        hasInit: false,
        collapsed: false,
        menus: [],
        openKeys: [],
        selectKeys: [],
    });

    const loading = computed(() => state.loading);
    const hasInit = computed(() => state.hasInit);

    const menus = computed(() => {
        return [];
    });

    /**
     * 打开的目录
     */
    const openKeys = computed(() => state.openKeys);

    /**
     * 选择的菜单
     */
    const selectKeys = computed(() => state.selectKeys);

    /**
     * 是否最小化
     */
    const collapsed = computed(() => state.collapsed);

    /**
     * 切换菜单大小
     */
    const triggerCollapsed = () => {
        state.collapsed = !state.collapsed;
    }

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
        menus,
        loading,
        openKeys,
        selectKeys,
        collapsed,
        hasInit,
        init,
        triggerCollapsed
    }
});