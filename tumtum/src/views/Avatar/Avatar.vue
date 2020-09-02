<template>
  <div class="avatar" @touchmove.prevent>
    <div class="header-content">
      MEET YOUR BUDDY
    </div>
    <avatar-swiper class="the-swiper"></avatar-swiper>
  </div>
</template>

<script>
import AvatarSwiper from "./childComponts/AvatarSwiper";
export default {
  name: "Avatar",
  components: {
    AvatarSwiper,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.header-content {
  position: absolute;
  width: 323px;
  height: 30px;
  left: 26px;
  top: 126px;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;

  color: #533f22;
}

.the-swiper {
  position: fixed;
  top: 20%;
  width: 100%;
  height: 300px;
}
</style>
