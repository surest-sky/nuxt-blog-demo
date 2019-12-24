<template>
  <div class="navbar">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="table_label" label="思否" name="segment">
        思否
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
    export default {
        name: "Navbar",
        data() {
            return {
                activeName: 'segment'
            }
        },
        methods: {
            handleClick() {
              console.log(this.activeName)
            }
        }
    }
</script>

<style>
  .el-tabs__item {
    width: 30%;
  }
</style>

