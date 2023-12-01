<template>
  <div class="navBar__line">
    <BaseButton @click="$router.push('/')">Все мемы</BaseButton>
    <BaseButton @click="$router.push('/favorit')">Ваши мемы</BaseButton>
    <BaseButton @click="$router.push('/aboutus')">О приложении</BaseButton>
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
.navBar__line {
  padding-top: 10px;
  display: flex;
  column-gap: 10px;
  justify-content: center;
}
</style>
