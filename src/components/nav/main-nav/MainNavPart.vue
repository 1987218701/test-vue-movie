<template>
  <div id="part">
    <a href=""><div class="logo"><slot name="logo"></slot></div></a>
    <div class="item"><slot name="item"></slot></div>
    <div class="search"><slot name="search"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "MainNavPart"
  }
</script>

<style scoped>
  #part {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
  }
  #part .logo img{
    width: 150px;
    height: 49px;
  }
  #part .item {
    flex: 1;
  }
  #part .search {
    width: 250px;
  }
</style>