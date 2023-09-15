<template>
  <a-layout-sider v-model:collapsed="store.collapsed" :trigger="null" collapsible>
    <div class="main-logo">
      <router-link to="/" class="main-logo-link">
        <img src="@/assets/images/logo.svg" alt="LOGO" />
        <h1 v-if="!store.collapsed">WanYun Pro</h1>
      </router-link>
    </div>
<!--    <a-menu-->
<!--        v-model:openKeys="store.openKeys"-->
<!--        v-model:selectedKeys="store.selectKeys"-->
<!--        mode="inline"-->
<!--        theme="dark"-->
<!--        :inline-collapsed="store.collapsed"-->
<!--        :items="store.menus"-->
<!--    ></a-menu>-->
  </a-layout-sider>
</template>
<script setup>

import {useMenuStore} from "@/stores/menu";
const store = useMenuStore();

</script>
<style scoped>

</style>