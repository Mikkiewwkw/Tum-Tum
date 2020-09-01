<template>
  <div class="login">
    <div class="header-content">
      WELCOME <span class="inner">TO <span class="ininner">TUMTUM</span></span>
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
    <div class="create-count-btn" @click="btnClick">CREATE ACCOUNT</div>
    <div class="bottom-content">
      ALREDAY HAVE AN ACCOUNT? <div @click="userLogin" id="bottom-login">LOG IN</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    btnClick() {
      this.$router.push("/createcount");
    },
    userLogin() {
      this.$router.push("/userlogin");
    }
  },
};
</script>

<style scoped>
@import "../../assets/css/public.css";

  .header-content {
    position: absolute;
    width: 300px;
    height: 132px;
    left: 10%;
    top: 12%;
    color: #533F22;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 77px;
    color: #533F22;
  }
  .inner {
    font-size: 47px;
  }
  .ininner {
    color: #7C8D5F;
  }
  .out-side-vector {
    position: absolute;
    width: 291px;
    height: 246px;
    /*left: 33px;*/
    left: 10%;
    top: 275px;
    z-index: 1;
  }
  .middle-vector {
    position: absolute;
    width: 237px;
    height: 200px;
    left: 17% ;
    top: 292px;
    z-index: 2;
  }
  .inner-vector {
    position: absolute;
    width: 188px;
    height: 164px;
    left: 24%;
    top: 306px;
    z-index: 3;
  }
  .slump-content {
    position: absolute;
    width: 151px;
    height: 66px;
    left: 33%;
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
  .bottom-content {
    position: absolute;
    width: 246px;
    height: 33px;
    left: 65px;
    top: 688px;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #4A4A4A;
  }

  #bottom-login {
  color: #7C8D5F;
  }
</style>