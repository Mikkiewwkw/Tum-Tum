<template>
  <div class="login_page">
    <div class="header-content">
      <span style="color: #6a593e;">FORGOT PASSWORD</span>
      <span style="color: #9dab86;">?</span>
    </div>
    <span v-on:click="useUsername">
      <div class="username" v-bind:style="isPhone?'color: #6a593e;':'color: #9dab86'">USERNAME</div>
      <div
        class="username_line"
        v-bind:style="isPhone?'border: 1px solid #6a593e;':'border: 1px solid #9dab86;'"
      ></div>
    </span>
    <span v-on:click="usePhone">
      <div class="phone" v-bind:style="isPhone?'color: #9dab86;':'color: #6a593e'">PHONE</div>
      <div
        class="phone_line"
        v-bind:style="isPhone?'border: 1px solid #9dab86;':'border: 1px solid #6a593e;'"
      ></div>
    </span>
    <input class="input" type="text" v-model="input" v-bind:placeholder="placeholder" />
    <button class="send_button" v-on:click="sendEmailOrText">SEND {{emailOrText}}</button>
    <div class="help" v-on:click="needHelp">NEED MORE HELP?</div>
    <div class="back" v-on:click="backToLogin">BACK TO LOGIN</div>
    <template v-if="isPopup">
      <div class="popup">
        <img
          src="../../../assets/svg/LoginWelcome/back14.svg"
          class="back_icon"
          v-on:click="closePopup"
        />
        <div class="message">
          <div>AN {{emailOrText}} HAS BEEN SENT TO YOU</div>
          <div>(THE LINK WILL EXPIRE IN 1 HOUR)</div>
        </div>
        <div
          class="resend"
          v-on:click="sendEmailOrText"
          v-bind:style="canSend?'color: #e08f62;':'color: #eabfa7'"
        >{{canSend ? "RESEND NOW" : "RESEND ("+times+"S)"}}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      isPhone: false,
      placeholder: "USERNAME OR EMAIL",
      emailOrText: "EMAIL",
      input: "",
      isPopup: false,
      times: 60,
      canSend: true,
    };
  },
  methods: {
    useUsername: function () {
      this.isPhone = false;
      this.placeholder = "USERNAME OR EMAIL";
      this.emailOrText = "EMAIL";
    },
    usePhone: function () {
      this.isPhone = true;
      this.placeholder = "PHONE NUMBER";
      this.emailOrText = "TEXT";
    },
    needHelp: function () {
      console.log("need more help");
    },
    sendEmailOrText: function () {
      this.isPopup = true;
      if (this.canSend) {
        this.times = 60;
        this.canSend = false;
        this.timer = setInterval(() => {
          this.times--;
          if (this.times === 0) {
            this.show = true;
            clearInterval(this.timer);
            this.canSend = true;
          }
        }, 1000);
        console.log(this.input);
      }
    },
    closePopup: function () {
      this.isPopup = false;
    },
    backToLogin: function () {
      this.$router.go(-1);
    },
    resend: function () {},
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

.phone_line {
  position: absolute;
  width: 100px;
  height: 0px;
  left: 220px;
  top: 243px;
}

.input {
  position: absolute;
  width: 332px;
  height: 65px;
  left: 19px;
  top: 278px;

  background: #f4f4f4;
  border-radius: 10px;
  border-style: none;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-indent: 15px;

  color: #848484;
}

.input::placeholder {
  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;
  text-indent: 15px;

  color: #848484;
}

.send_button {
  position: absolute;
  width: 238px;
  height: 55px;
  left: 59px;
  top: 387px;

  background: #eabfa7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border-style: none;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #4a4a4a;
}

.help {
  position: absolute;
  width: 138px;
  height: 19px;
  left: 109px;
  top: 487px;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #9dab86;
}

.back {
  position: absolute;
  width: 118px;
  height: 19px;
  left: 125px;
  top: 732px;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #e08f62;
}

.popup {
  position: absolute;
  width: 85.3%;
  height: 39.4%;
  left: 7.35%;
  top: 30.3%;

  background: #fffbf2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}

.back_icon {
  position: relative;
  left: 3.75%;
  right: 81.25%;
  top: 4.69%;
  bottom: 80.62%;
}

.message {
  position: relative;
  width: 84%;
  height: 20.3%;
  left: 8%;
  top: 15%;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 200%;
  text-align: center;

  color: #4a4a4a;
}

.resend {
  position: relative;
  width: 37.5%;
  height: 7.5%;
  left: 31.5%;
  top: 35%;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}
</style>
