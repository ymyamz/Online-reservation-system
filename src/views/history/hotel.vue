<template>
  <div class="table-list">
    <el-divider />
    <div class="table-data">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="Name" label="名称" width="150" />
        <el-table-column prop="Price" label="价格" width="120" />
        <el-table-column prop="Star" label="酒店星级" width="120" />
        <el-table-column prop="Type" label="房型" width="120" />
        <el-table-column prop="Time" label="时间" width="120" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">评分</el-button>
            <el-button link type="primary" size="small" @click="handleClick">退款</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleClick = () => {
  console.log('click')
}

const tableData = [
  {
    Name: '启正圆真大酒店',
    Price: '300',
    Star: '五星',
    Type: '标准单间',
    Time: '2023/5/02'
  },
  {
    Name: '启正圆真大酒店',
    Price: '300',
    Star: '五星',
    Type: '标准单间',
    Time: '2023/5/02'
  },
  {
    Name: '启正圆真大酒店',
    Price: '300',
    Star: '五星',
    Type: '标准单间',
    Time: '2023/5/02'
  },
  {
    Name: '启正圆真大酒店',
    Price: '300',
    Star: '五星',
    Type: '标准单间',
    Time: '2023/5/02'
  },
]
</script>
