<template>
  <div>
    <van-swipe
      :autoplay="3000"
      indicator-color="white"
      :height="sliderValue"
      @change="onChange"
    >
      <van-swipe-item
        ><img src="../../assets/images/img1.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/images/img2.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/images/img3.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/images/img2.jpg" alt=""
      /></van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
    </van-swipe>
    <van-slider v-model="sliderValue" active-color="#f44" :min="200" :max="400">
      <div slot="button" class="custom-button">
        {{ sliderValue }}
      </div>
    </van-slider>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Slider, Image } from "vant";
export default {
  name: "HOME",
  components: {
    [Swipe.name]: Swipe,
    [Image.name]: Image,
    [SwipeItem.name]: SwipeItem,
    [Slider.name]: Slider
  },
  data() {
    return {
      current: 0,
      sliderValue: 200
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
<style lang="less">
.van-swipe {
  position: relative;
  .van-swipe__track {
    .van-swipe-item {
      background-color: coral;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .custom-indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
    font-size: 16px;
  }
}
.van-slider {
  margin: 20px 15px;
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #f44;
    border-radius: 100px;
  }
}
</style>
