<template>
  <div class="menu-list">
<!--    <div class="menu" :class="{active: activeMenu == '首页'}">首页</div>-->
<!--    <div class="menu" :class="{active: activeMenu == '博客'}">博客</div>-->
<!--    <div class="menu"><span class="add"><img :src="icon.add" alt=""></span></div>-->
<!--    <div class="menu">消息</div>-->
    <div class="menu" v-for="(item, index) in menus"
         :key="index"
         :class="getClass(item)"
         @click="changeMenu(item)"
    >{{item.label}}</div>
  </div>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                icon: {
                    add: require('@/static/icon/add.png')
                },
                activeMenu: this.$store.state.menu.activeMenu,
                menus: this.$store.state.menu.menusList,
            }
        },
        mounted() {
            console.log(this.$store.state.menu);
        },
        methods: {
            changeMenu(item) {
              let menu = item.label;
              let router = item.router;
              this.$store.commit('menu/toggleMenu', menu);
              this.activeMenu = menu;
              this.$router.push(router)
            },
            getClass(item) {
                let className = '';
                if( this.activeMenu == item.label ) {
                    className += `active`
                }
                if( typeof item.class != "undefined" ) {
                    className += ` ${item.class}`
                }
                return className
            }
        }
    }
</script>

<style scoped lang="less">
    .menu-list {

      width: 100%;
      position: fixed;
      display: flex;
      margin-left: -12px;
      bottom: 0px;
      background-color: white;
      height: 40px;
      line-height: 40px;
      border-top: 1px solid black;

      .active {
        font-weight: bolder;
        color: #41b6e6;
      }

      .menu {
        cursor: pointer;
        width: 25%;
        box-sizing: border-box;
        height: 100%;
        flex-wrap: nowrap;
        text-align: center;
      }

      .menu:hover {
        color: #41b6e6;
      }

      .add {
        padding: 3px;

        >img {
          width: 30px;
          height: 30px;
          margin-top: 5px;
        }
      }
    }
</style>
