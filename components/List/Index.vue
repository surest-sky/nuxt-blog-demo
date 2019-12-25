<template>
  <div class="article" v-loading="loading">
    <el-divider></el-divider>
    <div class="article-box" v-for="(item, key) in articles" :key="key">
      <div class="article-item">
        <img :src="item.avatar" class="avatar">
        <a :href="item.url">{{item.title}}</a>
      </div>
      <el-divider></el-divider>
    </div>
    <el-pagination
      layout="prev, pager, next"
      @current-change="changePage"
      :current-page="params.page"
      :total="page.total">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                articles: [],
                params: {
                    page: 1,
                    pageSize: 10
                },
                loading: true,
                page: {
                    total: 0
                }
            }
        },
        props: ['label'],
        created() {
          this.changeLabel();
          this.getArticles();
        },
        methods: {
            // 拼接参数，根据label值，传递请求参数
            changeLabel() {
              let label = this.label;
              switch (label) {
                case "segment":
                    this.params = Object.assign(this.params, {
                        platform: "Segmentfault"
                    })
                    break;
                  case "learnku":
                      this.params = Object.assign(this.params, {
                          platform: "Learnku"
                      })
                      break;
                  case "zhihu":
                      this.params = Object.assign(this.params, {
                          platform: "知乎"
                      })
                      break;
              }
            },
            // 获取文章列表
            getArticles() {
                let self = this;
                self.loading = true;
                this.$axios.get('articles', {
                    params: this.params
                }).then(function (response) {
                    let data = response.data.data;
                    self.setPage(data);
                    console.log(self.articles);
                    console.log(data)
                }).catch(function (error) {
                    console.log(error)
                })
            },
            // 设置分页
            setPage(data) {
                this.articles = data.list;
                this.loading = false;
                this.page.total = data.total
            },
            // 分页改变
            changePage(page) {
                this.params.page = page
                console.log(this.params)
                this.getArticles()
            }
        }
    }
</script>

<style scoped lang="less">
  .article {
    width: 100%;
    margin: 0px auto;
    padding-left: 5px;

    >.el-divider {
      background-color: #bbcbe4;
    }

    .el-divider--horizontal {
      margin: 8px 0;
    }

    .article-item {
      display: flex;
      height: 50px;
      align-items: center;

      .el-divider {
        background-color: #f3f3f3;
      }

      >a {
        color: #6c7077;
      }

      .avatar {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }

      a {
        text-decoration: none;
      }
    }

    .el-pagination {
      float: right;
      overflow: hidden;
      margin-right: 30px;
    }
  }
</style>
