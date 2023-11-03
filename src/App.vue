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
  width: 95vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
