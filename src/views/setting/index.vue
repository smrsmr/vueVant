<template>
  <div>
    <baidu-map
      class="bm-view"
      ak="i3LhAi8lycGAF32vPg1AiqGmTGeLZ9eA"
      :center="center"
      :zoom="zoom"
      @ready="handler"
    >
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>
    </baidu-map>
  </div>
</template>
<script>
import { BaiduMap, BmGeolocation } from "vue-baidu-map";
export default {
  name: "setting",
  components: {
    BaiduMap,
    BmGeolocation
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 15
    };
  },
  methods: {
    handler({ BMap, map }) {
      /* eslint-disable */
      const _this = this;
      console.log(BMap, map);
      let geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            let point = r.point.lng + "," + r.point.lat;
            console.log(point);
            _this.center.lng = r.point.lng;
            _this.center.lat = r.point.lat;
          } else {
            console.log("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
    }
  }
};
</script>
<style lang="less" scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
