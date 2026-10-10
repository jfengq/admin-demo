<template>
  <div>
    <h2>数据看板</h2>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="6"><el-card>用户数：1,234</el-card></el-col>
      <el-col :span="6"><el-card>订单数：567</el-card></el-col>
      <el-col :span="6"><el-card>收入：¥8,900</el-card></el-col>
      <el-col :span="6"><el-card>活跃：89</el-card></el-col>
    </el-row>
  </div>
</template>