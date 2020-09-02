<template>
    <div class="intro">
       <div class="intro-swiper">
           <intro-swiper></intro-swiper>
       </div>
        <div>
            <input type="text"
                   v-model="user_name"
                   placeholder="ENTER YOUR NAME"
                   size="100"
                   class="name-input" required>
        </div>
        <div class="next" @click="btnClick">
            next
        </div>
    </div>

</template>

<script>
    import IntroSwiper from "./IntroSwiper/IntroSwiper";
    export default {
        name: "Intro.vue",
        components: {
            IntroSwiper,
        },
        data() {
            return {
                user_name: ""
            }
        },
        methods: {
            btnClick() {
                console.log(this.user_name);
                this.$router.push("/avatar");
            }
        }
    }
</script>

<style scoped>
    .intro-swiper {
        position: absolute;
        width: 267px;
        height: 258px;
        left: 56px;
        top: 120px;
    }
    .name-input {
        position: absolute;
        width: 332px;
        height: 60px;
        left: 5%;
        top: 70%;

        background: #F4F4F4;
        border-radius: 10px;
        border-width: 0;

        font-family: Bakso Sapi;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        text-transform: uppercase;
    }
    .next{
        position: absolute;
        width: 73px;
        height: 22px;
        left: 77%;
        top: 93%;

        font-family: Bakso Sapi;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        text-transform: uppercase;

        color: #E08F62;
    }

</style>