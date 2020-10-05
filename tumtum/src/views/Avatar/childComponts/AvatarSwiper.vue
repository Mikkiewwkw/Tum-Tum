<template>
  <div>
    <swiper class="swipe" :options="swiperOption" ref="theswipe">
      <swiper-slide
        class="siper-item"
        v-for="(item, index) in buddies"
        :key="index"
        ref="theimg"

      >
        <div :class="{active: theIndex == item.index}">
          <transition>
            <img :src="item.url"/>
          </transition>
        </div>

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
        loopedSlides :5,
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
  .siper-item {
    height: 400px;
  }
  .siper-item img {
    width: 130px;
    height: 130px;

  }
  .active {
    position: relative;
    top: 30%;
  }
</style>
