<template>
  <a-layout-sider
    v-model:collapsed="store.collapsed"
    :trigger="null"
    collapsible
    :style="{ overflow: 'auto', height: '100vh' }"
  >
    <div class="main-logo">
      <router-link to="/" class="main-logo-link">
        <img src="@/assets/images/logo.svg" alt="LOGO" />
        <h1 v-if="!store.collapsed">WanYun Pro</h1>
      </router-link>
    </div>
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="store.collapsed"
      :items="items"
    ></a-menu>
  </a-layout-sider>
</template>
<script setup>
import {useMenuStore} from "@/stores/menu";
import {h, reactive} from "vue";
import {AppstoreOutlined, DesktopOutlined, InboxOutlined, MailOutlined, PieChartOutlined} from "@ant-design/icons-vue";
const store = useMenuStore();

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: '工作台',
    title: '工作台',
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: 'Option 2',
    title: 'Option 2',
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: 'Option 3',
    title: 'Option 3',
  },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5',
        title: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
        title: 'Option 6',
      },
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8',
      },
    ],
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
          },
        ],
      },
    ],
  },
]);
</script>
<style scoped>
</style>