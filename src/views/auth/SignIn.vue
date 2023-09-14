<template>
  <div class="auth-page">
    <div class="auth-box">
      <div class="auth-title">
        <img src="@/assets/images/logo.svg" alt="logo" />
        <span>通用管理后台</span>
      </div>
      <a-form :model="state.form" autocomplete="off" @finish="submitLogin">
        <a-form-item name="username">
          <a-input size="large" v-model:value="state.form.username" placeholder="请输入用户账号">
            <template #prefix>
              <user-outlined class="input-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item name="password">
          <a-input-password size="large" v-model:value="state.form.password" placeholder="请输入用户密码">
            <template #prefix>
              <lock-outlined class="input-icon" />
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
import {reactive} from 'vue';
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';
import {useAuthStore} from '@/stores/auth';
import {useRouter} from 'vue-router';

const store = useAuthStore();
const router = useRouter()

const state = reactive({
  // loading
  submitLoading: false,
  // 表单提交项
  form: {
    username: '',
    password: '',
    remember: false,
  },
  // 表单验证项
  rules: []
});

const submitLogin = () => {
  state.submitLoading = true;
  store.handleSignIn(state.form).then(() => {
    router.push({path: '/'});
  }).finally(() => {
    state.submitLoading = false;
  });
}

</script>
<style scoped>

</style>