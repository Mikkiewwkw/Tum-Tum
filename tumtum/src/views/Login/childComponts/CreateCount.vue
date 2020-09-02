<template>
  <div class="start_menu">
    <div class="header-content">
	  <img :src="picture[0].url" />
    </div>
    <div class="blob">
    		<img :src="picture[1].url"/>
    </div>
    <div class="inputs">
		<input class="input1" type="text" name="first_name" id="first_name" v-model="accountInfo.fn"  placeholder="FIRST NAME" />
		<input class="input1" type="text" name="last_name" id="last_name" v-model="accountInfo.ln"  placeholder="LAST NAME" />
		<input class="input1" type="text" name="email" id="email" v-model="accountInfo.email" placeholder="EMAIL ADDRESS" />
		<input class="input1" type="text" name="pswd" id="pswd" v-model="accountInfo.pwd" placeholder="PASSWORD(8+CHARACTER)"/>
	</div>
	<div class="agreements">
		BY CONTINUING, YOU AGREE TO TUMTUM'S
		<span @click="terms_and_conditions" id="t&c" style="color:#7C8D5F; font-size:9px">
			TERMS AND CONDITIONS
		</span> AND <span @click="PRIVACY_POLICY" id="PP" style="color:#7C8D5F; font-size:9px">
		PRIVACY POLICY
		</span>
	</div>
	<div class="begin_button" @click="beginClick">
		<img :src="picture[2].url">
	</div>
	<toast :isShow="isShow">
	  <toast-item class="toast-item" slot="the-toast" @toastback="toastback"></toast-item>
	</toast>
  </div>
</template>

<script>
	import { NewAccount } from "../../../common/utils";
	import Toast from "@/components/common/toast/Toast";
	import ToastItem from "./toastItem/ToastItem";

	export default {
		name: "CreateCount",
		components: {
			Toast,
			ToastItem
		},
		data() {
			return {
				picture: [
					{ pid: 0, url: require("../../../assets/svg/byj/Begin_Your_Journey.svg") },
					{ pid: 2, url: require("../../../assets/svg/cute_blob/cute_blob.svg") },
					{ pid: 3, url: require("../../../assets/svg/LoginWelcome/begin_button.svg") },
				],
				accountInfo: {
					fn: "",
					ln: "",
					email: "",
					pwd: "",
				},
				isShow: false,
				isBack: false,
			}
		},
		methods: {
			terms_and_conditions() {
				console.log("terms_and_conditions");
			},
			PRIVACY_POLICY() {
				console.log("PRIVACY_POLICY");
			},
			beginClick() {
				let account = new NewAccount(this.accountInfo);
				this.isShow = true;
			},
			toastback() {
				this.isBack = true;
				this.isShow = false;
				console.log("GO BACK !!!");
			}

		}
	}
</script>

<style scoped>
  .header-content {
	  position: absolute;
	  width: 299px;
	  height: 109px;
	  left: 32px;
	  top: 55px;
  }
  .blob{
  	position: absolute;
	width: 59px;
	height: 78px;
	left: 292px;
	top: 90px;
	margin-bottom: 20px;

  }
  .inputs{
  	display: flex;
	flex-direction: column;
    align-items: left;
    margin:50px;
  	
  }
  input::placeholder{
  	font-family: Bakso Sapi;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 30px;
	text-decoration-line: underline;
	text-indent: 10px;

	color: #848484;
  }
  #first_name{
	  position: absolute;
	  width: 332px;
	  height: 41px;
	  left: 21px;
	  top: 220px;

	  background: #F4F4F4;
	  border-radius: 10px;
	  border-width: 0;
	
  }
  #last_name {
	  position: absolute;
	  width: 332px;
	  height: 39px;
	  left: 21px;
	  top: 288px;

	  background: #F4F4F4;
	  border-radius: 10px;
	  border-width: 0;
  }
  #email {
	  position: absolute;
	  width: 332px;
	  height: 39px;
	  left: 21px;
	  top: 345px;

	  background: #F4F4F4;
	  border-radius: 10px;
	  border-width: 0;
  }
  #pswd {
	  position: absolute;
	  width: 332px;
	  height: 39px;
	  left: 21px;
	  top: 406px;

	  background: #F4F4F4;
	  border-radius: 10px;
	  border-width: 0;
  }
  .agreements{
	  position: absolute;
	  width: 230px;
	  height: 26px;
	  left: 80px;
	  top: 479px;

	  font-family: Bakso Sapi;
	  font-style: normal;
	  font-weight: normal;
	  font-size: 10px;
	  line-height: 12px;

	  color: #4A4A4A;
  }
  .begin_button {
	  position: absolute;
	  width: 110px;
	  height: 110px;
	  left: 127px;
	  top: 533px;
  }
  .input1 {
	width: 332px;
	height: 41px;
	left: 21px;
	top: 220px;
	background: #F4F4F4;
	border-radius: 10px;
	margin-bottom:20px;
  }

  .toast-item {
	  position: absolute;
	  left: 8%;
	  top: 25%;
  }

</style>