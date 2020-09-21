<template>
<div class="login_page">
    <div class="header-content">
        <img :src="pictures.welcomeBack.url" />
    </div>
    <div class="inputs">
        <input class="input1" type="text" name="email" id="email" v-model="accountInfo.email" placeholder="EMAIL/USERNAME/PHONE NUMBER" />
        <input class="input1" type="text" name="pwd" id="pwd" v-model="accountInfo.pwd" placeholder="PASSWORD" />
    </div>
    <div class="forget_password" @click="forgotPassword">
        FORGET PASSWORD?
    </div>
    <div class="login_button" @click="loginClick">
        <img :src="pictures.loginBackground.url" id="login_background">
    </div>
    <img :src="pictures.login.url" id="login_text">

    <div class="or">
        OR
    </div>
    <div class="third_party_sign_in row">
        <p class="col-4" id="sign_in_with_text">SIGN IN WITH</p>
        <div class="link-group col-8">
            <div id="wechat" class="link-group-item col-3 wechat-icon">
                <img :src="pictures.svg.wechat.url" id="wechat-v">
                <img :src="pictures.wechatBackground.url" id="wechat-bg">
            </div>
            <div id="weibo" class="link-group-item col-3 weibo-icon">
                <img :src="pictures.svg.weibo.url" id="weibo-v">
                <img :src="pictures.weiboBackground.url" id="weibo-bg">
            </div>
            <div id="facebook" class="link-group-item col-3 facebook-icon">
                <img :src="pictures.svg.facebook.url" id="facebook-v">
                <img :src="pictures.wechatBackground.url" id="facebook-bg">
            </div>
            <div id="instagram" class="link-group-item col-3 instagram-icon">
                <img :src="pictures.svg.instagram.url" id="instagram-v">
                <img :src="pictures.weiboBackground.url" id="instagram-bg">
            </div>
        </div>
    </div>
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
            pictures: {
                welcomeBack: {
                    url: require("../../../assets/svg/LoginWelcome/Welcome_back.svg")
                },
                loginBackground: {
                    url: require("../../../assets/svg/LoginWelcome/Rectangle 5.svg")
                },
                login: {
                    url: require("../../../assets/svg/LoginWelcome/Log in.svg")
                },
                wechatBackground: {
                    url: require("../../../assets/svg/LoginWelcome/Ellipse 7.svg")
                },
                weiboBackground: {
                    url: require("../../../assets/svg/LoginWelcome/Ellipse 6.svg")
                },
                svg: {
                    wechat: {
                        url: require("../../../assets/svg/LoginWelcome/Wechat_login.svg")
                    },
                    weibo: {
                        url: require("../../../assets/svg/LoginWelcome/Weibo_login.svg")
                    },
                    facebook: {
                        url: require("../../../assets/svg/LoginWelcome/Facebook_login.svg")
                    },
                    instagram: {
                        url: require("../../../assets/svg/LoginWelcome/Instagram_login.svg")
                    }
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
        forgotPassword: function(){
            this.$router.push("/forgotPassword");
        },
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

#email {
    position: absolute;
    width: 332px;
    height: 41px;
    left: 21px;
    top: 220px;
    border-radius: 10px;
    margin-bottom: 20px;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;

    text-decoration-line: underline;

    color: #848484;
}

#pwd {
    position: absolute;
    width: 332px;
    height: 41px;
    left: 21px;
    top: 288px;
    border-radius: 10px;
    margin-bottom: 20px;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;

    text-decoration-line: underline;
    color: #848484;
}

.forget_password {
    position: absolute;
    width: 154px;
    height: 19px;
    left: 30px;
    top: 355px;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #7C8D5F;
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
    text-align: center
}

/* .input1 {
    position: absolute;
    width: 332px;
    height: 65px;
    left: 23px;
    top: 208px;

    background: #F4F4F4;
    border-radius: 10px;
    margin-bottom: 20px;
} */

.or {
    position: absolute;
    width: 24px;
    height: 26px;
    left: 176px;
    top: 490px;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #6A593E;
}

.third_party_sign_in {
    position: absolute;
    width: 100px;
    height: 17px;
    left: 30px;
    top: 525px;
}

#sign_in_with_text {
    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

}

.link-group {
    position: absolute;
    width: 185px;
    height: 37.24px;
    left: 66px;
    display: flex;
}

.link-group-item {
    flex: 1;
}

#wechat-bg {
    position: absolute;
    width: 37.24px;
    height: 37.24px;
}

#wechat-v {
    position: absolute;
    left: 21px;
    top: 20%;
    z-index: 1;
}

.weibo-icon{
    margin-left: 15px;
}

#weibo-bg {
    position: absolute;
    width: 37.24px;
    height: 37.24px;
}

#weibo-v {
    position: absolute;
    left: 21px;
    top: 20%;
    z-index: 1;
}

.facebook-icon{
    margin-left: 15px;
}

#facebook-bg {
    position: absolute;
    width: 37.24px;
    height: 37.24px;
}

#facebook-v {
    position: absolute;
    left: 26px;
    top: 15%;
    z-index: 1;
}

.instagram-icon{
    margin-left: 15px;
}

#instagram-bg {
    position: absolute;
    width: 37.24px;
    height: 37.24px;
}

#instagram-v {
    position: absolute;
    left: 21px;
    top: 20%;
    z-index: 1;
}
</style>
