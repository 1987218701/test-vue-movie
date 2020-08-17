<template>
  <div id="options">
    <ul>
      <li @click="isActive(index)"
        v-for="(item,index) in list"
        :class="{active: currentActive === index}">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MainNavItem",
    data() {
      return {
        list: ['首页', '电影', '电视剧', '综艺', '动漫专区', '电影解说', '专题', '恐怖'],
        currentActive: 0
      }
    },
    methods: {
      isActive(index) {
        this.currentActive = index;

        if (index == 0) {
          this.$router.push('/home').catch(error => {})
        } else if (index == 1) {
          this.$router.push('/movie').catch(error => {})
        } else if (index == 2) {
          this.$router.push('/teleplay').catch(error => {})
        } else if (index == 3) {
          this.$router.push('/variety').catch(error => {})
        } else if (index == 4) {
          this.$router.push('/cartoon').catch(error => {})
        } else if (index == 5) {
          this.$router.push('/narrate').catch(error => {})
        } else if (index == 6) {
          this.$router.push('/special').catch(error => {})
        } else if (index == 7) {
          this.$router.push('/terrifying').catch(error => {})
        }
      }
    }
  }
</script>

<style scoped>
  #options {
    font-size: 14px;
    line-height: 49px;
    height: 49px;
    text-align: center;
    flex: 1;
    color: white;
  }
  #options ul li {
    float: left;
    width: 80px;
    list-style: none;
    cursor: pointer;
  }
  .active {
    background-color: skyblue;
  }
</style>