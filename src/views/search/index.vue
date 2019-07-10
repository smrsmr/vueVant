<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
import { Collapse, CollapseItem, Search } from "vant";
export default {
  name: "serach",
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Search.name]: Search
  },
  data() {
    return {
      activeName: "1",
      value: ""
    };
  }
};
</script>
<style lang="less" scoped></style>
