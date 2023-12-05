<template>
  <form method="post" @submit.prevent="sendForm">
    <div class="reg">
      <h1 class="reg__title">Регистрация</h1>
      <BaseInput v-model="regData.email" placeholder="Ваш Email" type="email" required autocomplete="off" tabindex="1" />
      <div class="reg__pass">
        <BaseInput
          ref="pass"
          v-model="regData.pass"
          placeholder="Пароль"
          :type="typePass"
          required
          autocomplete="off"
          tabindex="2" />
        <div class="reg__errorPass" v-show="!identityPass">Пароли должны совпадать!</div>
        <BaseButton
          @click="show"
          class="reg__passBtn"
          :class="{ 'reg__passBtn--hide': showPass }"
          tabindex="6"></BaseButton>
      </div>
      <div class="reg__pass">
        <BaseInput
          v-model="repeatPass"
          placeholder="Повторите пароль"
          :type="typePass"
          required
          autocomplete="off"
          tabindex="3" />
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
      regExpEmail:
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      // /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/,
      regData: {
        email: "",
        pass: "",
      },
      repeatPass: "",
      showErrorPass: {
        top: "",
        left: "",
      },
    };
  },
  methods: {
    show() {
      this.showPass = !this.showPass;
    },
    sendForm(e) {
      console.log(e);
    },
    errorMessageCoordinate(ref) {
      let coordinate = ref.getBoundingClientRect();
      this.showErrorPass.top = `${coordinate.y}`;
      this.showErrorPass.left = `${coordinate.x}`;
    },
  },
  computed: {
    typePass() {
      return this.showPass ? "text" : "password";
    },
    emailValidate() {
      return this.regExpEmail.test(this.regData.email);
    },
    identityPass() {
      console.log(this.regData.pass === this.repeatPass);
      return this.regData.pass === this.repeatPass;
    },
  },
};
</script>

<style>
.reg {
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  align-items: flex-start;
}
.reg__pass {
  display: flex;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  column-gap: 5px;
}
.reg__passBtn {
  width: 30px;
  border: none;
  background-image: url("@/assets/ui-img/showPass.svg");
}
.reg__passBtn--hide {
  background-image: url("@/assets/ui-img/hidePass.svg");
}
.reg__errorPass {
  position: absolute;
  display: flex;
  border-radius: 10px;
}
</style>
