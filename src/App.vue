<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import Nav from "components/nav/Nav";
  export default {
    name: 'App',
    components: {
      Nav
    }
  }
</script>

<style>
  @import "assets/css/base.css";

</style>
