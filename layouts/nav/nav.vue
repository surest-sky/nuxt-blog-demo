<template>
  <div class="navbar">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="table_label" label="思否" name="segment">
        <Segment />
      </el-tab-pane>
      <el-tab-pane class="table_label" label="Learnku" name="learnku">
        Learnku
      </el-tab-pane>
      <el-tab-pane class="table_label" label="知乎" name="zhihu">
        知乎
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Segment from '@/pages/segment/index'
    export default {
        name: "Navbar",
        data() {
            return {
                activeName: 'segment'
            }
        },
        components: {
            Segment
        },
        methods: {
            handleClick() {
              console.log(this.activeName)
            }
        }
    }
</script>

<style>
  .el-tabs__nav {
    width: 100%;
  }
  .el-tabs__item {
    width: 30%;
    text-align: center;
  }
</style>

