<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 style="text-align: center; margin-bottom: 30px;">后台管理系统</h2>
      <el-form :model="form" label-width="0">
        <el-form-item>
          <el-input v-model="form.username" placeholder="用户名" size="large" />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            type="password"
            placeholder="密码"
            size="large"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="large"
            style="width: 100%;"
            @click="handleLogin"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
      <p style="text-align: center; color: #999; font-size: 12px;">
        任意用户名密码即可登录（demo）
      </p>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const form = ref({ username: '', password: '' })

const handleLogin = () => {
  if (!form.value.username || !form.value.password) {
    ElMessage.warning('请输入用户名和密码')
    return
  }
  localStorage.setItem('token', 'demo-token')
  ElMessage.success('登录成功')
  router.push('/dashboard')
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1f2937, #4b5563);
}
.login-card {
  width: 400px;
  padding: 20px;
}
</style>