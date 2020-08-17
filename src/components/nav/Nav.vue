<template>
  <MainNav>
    <MainNavPart>
      <div slot="logo"><img src="~assets/img/logo.jpg" title="我是logo"></div>
      <div slot="item">
        <MainNavItem></MainNavItem>
      </div>
      <div slot="search">我是search</div>
    </MainNavPart>
  </MainNav>
</template>

<script>
  import MainNav from "./main-nav/MainNav";
  import MainNavPart from "./main-nav/MainNavPart";
  import MainNavItem from "./main-nav/MainNavItem";

  export default {
    name: "Nav",
    components: {
      MainNav,
      MainNavPart,
      MainNavItem
    }
  }
</script>

<style scoped>

</style>