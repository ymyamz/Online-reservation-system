<template>
  <div class="table-list">
    <el-divider />
    <div class="search-form">
        <el-form :inline="true" size="big" class="demo-form-inline">
          <el-divider direction="vertical" />
          <el-divider direction="vertical" />
          <el-form-item label="酒店名称">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="排序条件">
            <el-select-v2
              v-model="value"
              :options="options"
              placeholder="Please select"
              style="width: 240px"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
    </div>
    <div class="table-data">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="Name" label="名称" width="150" />
        <el-table-column prop="Price" label="价格" width="120" />
        <el-table-column prop="Star" label="酒店星级" width="120" />
        <el-table-column prop="Hot" label="热门水平" width="120" />
        <el-table-column prop="Comment" label="客户评分" width="600" />
        <el-table-column prop="Type" label="房型" width="120" />
        <el-table-column prop="Remain" label="余量" width="120" />
        <el-table-column fixed="right" label="操作" width="120">
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
const initials = ['价格水平', '酒店星级', '热门水平', '客户评分']

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
    Name: '启正圆真大酒店',
    Price: '300',
    Star: '五星',
    Hot: '96',
    Comment: '4.7',
    Type: '标准单间',
    Remain: '20',
  },
  {
    Name: '启正圆真大酒店',
    Price: '500',
    Star: '五星',
    Hot: '96',
    Comment: '4.7',
    Type: '标准双人间',
    Remain: '35',
  },
  {
    Name: '青年旅社',
    Price: '150',
    Star: '三星',
    Hot: '90',
    Comment: '4.2',
    Type: '单人间',
    Remain: '5',
  },
  {
    Name: '青年旅社',
    Price: '200',
    Star: '三星',
    Hot: '90',
    Comment: '4.2',
    Type: '双人间',
    Remain: '3',
  },
  {
    Name: '青年旅社',
    Price: '220',
    Star: '三星',
    Hot: '90',
    Comment: '4.2',
    Type: '三人间',
    Remain: '9',
  },
]
</script>
