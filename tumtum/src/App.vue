<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    btnClick() {
      console.log("Hello")
    }
  }
};
</script>

<style>
body {
  background: #f6f0e0;
}
</style>
