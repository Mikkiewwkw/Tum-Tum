<template>
  <div>
    <!-- <swiper class="swipe" :options="swiperOption">
      <swiper-slide
        class="siper-item"
        v-for="(item, index) in buddies"
        :key="index"
      >
        <img :src="item.url" />
      </swiper-slide>
    </swiper> -->
    <carousel-3d class="swipe" :width="300" :height="300" :border="0">
      <slide
        class="siper-item"
        v-for="(item, i) in buddies"
        :key="i"
        :index="item.index"
      >
        <img :src="item.url" ref="theimg"
      /></slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Carousel3d, Slide } from "vue-carousel-3d";
import "swiper/swiper-bundle.css";
export default {
  name: "AvatarSwiper",
  components: {
    Swiper,
    SwiperSlide,
    Carousel3d,
    Slide,
  },
  data() {
    return {
      buddies: {
        bear: {
          index: 0,
          url: require("../../../assets/img/buddies/bear.png"),
        },
        deer: {
          index: 1,
          url: require("../../../assets/img/buddies/deer.png"),
        },
        fox: {
          index: 2,
          url: require("../../../assets/img/buddies/fox.png"),
        },
        hedgehog: {
          index: 3,
          url: require("../../../assets/img/buddies/hedgehog.png"),
        },
        owl: {
          index: 4,
          url: require("../../../assets/img/buddies/owl.png"),
        },
      },
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 18,
        freeMode: true,
        loop: true,
      },
      position: 0,
    };
  },
  mounted() {
    this.position = this.$refs.theimg;
    console.log(this.position);
  },
};
</script>

<style scoped lang="scss">
.swiper {
  position: relative;
  width: 100%;
}
.siper-item img {
  width: 200px;
  height: 200px;
  padding: 18%;
}

.carousel-3d {
  width: 100%;
}

.carousel-3d-slide {
  background-color: transparent;
}
</style>
