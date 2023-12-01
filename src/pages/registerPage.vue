<template>
  <div class="registration">
    <h1 class="registration__title">Регистрация</h1>
    <BaseInput placeholder="Ваш Email" />
    <div class="registration__pass">
      <BaseInput placeholder="Пароль" :type="typePass" />
      <BaseButton @click="show" class="registration__passBtn" :class="{ 'registration__passBtn--hide': showPass }"></BaseButton>
    </div>
    <div class="registration__pass">
      <BaseInput placeholder="Повторите пароль" :type="typePass" />
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/UI/BaseButton.vue";
import BaseInput from "../components/UI/BaseInput.vue";

export default {
  components: { BaseInput, BaseButton },
  data() {
    return {
      showPass: false,
    };
  },
  methods: {
    show() {
      this.showPass = !this.showPass;
    },
  },
  computed: {
    typePass() {
      return this.showPass ? "text" : "password";
    },
  },
};
</script>

<style>
.registration {
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  align-items: flex-start;
}
.registration__pass {
  display: flex;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  column-gap: 5px;
}
.registration__passBtn {
  width: 30px;
  border: none;
  background-image: url("@/assets/ui-img/showPass.svg");
}
.registration__passBtn--hide {
  background-image: url("@/assets/ui-img/hidePass.svg");
}
</style>
