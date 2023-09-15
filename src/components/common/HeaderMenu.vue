<template>
  <a-layout-header class="layout-header">
    <a-row>
      <a-col flex="48px">
        <menu-unfold-outlined v-if="menuStore.collapsed" class="header-trigger" @click="menuStore.triggerCollapsed" />
        <menu-fold-outlined v-else class="header-trigger" @click="menuStore.triggerCollapsed" />
      </a-col>
      <a-col flex="auto">&nbsp;</a-col>
      <a-col>
        <a-dropdown placement="bottomRight">
          <span class="header-text">
            <a-avatar :size="24" style="margin-top: -4px; margin-right: 4px;">
              <template #icon><UserOutlined /></template>
            </a-avatar>
            登录用户：{{ 111 }}
          </span>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <span><UserOutlined /> 个人中心</span>
              </a-menu-item>
              <a-menu-item>
                <span><SettingOutlined /> 账户设置</span>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item>
                <span><LogoutOutlined /> 退出登录</span>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </a-layout-header>
</template>
<script setup>
import {MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, UserOutlined, SettingOutlined} from "@ant-design/icons-vue";
import {useMenuStore} from "@/stores/menu";
const menuStore = useMenuStore();
</script>
<style scoped>

</style>