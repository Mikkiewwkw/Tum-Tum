<template>
    <div>
        CreateCount
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    export default {
        name: "CreateCount",
        methods: {
            btnClick() {
                // console.log("Hello");
                this.$router.push("/intro");
            }
        }
    }
</script>

<style scoped>

</style>