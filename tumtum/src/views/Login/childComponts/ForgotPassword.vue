<template>
  <div class="login_page">
    <div class="header-content">
      <span style="color: #6a593e;">FORGOT PASSWORD</span>
      <span style="color: #9dab86;">?</span>
    </div>
    <div>
      <span class="username" v-bind:style="isPhone?'color: #6a593e;':'color: #9dab86'">USERNAME</span>
      <span class="phone" v-bind:style="isPhone?'color: #9dab86;':'color: #6a593e'">PHONE</span>
    </div>
    <div>
      <span
        class="username_line"
        v-bind:style="isPhone?'border: 1px solid #6a593e;':'border: 1px solid #9dab86;'"
      ></span>
      <span
        class="phone_line"
        v-bind:style="isPhone?'border: 1px solid #9dab86;':'border: 1px solid #6a593e;'"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      isPhone: false,
      placeholder: "USERNAME OR EMAIL",
      buttonText: "SEND EMAIL",
      emailOrText: "",
    };
  },
  methods: {
    useUsername: function () {
      this.isPhone = false;
      this.placeholder = "USERNAME OR EMAIL";
      this.buttonText = "SEND EMAIL";
    },
    usePhone: function () {
      this.isPhone = true;
      this.placeholder = "PHONE NUMBER";
      this.buttonText = "SEND TEXT";
    },
    needHelp: function () {
      console.log("need more help");
    },
    sendEmailOrText: function () {
      console.log(emailOrText);
    },
    backToLogin: function () {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.header-content {
  position: absolute;
  width: 322px;
  height: 125px;
  left: 30px;
  top: 60px;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 58px;
}

.username {
  position: absolute;
  width: 93px;
  height: 19px;
  left: 58px;
  top: 220px;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
}

.username_line {
  position: absolute;
  width: 100px;
  height: 0px;
  left: 55px;
  top: 243px;
}

.phone_line {
  position: absolute;
  width: 100px;
  height: 0px;
  left: 220px;
  top: 243px;
}

.phone {
  position: absolute;
  width: 93px;
  height: 19px;
  left: 224px;
  top: 220px;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
}

.input {
  position: absolute;
  width: 332px;
  height: 65px;
  left: 19px;
  top: 278px;

  background: #f4f4f4;
  border-radius: 10px;
}

input::placeholder {
  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;

  color: #848484;
}

.login_button {
  position: absolute;
  width: 110px;
  height: 110px;
  left: 72px;
  top: 410px;
}

#login_background {
  z-index: 1;
}

#login_text {
  z-index: 2;
  position: absolute;
  top: 430px;
  left: 157px;
  text-align: center;
}
</style>
