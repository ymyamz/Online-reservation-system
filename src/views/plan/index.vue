<template>
  <div class="table-list">
    <el-divider />
    <div class="search-form">
        <el-form :inline="true" size="big" class="demo-form-inline">
          <el-divider direction="vertical" />
          <el-divider direction="vertical" />

          <el-form-item label="查询条件">
            <el-select-v2
              v-model="value"
              :options="options"
              placeholder="Please select"
              style="width: 240px"
            />
          </el-form-item>
          <el-form-item label="查询内容">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
    </div>
    <div class="table-data">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="Name" label="航班名称" width="100" />
        <el-table-column prop="From" label="出发地" width="80" />
        <el-table-column prop="Destination" label="目的地" width="80" />
        <el-table-column prop="Leave" label="出发时间" width="120" />
        <el-table-column prop="Arrive" label="到达时间" width="120" />
        <el-table-column prop="Company" label="航空公司" width="100" />
        <el-table-column prop="Type" label="舱位等级" width="100" />
        <el-table-column prop="Price" label="价格" width="80" />
        <el-table-column prop="Remain" label="余量" width="100" />
        <el-table-column fixed="right" label="操作" width="100">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">预订</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
const initials = ['航班名称', '目的地', '出发地', '时间']

const value = ref([])
const options = ref(
  Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}`,
  }))
)

const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    Name: 'GK2033',
    Price: '130',
    From:'上海',
    Destination:'杭州',
    Leave:'2023/5/20 22:00',
    Arrive:'2023/5/20 23:10',
    Company: '东航',
    Type: '二等座',
    Remain: '20',
  },
  {
    Name: 'GK2028',
    Price: '430',
    From:'杭州',
    Destination:'北京',
    Leave:'2023/5/24 12:30',
    Arrive:'2023/5/20 16:10',
    Company: '东航',
    Type: '二等座',
    Remain: '22',
  },
  {
    Name: 'GK2028',
    Price: '430',
    From:'杭州',
    Destination:'北京',
    Leave:'2023/5/24 12:30',
    Arrive:'2023/5/20 16:10',
    Company: '东航',
    Type: '二等座',
    Remain: '22',
  },
  {
    Name: 'GK2028',
    Price: '430',
    From:'杭州',
    Destination:'北京',
    Leave:'2023/5/24 12:30',
    Arrive:'2023/5/20 16:10',
    Company: '东航',
    Type: '二等座',
    Remain: '22',
  },
]
</script>
