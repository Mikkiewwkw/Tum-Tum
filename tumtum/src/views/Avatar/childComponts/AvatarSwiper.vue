<template>
  <div>
    <swiper class="swipe" :options="swiperOption" ref="theswipe">
      <swiper-slide
        class="siper-item"
        v-for="(item, index) in buddies"
        :key="index"
        ref="theimg"

      >
        <div v-if="theIndex != item.index">
          <img :src="item.url"/>
        </div>

        <div v-else class="set-div"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import {debouncs} from "../../../common/utils";
// import { Carousel3d, Slide } from "vue-carousel-3d";
import "swiper/swiper-bundle.css";

export default {
  name: "AvatarSwiper",
  components: {
    Swiper,
    SwiperSlide,
    // Carousel3d,
    // Slide,
  },
  props: {
    buddies: {
      type: Array,
      default: []
    }
  },
  data() {
    const vue = this;
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 18,
        freeMode: true,
        loop: true,
        speed: 2000,
        on: {
          slideChange: debouncs(function() {
            console.log(this);
            if (this.realIndex + 1 == 5) {
              vue.theIndex = 0;
            } else {
              vue.theIndex = this.realIndex + 1;
            }
            vue.$emit("active", vue.theIndex);

          }, 500)
        }
      },
      theIndex: 1,
    };
  },
  methods: {
    theFunction(index) {
      console.log(index);
    }
  }
};
</script>

<style scoped>
  .swipe {
    position: relative;
    width: 100%;
  }
  .siper-item img {
    width: 130px;
    height: 130px;
  }
  .active img {
    opacity:0.0;
  }
  /*.set-div {*/
  /*  width: 130px;*/
  /*  height: 130px;*/
  /*  background: red;*/
  /*}*/
</style>
