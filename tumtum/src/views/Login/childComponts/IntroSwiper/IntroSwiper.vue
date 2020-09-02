<template>
  <div>
    <swiper :interval="30000000">
      <swiper-item v-for="(item, index) in imgList" :key="index">
        <div class="content">
          {{item.content}}
          <img :src="item.url" :alt="index"  class="swiper-img"/>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";
import { introText } from "../../../../assets/text/test.js";

export default {
  name: "IntroSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      imgList: [
        {pic: 0, url: require("../../../../assets/img/intro/Letter_&_Flowers.png"), content: introText.pic1},
        {pic: 1, url: require("../../../../assets/img/intro/EmotionBottle.png"), content: introText.pic2},
        {pic: 2, url: require("../../../../assets/img/intro/PrettyMushroom.png"), content: introText.pic3},
      ],
    };
  },
};
</script>

<style scoped>
  .swiper-img {
    width: 60px;
    height: 250px;
  }
  .content {
    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;
  }
</style>
