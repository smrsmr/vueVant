<template>
  <div id="app">
    <router-view />
    <tabbar></tabbar>
  </div>
</template>
<script>
import Tabbar from "./components/Tabbar";
export default {
  components: {
    Tabbar
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  color: #2c3e50;
}
</style>
