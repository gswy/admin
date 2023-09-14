<template>
  <a-config-provider>
    <a-spin tip="加载中..." size="large" :spinning="store.loading" wrapperClassName="full-screen-loading">
      <RouterView />
    </a-spin>
  </a-config-provider>
</template>
<script setup>
import {useBaseStore} from "@/stores/base";
const store = useBaseStore();
</script>
<style>
</style>
