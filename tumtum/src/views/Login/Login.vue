<template>
  <div class="login">
    <div class="header-content">
      <img src="../../assets/svg/LoginWelcome/Welcome.svg" />
    </div>
    <div class="out-side-vector">
      <img src="../../assets/svg/slump/outer-vector.svg" />
    </div>
    <div class="middle-vector">
      <img src="../../assets/svg/slump/middle-Vector.svg" />
    </div>
    <div class="inner-vector">
      <img src="../../assets/svg/slump/inner-Vector.svg" />
    </div>
    <div class="slump-content">A SPACE OF YOUR OWN</div>
  <!--    <div class="create-count-btn" @click="btnClick">CREATE ACCOUNT</div>-->
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    btnClick() {
      alert("h");
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/public.css";
.header-content {
  position: absolute;
  width: 91%;
  height: auto;
  left: 9%;
  top: 15%;
}
.t-header {
  font-size: 50px;
  color: green;
}
.out-side-vector {
  position: absolute;
  width: 291px;
  height: 246px;
  left: 33px;
  top: 275px;
  z-index: 1;
}
.middle-vector {
  position: absolute;
  width: 237px;
  height: 200px;
  left: 58px;
  top: 292px;
  z-index: 2;
}
.inner-vector {
  position: absolute;
  width: 188px;
  height: 164px;
  left: 84px;
  top: 306px;
  z-index: 3;
}
.slump-content {
  position: absolute;
  width: 151px;
  height: 66px;
  left: 109px;
  top: 344px;

  font-family: "Bakso Sapi";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;

  color: #533f22;

  z-index: 4;
}
.create-count-btn {
  position: absolute;
  width: 246px;
  height: 95px;
  left: 56px;
  top: 574px;

  background: #eabfa7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 95px;
  text-align: center;
  text-transform: uppercase;

  color: #4a4a4a;
}
</style>