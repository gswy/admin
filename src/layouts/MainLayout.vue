<template>
  <a-layout>
    <sidebar-menu />
    <a-layout>
      <header-menu />
      <a-layout-content class="main-content">
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import SidebarMenu from "@/components/common/SidebarMenu.vue";
import HeaderMenu from "@/components/common/HeaderMenu.vue";

</script>
<style scoped>

</style>