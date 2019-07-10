<template>
  <div class="Tabbar">
    <van-tabbar v-model="active" router>
      <van-tabbar-item icon="home-o" to="/index">主页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friends">联系人</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/setting">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "Tabbar",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    index(path) {
      switch (path) {
        case "/search":
          this.active = 1;
          break;
        case "/friends":
          this.active = 2;
          break;
        case "/setting":
          this.active = 3;
          break;
        default:
          this.active = 0;
      }
    }
  },
  mounted() {
    this.index(window.location.pathname);
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(val, old) {
      // 当前路由
      this.index(val.path);
      // 上一个路由
      // console.log(old);
    }
  }
};
</script>
<style lang="less"></style>
