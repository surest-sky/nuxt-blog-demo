<template>
  <transition name="el-fade-in-linear">
  <div class="article" v-loading="loading">
    <el-divider></el-divider>
    <div class="article-box" v-for="(item, key) in articles" :key="key">
      <div class="article-item">
        <img :src="item.avatar" class="avatar">
        <a :href="item.url">{{item.title}}</a>
      </div>
      <el-divider></el-divider>
    </div>
    <div class="top"><img :src="icon.top" alt=回到顶部></div>
  </div>
  </transition>
</template>

<script>
    import {getScrollHeight,getScrollTop,getWindowHeight} from "@/util/screen";
    import { ARTICLE_LIST } from "@/apis/article"
    export default {
        name: "index",
        data() {
            return {
                articles: [],
                params: {
                    page: 1,
                    pageSize: 20
                },
                loading: true,
                page: {
                    total: 0
                },
                icon: {
                    top: require('@/static/icon/aui-icon-top.png')
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
                this.$axios.get(ARTICLE_LIST, {
                    params: this.params
                }).then(function (response) {
                    let data = response.data.data;
                    self.setPage(data);
                }).catch(function (error) {
                    // console.log(error)
                })
            },
            // 设置分页
            setPage(data) {
                let articles = this.articles;
                if(articles.length == 0) {
                    articles = data.list
                }else{
                    articles = articles.concat(data.list)
                }
                this.articles = articles
                this.loading = false;
                this.page.total = data.total
            },
            // 监听滚动条滚动
            handleScroll() {
                if(getScrollTop() + getWindowHeight() >= getScrollHeight()){
                    // 计算下一页
                    let endPage = Math.ceil(this.page.total / this.params.pageSize)
                    // console.log(endPage)
                    // 计算下一页
                    let nextPage =  ++ this.params.page
                    // console.log(nextPage)
                    if(nextPage <= endPage) {
                        this.params.page = nextPage
                        this.getArticles()
                    }
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped lang="less">
  .top {
    position: absolute;
    bottom: 40px;
    right: 20px;
    width: 30px;
    height: 30px;

    >img{
      width: 100%;
      height: 100%;
    }
  }
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
    .top:hover {
      background-color: #bbcbe4;
      opacity: 0.2;
    }
  }
</style>
