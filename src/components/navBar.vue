<template>
  <div class="navBar__line">
    <BaseButton @click="$router.push('/')">Все мемы</BaseButton>
    <BaseButton @click="$router.push('/favorit')">Ваши мемы</BaseButton>
    <BaseButton @click="$router.push('/aboutus')">О приложении</BaseButton>
    <BaseButton v-if="!$store.state.loggined" @click="$router.push('/register')">Регистрация</BaseButton>
    <BaseButton v-if="!$store.state.loggined" @click="$router.push('/login')">Войти</BaseButton>
    <BaseButton v-if="$store.state.loggined">Выход</BaseButton>
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
