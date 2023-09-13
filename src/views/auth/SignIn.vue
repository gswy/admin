<template>
  <div class="auth-page">
    <div class="auth-box">
      <a-form
        :model="state.form"
        autocomplete="off"
        @finish="submitLogin"
      >
        <a-form-item name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input size="large" v-model:value="state.form.username" placeholder="请输入用户账号">
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="password" :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input-password size="large" v-model:value="state.form.password" placeholder="请输入用户密码">
            <template #prefix>
              <lock-outlined />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item name="remember">
          <a-checkbox v-model:checked="state.form.remember">自动登录</a-checkbox>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block size="large" :loading="state.submitLoading">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script setup>

import {reactive} from "vue";
import {UserOutlined, LockOutlined} from "@ant-design/icons-vue";
import {useAuthStore} from "@/stores/auth";

const store = useAuthStore();

const state = reactive({
  submitLoading: false,
  form: {
    username: '',
    password: '',
    remember: '',
  }
});

const submitLogin = () => {
  state.submitLoading = true;
  store.handleSignIn(state.form).then((resp) => {

  }).catch((e) => {

  }).finally(() => {
    state.submitLoading = false;
  });
}

</script>
<style scoped>

</style>