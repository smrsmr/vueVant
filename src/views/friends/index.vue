<template>
  <div>
    <van-index-bar>
      <div v-for="(items, index) in list" :key="index">
        <van-index-anchor :index="items.index" />
        <van-cell
          v-for="(item, index) in items.children"
          :key="index"
          :title="item.main + '' + index"
          @click="Change(items, index)"
        />
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import { IndexBar, IndexAnchor, Cell } from "vant";
export default {
  name: "friends",
  components: {
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell
  },
  data() {
    return {
      list: [
        {
          index: "A",
          children: [
            { main: "我是联系人A" },
            { main: "我是联系人A" },
            { main: "我是联系人A" },
            { main: "我是联系人A" },
            { main: "我是联系人A" },
            { main: "我是联系人A" },
            { main: "我是联系人A" },
            { main: "我是联系人A" }
          ]
        },
        {
          index: "B",
          children: [
            { main: "我是联系人B" },
            { main: "我是联系人B" },
            { main: "我是联系人B" },
            { main: "我是联系人B" },
            { main: "我是联系人B" },
            { main: "我是联系人B" },
            { main: "我是联系人B" },
            { main: "我是联系人B" }
          ]
        },
        {
          index: "C",
          children: [
            { main: "我是联系人C" },
            { main: "我是联系人C" },
            { main: "我是联系人C" },
            { main: "我是联系人C" },
            { main: "我是联系人C" },
            { main: "我是联系人C" },
            { main: "我是联系人C" },
            { main: "我是联系人C" }
          ]
        },
        {
          index: "D",
          children: [
            { main: "我是联系人D" },
            { main: "我是联系人D" },
            { main: "我是联系人D" },
            { main: "我是联系人D" },
            { main: "我是联系人D" },
            { main: "我是联系人D" },
            { main: "我是联系人D" },
            { main: "我是联系人D" }
          ]
        },
        {
          index: "E",
          children: [
            { main: "我是联系人E" },
            { main: "我是联系人E" },
            { main: "我是联系人E" },
            { main: "我是联系人E" },
            { main: "我是联系人E" },
            { main: "我是联系人E" },
            { main: "我是联系人E" },
            { main: "我是联系人E" }
          ]
        }
      ]
    };
  },
  methods: {
    Change(items, index) {
      console.log(items, index);
      this.$router.push({ path: "/setting", query: { id: items.index } });
    }
  }
};
</script>
<style lang="less" scoped></style>
