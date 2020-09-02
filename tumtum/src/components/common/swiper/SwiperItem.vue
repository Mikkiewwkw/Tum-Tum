<template>
    <div class="slide" :style="slidWidth.width">
      <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "Slide",
        props: {
		    slidWidth: {
		        type: Object,
                default() {
                    return {};
                }
            }
        },
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }
</style>
