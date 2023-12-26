<template>
  <div class="navbar__wrapper">
    <div @click="menuToggle" class="navbar__menu-burger">
      <img class="navbar__burger-img" src="@/assets/ui-img/burger.svg" alt="Меню" />
    </div>
    <TransitionGroup name="navBarAnim">
      <div class="navBar__line" :class="{ 'navBar__line--show': showMenu }">
        <BaseButton
          @click="
            $router.push('/');
            menuToggle();
          "
          >Все мемы</BaseButton
        >
        <BaseButton
          @click="
            $router.push('/favorit');
            menuToggle();
          "
          >Ваши мемы</BaseButton
        >
        <BaseButton
          @click="
            $router.push('/aboutus');
            menuToggle();
          "
          >О приложении</BaseButton
        >
        <BaseButton
          v-if="!$store.state.loggined"
          @click="
            $router.push('/register');
            menuToggle();
          "
          >Регистрация</BaseButton
        >
        <BaseButton
          v-if="!$store.state.loggined"
          @click="
            $router.push('/login');
            menuToggle();
          "
          >Войти</BaseButton
        >
        <BaseButton v-if="$store.state.loggined">Выход</BaseButton>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton.vue";
export default {
  name: "NavBar",
  components: {
    BaseButton,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    menuToggle() {
      this.showMenu = !this.showMenu;
    },
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
    top: 50%;
    right: 0;
    background-color: white;
    border-radius: 10px;
  }
  .navbar__burger-img {
    width: 35px;
    border-radius: 10px;
  }
  .navBar__line {
    visibility: hidden;
    position: fixed;
    top: 55%;
    right: 0px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
  }
  .navBar__line--show {
    visibility: visible;
  }
}
</style>
