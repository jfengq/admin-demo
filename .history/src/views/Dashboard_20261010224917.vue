<template>
  <div>
    <h2>数据看板</h2>
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="6"><el-card>用户数：1,234</el-card></el-col>
      <el-col :span="6"><el-card>订单数：567</el-card></el-col>
      <el-col :span="6"><el-card>收入：¥8,900</el-card></el-col>
      <el-col :span="6"><el-card>活跃：89</el-card></el-col>
    </el-row>

    <el-card style="margin-top: 20px;">
      <div ref="chartRef" style="width: 100%; height: 300px;"></div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)

onMounted(() => {
  const chart = echarts.init(chartRef.value)
  chart.setOption({
    title: { text: '近7天访问量' },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: { type: 'value' },
    series: [
      {
        data: [120, 200, 150, 80, 170, 110, 130],
        type: 'line',
        smooth: true,
      },
    ],
  })
})
</script>