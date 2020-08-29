<template>
    <div class="Header">
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>