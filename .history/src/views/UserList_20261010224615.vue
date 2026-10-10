<template>
  <div>
    <h2>用户管理</h2>
    <el-table :data="users" style="margin-top: 20px;" border>
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="role" label="角色" />
    </el-table>
  </div>
</template>

<script setup>
const users = [
  { name: '张三', email: 'zhang@test.com', role: '管理员' },
  { name: '李四', email: 'li@test.com', role: '编辑' },
  { name: '王五', email: 'wang@test.com', role: '访客' },
]
</script>