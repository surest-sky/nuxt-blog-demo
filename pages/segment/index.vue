<template>
  <div class="article">
    <ul>
      <li v-for="(item, key) in articles" :key="key">
        <img :src="item.avatar" class="avatar" alt="item.title">
        <a :href="item.url">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                articles: [
                    {
                        "id": 869,
                        "title": "记录自己两年来所学",
                        "avatar": "https://cdn.learnku.com/uploads/avatars/5035_1469321991.jpeg!/both/100x100",
                        "url": "https://learnku.com/articles/33282",
                    },
                    {
                        "id": 902,
                        "title": "谈谈最近的一点感悟和之后的学习安排",
                        "avatar": "https://cdn.learnku.com/uploads/avatars/26855_1530498539.jpeg!/both/100x100",
                        "url": "https://learnku.com/articles/37600"
                    },
                    {
                        "id": 947,
                        "title": "记录自己两年来所学",
                        "avatar": "https://cdn.learnku.com/uploads/avatars/5035_1469321991.jpeg!/both/100x100",
                        "url": "https://learnku.com/articles/33282"
                    },
                    {
                        "id": 980,
                        "title": "谈谈最近的一点感悟和之后的学习安排",
                        "avatar": "https://cdn.learnku.com/uploads/avatars/26855_1530498539.jpeg!/both/100x100",
                        "url": "https://learnku.com/articles/37600"
                    },
                    {
                        "id": 998,
                        "title": "大数据可视化服务平台Davinci上榜2019年度最受欢迎中国开源软件",
                        "avatar": "https://avatar-static.segmentfault.com/253/247/2532479025-5bd2ca55089f0_small",
                        "url": "https://segmentfault.com//a/1190000021382890"
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
  .article {
    width: 100%;
    margin: 0px auto;

      >ul>li {
        text-decoration: none;
        list-style: none;
        height: 80px;
      }

      .avatar {
        width: 40px;
        height: 40px;
      }
  }
</style>
