<template>
  <div class="main">
    <van-nav-bar :title="activeTitle"/>
      <router-view></router-view>
      <van-tabbar route>
        <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeTitle: this.$route.meta.title,
    }
  },
  watch: {
    //监听路由切换更换标题
    $route(){
      return this.activeTitle = this.$route.meta.title
    }
  }
}
</script>

<style scoped>
    .main {
    padding-bottom: 50px;
    }
</style>