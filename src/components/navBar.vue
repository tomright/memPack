<template>
  <div class="navbar__wrapper">
    <div class="navbar__menu-burger">
      <img class="navbar__burger-img" src="@/assets/ui-img/burger.svg" alt="Меню" />
    </div>
    <div class="navBar__line">
      <BaseButton @click="$router.push('/')">Все мемы</BaseButton>
      <BaseButton @click="$router.push('/favorit')">Ваши мемы</BaseButton>
      <BaseButton @click="$router.push('/aboutus')">О приложении</BaseButton>
      <BaseButton v-if="!$store.state.loggined" @click="$router.push('/register')">Регистрация</BaseButton>
      <BaseButton v-if="!$store.state.loggined" @click="$router.push('/login')">Войти</BaseButton>
      <BaseButton v-if="$store.state.loggined">Выход</BaseButton>
    </div>
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
.navbar__menu-burger {
  display: none;
}
@media (max-width: 991.98px) {
  .navbar__menu-burger {
    z-index: 9999;
    display: flex;
    position: fixed;
    top: 55%;
    right: 0;
    background-color: white;
    border-radius: 10px;
  }
  .navbar__burger-img {
    width: 35px;
    border-radius: 10px;
  }
  .navBar__line {
    position: fixed;
    top: 60%;
    right: 0px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
  }
}
</style>
