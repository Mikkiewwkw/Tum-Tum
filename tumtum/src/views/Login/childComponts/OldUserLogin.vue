<template>
<div class="login_page">
    <div class="header-content">
        <span style="color: #6A593E;">WELCOME BACK</span>
        <span style="color: #9dab86;">:)</span>
    </div>
    <form class="inputs">
        <div class="form-group">
            <input class="input" type="text" name="email" v-model="accountInfo.email" placeholder="EMAIL/USERNAME/PHONE NUMBER" />
        </div>
        <div class="form-group">
            <input class="input" type="text" name="pwd" v-model="accountInfo.pwd" placeholder="PASSWORD" />
        </div>
    </form>
    <div class="forget_password" @click="forgotPassword">
        FORGET PASSWORD?
    </div>
    <button class="login_button">LOG iN</button>
    <div class="or">
        OR
    </div>
    <div class="third_party_sign_in row">
        <p class="" id="sign_in_with_text">SIGN IN WITH</p>
        <div class="link_group">
            <div id="wechat" class="link-group-item wechat-icon">
                <img :src="svg.wechat.url" alt="wechat" v-on:click={wechatLogin}>
            </div>
            <div id="weibo" class="link-group-item weibo-icon">
                <img :src="svg.weibo.url" alt="weibo" v-on:click={weiboLogin}>
            </div>
            <div id="facebook" class="link-group-item facebook-icon">
                <img :src="svg.facebook.url" alt="facebook" v-on:click={facebookLogin}>
            </div>
            <div id="instagram" class="link-group-item instagram-icon">
                <img :src="svg.ins.url" alt="instagram" v-on:click={insLogin}>
            </div>
        </div>
    </div>
    <div class="back" v-on:click="backToCreateAcct">BACK TO CREATE ACCOUNT</div>
</div>
</template>

<script>
import {
    NewAccount
} from "../../../common/utils";
export default {
    name: "OldUserLogin",
    data() {
        return {
            svg: {
                wechat: {
                    url: require("../../../assets/svg/LoginWelcome/WeChat.svg")
                },
                weibo: {
                    url: require("../../../assets/svg/LoginWelcome/Weibo.svg")
                },
                facebook: {
                    url: require("../../../assets/svg/LoginWelcome/Facebook.svg")
                },
                ins: {
                    url: require("../../../assets/svg/LoginWelcome/ins.svg")
                }
            },
            accountInfo: {
                fn: "",
                ln: "",
                email: "",
                pwd: "",
            },
        }
    },
    methods: {
        loginClick: function () {
            console.log("You clicked log in");
        },
        forgotPassword: function () {
            this.$router.push("/forgotPassword");
        },
        wechatLogin: function () {
            console.log("wechat log in");
        },
        weiboLogin: function () {

        },
        facebookLogin: function () {

        },
        insLogin: function () {

        },
        backToCreateAcct: function () {
            this.$router.go(-1);
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

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 58px;
}

.inputs {
    position: absolute;
}

.input {
    position: relative;
    width: 332px;
    height: 65px;
    left: 23px;
    top: 208px;

    background: #F4F4F4;
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

.forget_password {
    position: absolute;
    width: 154px;
    height: 19px;
    left: 30px;
    top: 383px;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #7C8D5F;
}

.login_button {
    position: absolute;
    width: 238px;
    height: 55px;
    left: 72px;
    top: 429px;

    background: #EABFA7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border-style: none;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #4A4A4A;
}

#login_background {
    z-index: 1;
}

#login_text {
    z-index: 2;
    position: absolute;
    top: 430px;
    left: 157px;
    text-align: center
}

.or {
    position: absolute;
    width: 24px;
    height: 26px;
    left: 176px;
    top: 502px;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #6A593E;
}

.third_party_sign_in {
    position: absolute;
}

#sign_in_with_text {
    position: relative;
    width: 100px;
    height: 17px;
    left: 40px;
    top: 540px;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #6A593E;

}

.link_group {
    position: relative;
    width: 37.24px;
    height: 37.24px;
    left: 50px;
    top: 529px;
    display: flex;
}

.link-group-item {
    margin-left: 10px;
}

.back {
    position: absolute;
    width: 206px;
    height: 19px;
    left: 85px;
    top: 732px;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #E08F62;
}
</style>
