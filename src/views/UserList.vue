<template>
  <div>
    <h2>用户管理</h2>

    <div style="margin: 20px 0; display: flex; gap: 10px;">
      <el-input v-model="keyword" placeholder="搜索姓名" style="width: 200px;" clearable />
      <el-button type="primary" @click="handleAdd">新增用户</el-button>
    </div>

    <el-table :data="pagedUsers" border>
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="role" label="角色" />
      <el-table-column label="操作" width="160">
        <template #default="{ row }">
          <el-button size="small" @click="handleEdit(row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      style="margin-top: 20px;"
      layout="prev, pager, next"
      :total="filteredUsers.length"
      :page-size="pageSize"
      v-model:current-page="currentPage"
    />

    <el-dialog v-model="dialogVisible" :title="isEdit ? '编辑用户' : '新增用户'">
      <el-form :model="form" label-width="60px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="form.role">
            <el-option label="管理员" value="管理员" />
            <el-option label="编辑" value="编辑" />
            <el-option label="访客" value="访客" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const users = ref([
  { name: '张三', email: 'zhang@test.com', role: '管理员' },
  { name: '李四', email: 'li@test.com', role: '编辑' },
  { name: '王五', email: 'wang@test.com', role: '访客' },
  { name: '赵六', email: 'zhao@test.com', role: '编辑' },
  { name: '孙七', email: 'sun@test.com', role: '访客' },
])

const keyword = ref('')
const currentPage = ref(1)
const pageSize = 3

const filteredUsers = computed(() =>
  users.value.filter((u) => u.name.includes(keyword.value))
)

const pagedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return filteredUsers.value.slice(start, start + pageSize)
})

const dialogVisible = ref(false)
const isEdit = ref(false)
const form = ref({ name: '', email: '', role: '访客' })
let editIndex = -1

const handleAdd = () => {
  isEdit.value = false
  form.value = { name: '', email: '', role: '访客' }
  dialogVisible.value = true
}

const handleEdit = (row) => {
  isEdit.value = true
  editIndex = users.value.indexOf(row)
  form.value = { ...row }
  dialogVisible.value = true
}

const handleSave = () => {
  if (isEdit.value) {
    users.value[editIndex] = { ...form.value }
  } else {
    users.value.push({ ...form.value })
  }
  dialogVisible.value = false
  ElMessage.success('保存成功')
}

const handleDelete = (row) => {
  ElMessageBox.confirm('确定删除该用户吗？', '提示', { type: 'warning' })
    .then(() => {
      users.value = users.value.filter((u) => u !== row)
      ElMessage.success('删除成功')
    })
    .catch(() => {})
}
</script>