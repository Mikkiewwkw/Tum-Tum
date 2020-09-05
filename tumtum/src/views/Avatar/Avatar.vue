<template>
  <div class="avatar" @touchmove.prevent>
    <div class="header-content">
      MEET YOUR BUDDY
    </div>
    <avatar-swiper class="the-swiper" :buddies="buddies" @active="theFunction"></avatar-swiper>
    <div class="show">
      <img :src="buddies[theIndex].url">
    </div>
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
    return {
      buddies: [
       {
          index: 0,
          des: "bear",
          url: require("../../assets/img/buddies/bear.png"),
        },
        {
          index: 1,
          des: "deer",
          url: require("../../assets/img/buddies/deer.png"),
        },
        {
          index: 2,
          des: "fox",
          url: require("../../assets/img/buddies/fox.png"),
        },
        {
          index: 3,
          des: "hedgehog",
          url: require("../../assets/img/buddies/hedgehog.png"),
        },
        {
          index: 4,
          des: "owl",
          url: require("../../assets/img/buddies/owl.png"),
        },
      ],
      theIndex: 1,
    };
  },
  methods: {
    theFunction(index) {
      this.theIndex = index;
      console.log(this.buddies[this.theIndex].url);
    }
  }
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
    top: 30%;
    margin: 0;
    width: 100%;
    height: 300px;
  }
  .show {
    position: absolute;
    width: 135px;
    height: 135px;
    left: 135px;
    top: 45%;

  }
  .show img {
    width: 135px;
    height: 135px;
  }
</style>
