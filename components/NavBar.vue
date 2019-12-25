<template>
  <div class="navbar">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="table_label" label="思否" name="segment">
        <List v-if="tabComponent.segment.is" :label="tabComponent.segment.key"/>
      </el-tab-pane>
      <el-tab-pane class="table_label" label="Learnku" name="learnku">
        <List v-if="tabComponent.learnku.is" :label="tabComponent.learnku.key"/>
      </el-tab-pane>
      <el-tab-pane class="table_label" label="知乎" name="zhihu">
        <List v-if="tabComponent.zhihu.is" :label="tabComponent.zhihu.key"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import List from '@/components/List/Index'
    export default {
        name: "NavBar",
        middleware: 'home',
        data() {
            return {
                activeName: "zhihu",
                tabComponent: {
                    segment: {
                        key: "segment",
                        is: false
                    },
                    learnku: {
                        key: "learnku",
                        is: false
                    },
                    zhihu: {
                        key: "zhihu",
                        is: false
                    }
                }
            }
        },
        components: {
            List
        },
        methods: {
            showComponent(label) {
                switch (label) {
                    case "segment":
                        this.tabComponent.segment.is = true;
                        break;
                    case "learnku":
                        this.tabComponent.learnku.is = true;
                        break;
                    case "zhihu":
                        this.tabComponent.zhihu.is = true;
                        break;
                }
            },
            redirect(label) {
                this.$router.push(label)
            },
            router_path() {
                let router_path = this.$route.path
                var activeName = null
                if(router_path.match("learnku")) {
                    activeName = "learnku"
                }else if(router_path.match("zhihu")) {
                    activeName = "zhihu";
                }else {
                    activeName = "segment"
                }
                this.activeName = activeName;

                this.showComponent(activeName)
            },
            handleClick() {
                let label = this.activeName
                this.redirect(label)
            }
        },
        created() {
            this.router_path()
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
