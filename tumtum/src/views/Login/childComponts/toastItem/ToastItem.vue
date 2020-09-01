<template>
    <div class="toast-item">
        <div @click="choice">
            <img class="back" :src="pictures.backsvg.url">
        </div>
        <div class="header-content">
            LINK TO THESE APPS TO FIND YOUR FRIENDS!
        </div>
        <div class="link-group">
            <div id="wechat" class="link-group-item">
                <img :src="pictures.svg.wechat.url" id="wechat-v">
                <img :src="pictures.wechat.url">
            </div>
            <div id="webo" class="link-group-item">
                <img :src="pictures.svg.webo.url" id="webo-v">
                <img :src="pictures.webo.url">
            </div>
            <div id="facebook" class="link-group-item">
                <img :src="pictures.svg.facebook.url" id="face-v">
                <img :src="pictures.wechat.url">
            </div>
            <div id="ins" class="link-group-item">
                <img :src="pictures.svg.ins.url" id="ins-v">
                <img :src="pictures.webo.url">
            </div>
        </div>
        <div class="enter-content">
            DIRECTLY ENTER
        </div>
        <div class="enter" @click="btnClick">
            <img :src="pictures.enter.url">
        </div>

    </div>
</template>

<script>
    export default {
        name: "ToastItem",
        data() {
            return {
                pictures: {
                    backsvg: {
                        url: require("../../../../assets/svg/LoginWelcome/back14.svg")
                    },
                    wechat: {
                        url: require("../../../../assets/svg/toast/wechat.svg")
                    },
                    webo: {
                        url: require("../../../../assets/svg/toast/webo.svg")
                    },
                    svg: {
                        wechat:{
                            url: require("../../../../assets/svg/icons/wechat.svg")
                        },
                        webo: {
                            url: require("../../../../assets/svg/icons/webo.svg")
                        },
                        facebook: {
                            url: require("../../../../assets/svg/icons/facebook.svg")
                        },
                        ins: {
                            url: require("../../../../assets/svg/icons/ins.svg")
                        }
                    },
                    enter: {
                        url: require("../../../../assets/svg/toast/toast_enter.svg")
                    }
                }
            }
        },
        methods: {
            choice() {
                this.$emit("toastback", true);
            },
            btnClick() {
                this.$router.push("/intro");
            }
        },
    }
</script>

<style scoped>
    .toast-item {
        width: 320px;
        height: 320px;
        background: #FFFBF2;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        z-index: 10;
    }
    .back {
        position: absolute;
        left: 3.75%;
        right: 81.25%;
        top: 1.56%;
        bottom: 83.75%;
    }
    .header-content {
        position: absolute;
        width: 201px;
        height: 48px;
        left: 60px;
        top: 37px;

        font-family: Bakso Sapi;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;

        color: #000000;
    }
    .link-group {
        position: absolute;
        width: 185px;
        height: 37.24px;
        left: 66px;
        top: 93.76px;
        display: flex;
    }
    .link-group-item {
       flex: 1;
    }
    #wechat-v {
        position: absolute;
        left: 3%;
        top: 20%;
        vertical-align: center;
        z-index: 1;
    }
    #webo-v {
        position: absolute;
        left: 28%;
        top: 20%;
        vertical-align: center;
        z-index: 1;
    }
    #face-v {
        position: absolute;
        left: 56%;
        top: 20%;
        vertical-align: center;
        z-index: 1;
    }
    #ins-v {
        position: absolute;
        left: 79%;
        top: 20%;
        vertical-align: center;
        z-index: 1;
    }
    .enter-content {
        position: absolute;
        width: 166px;
        height: 30px;
        left: 77px;
        top: 170px;

        font-family: Bakso Sapi;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;

        color: #000000;
    }
    .enter {
        position: absolute;
        width: 85px;
        height: 85px;
        left: 115px;
        top: 201px;
    }


</style>