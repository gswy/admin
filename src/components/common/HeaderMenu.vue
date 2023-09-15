<template>
  <a-layout-header style="background: #fff; padding: 0 16px;">
    <a-row>
      <a-col flex="48px">
        <menu-unfold-outlined
          v-if="menuStore.collapsed"
          class="header-trigger"
          @click="menuStore.triggerCollapsed"
        />
        <menu-fold-outlined
          v-else
          class="header-trigger"
          @click="menuStore.triggerCollapsed"
        />
      </a-col>
      <a-col flex="auto">&nbsp;</a-col>
      <a-col>
        <a-dropdown placement="bottomRight">
          <span class="header-text">登录用户：{{ 111 }}</span>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </a-layout-header>
</template>
<script setup>
import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons-vue";
import {useMenuStore} from "@/stores/menu";
const menuStore = useMenuStore();
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>