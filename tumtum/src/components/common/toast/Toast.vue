<template>
    <div class="toast" >
        <slot name="the-toast" v-if="isShow"></slot>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        props: {
            isShow: {
              type: Boolean,
              default() {
                  return false;
              }
          }
        },
    }
</script>

<style scoped>

</style>