<template>
  <div class="start_menu">
    <div class="header-content">
      <div style="color: #6a593e">BEGIN YOUR</div>
      <div style="color: #9dab86">JOURNEY</div>
    </div>
    <div class="blob">
      <img :src="picture[0].url" />
    </div>
    <div>
      <input
        class="inputs"
        type="text"
        id="first_name"
        v-model="accountInfo.fn"
        placeholder="FIRST NAME"
      />
      <input
        class="inputs"
        type="text"
        id="last_name"
        v-model="accountInfo.ln"
        placeholder="LAST NAME"
      />
      <input
        class="inputs"
        type="email"
        id="email"
        v-model="accountInfo.email"
        placeholder="EMAIL ADDRESS"
      />
      <input
        class="inputs"
        type="password"
        id="pswd"
        v-model="accountInfo.pwd"
        placeholder="PASSWORD(8+CHARACTER)"
      />
    </div>
    <div class="login">
      ALREADY HAVE AN ACCOUNT?
      <span v-on:click="login" style="color: #e08f62">LOGIN</span>
    </div>
    <div class="agreements">
      <div>BY CONTINUING, YOU AGREE TO TUMTUM'S</div>
      <div>
        <span @click="terms_and_conditions" id="t&c" style="color: #9dab86">
          TERMS & CONDITIONS
        </span>
        AND
        <span @click="PRIVACY_POLICY" id="PP" style="color: #9dab86">
          PRIVACY POLICY
        </span>
      </div>
    </div>
    <button class="begin_button" @click="beginClick">BEGIN</button>
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      class="toast"
      data-autohide="false"
    >
      <div class="toast-header">
        <strong class="mr-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="ml-2 mb-1 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
  </div>
</template>

<script>
import { NewAccount } from "../../../common/utils";

export default {
  name: "CreateCount",
  data() {
    return {
      picture: [
        { pid: 0, url: require("../../../assets/svg/cute_blob/cute_blob.svg") },
      ],
      accountInfo: {
        fn: "",
        ln: "",
        email: "",
        pwd: "",
      },
    };
  },
  methods: {
    login() {
      this.$router.push("/userlogin");
    },
    terms_and_conditions() {
      console.log("terms_and_conditions");
    },
    PRIVACY_POLICY() {
      console.log("PRIVACY_POLICY");
    },
    beginClick() {
      console.log("beginClick");
      let account = new NewAccount(this.accountInfo);
      $(".toast").toast("show");
    },
  },
};
</script>

<style scoped>
.header-content {
  position: absolute;
  width: 299px;
  height: 109px;
  left: 35px;
  top: 95px;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 58px;
}
.blob {
  position: absolute;
  width: 59px;
  height: 78px;
  left: 295px;
  top: 147px;
}

input::placeholder {
  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  text-decoration-line: underline;
  text-indent: 10px;

  color: #848484;
}
#first_name {
  top: 255px;
}
#last_name {
  top: 321px;
}
#email {
  top: 385px;
}
#pswd {
  top: 451px;
}
.agreements {
  position: absolute;
  width: 332px;
  height: 26px;
  left: 22px;
  top: 573px;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: #4a4a4a;
}
.begin_button {
  position: absolute;
  width: 110px;
  height: 110px;
  left: 130px;
  top: 637px;

  background: #eabfa7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  border-style: none;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #4a4a4a;
}
.inputs {
  position: absolute;
  width: 332px;
  height: 41px;
  left: 24px;

  background: #f4f4f4;
  border-radius: 10px;
  border-style: none;
}

.login {
  position: absolute;
  width: 227px;
  height: 33px;
  left: 33px;
  top: 507px;

  font-family: Bakso Sapi;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #4a4a4a;
}

/* .toast-item {
  position: absolute;
  left: 8%;
  top: 25%;
} */
</style>