<template>
  <el-container style="height: 100vh;">
    <el-aside width="200px" style="background: #001529;">
      <el-menu
        router
        background-color="#001529"
        text-color="#fff"
        active-text-color="#409EFF"
        :default-active="$route.path"
      >
        <el-menu-item index="/dashboard">数据看板</el-menu-item>
        <el-menu-item index="/users">用户管理</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="background: #fff; border-bottom: 1px solid #eee; display: flex; align-items: center;">
        后台管理系统 Demo
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>