<template>
  <div id="main-nav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MainNav"
  }
</script>

<style scoped>
  #main-nav {
    background-color: rgb(41, 40, 56);
    height: 49px;
  }
</style>