<template>
  <div class="navBar__line">
    <BaseButton>Домашняя страница</BaseButton>
    <BaseButton>О нас</BaseButton>
    <BaseButton>Регистрация</BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton.vue";
export default {
  name: "NavBar",
  components: {
    BaseButton,
  },
};
</script>

<style>
.navBar__line{
  display: flex;
}
</style>
