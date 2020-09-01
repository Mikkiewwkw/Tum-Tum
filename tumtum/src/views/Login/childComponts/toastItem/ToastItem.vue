<template>
    <div class="toast-item">
        <div @click="choice">
            <img :src="backsvg.url">
        </div>


    </div>
</template>

<script>
    export default {
        name: "ToastItem",
        methods: {
            choice() {
                this.$emit("toastback", true);
            }
        },
        data() {
            return {
                backsvg: {
                    url: require("../../../../assets/svg/LoginWelcome/back14.svg")
                }
            }
        }
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

</style>