<template>
  <NavBar class="navBar" />
  <div class="mainwrapper">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/navBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.mainwrapper {
  padding-top: 10px;
  width: 100vw;
  display: flex;
  justify-content: center;
}
.navBar {
  margin: 0 auto;
}
</style>
