<template>
    <div>
        CreateCount
        <button @click="btnClick">按钮</button>
        <toast :isShow="isShow">
            <toast-item class="toast-item" slot="the-toast" @toastback="toastback"></toast-item>
        </toast>
    </div>
</template>

<script>
    import Toast from "@/components/common/toast/Toast";
    import ToastItem from "./toastItem/ToastItem";
    export default {
        name: "CreateCount",
        components: {
            Toast,
            ToastItem,
        },
        data() {
            return {
                isShow: false,
                isBack: false,
            }
        },
        methods: {
            btnClick() {
                // console.log("Hello");
                // this.$router.push("/intro");
                this.isShow = true;
                if (this.isBack == this.isShow) {
                    this.isShow = false;
                    this.$router.push("/intro");
                }
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
    .toast-item {
        position: absolute;
        left: 7%;
    }
</style>