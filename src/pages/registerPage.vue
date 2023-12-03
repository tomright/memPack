<template>
  <form method="post" @submit.prevent="sendForm">
    <div class="registration">
      <h1 class="registration__title">Регистрация</h1>
      <BaseInput @inputEvent="emailValidate" placeholder="Ваш Email" type="email" required autocomplete="off" tabindex="1" />
      <div class="registration__pass">
        <BaseInput placeholder="Пароль" :type="typePass" required autocomplete="off" tabindex="2" />
        <BaseButton
          @click="show"
          class="registration__passBtn"
          :class="{ 'registration__passBtn--hide': showPass }"
          tabindex="6"></BaseButton>
      </div>
      <div class="registration__pass">
        <BaseInput placeholder="Повторите пароль" :type="typePass" required autocomplete="off" tabindex="3" />
      </div>
      <BaseButton tabindex="4">Зарегистрироваться</BaseButton>
    </div>
  </form>
</template>

<script>
import BaseButton from "../components/UI/BaseButton.vue";
import BaseInput from "../components/UI/BaseInput.vue";

export default {
  components: { BaseInput, BaseButton },
  data() {
    return {
      showPass: false,
      emailValidator:
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        // /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/,
    };
  },
  methods: {
    show() {
      this.showPass = !this.showPass;
    },
    emailValidate(e) {
      console.log(this.emailValidator.test(e));
    },
    sendForm(e) {
      console.log(e);
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
