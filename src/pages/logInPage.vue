<template>
  <div class="login">
    <h1>Вход</h1>
    <form method="post" @submit.prevent="login" class="login__form">
      <div class="login__input">
        <label to="email">Email:</label>
        <BaseInput
          v-model="regData.email"
          id="email"
          placeholder="test@test.ru"
          autocomplete="off"
          type="email"
          required
          tabindex="1"></BaseInput>
        <div v-show="!emailValidate" class="reg__error">Вводите корректный email, формата: xxx@xxx.xx</div>
      </div>
      <div class="login__input">
        <label to="pass">Пароль:</label>
        <div class="login__pass">
          <BaseInput v-model="regData.pass" id="pass" :type="typePass" placeholder="*******" required tabindex="2"></BaseInput>
          <BaseButton
            @click="show"
            type="button"
            class="reg__showBtn"
            :class="{ 'reg__showBtn--hide': showPass }"
            tabindex="4"></BaseButton>
        </div>
        <div v-show="!minLengthCheck" class="reg__error">
          Минимальная длинна пароля {{ minLength }}, вы ввели {{ regData.pass.length }}
        </div>
        <div v-show="!maxLengthCheck" class="reg__error">
          Максимальная длинна пароля {{ maxLenght }}, вы ввели {{ regData.pass.length }}
        </div>
      </div>
      <BaseButton :disabled="!finalValidator" type="submit" class="login__entBtn" tabindex="3">Вход</BaseButton>
    </form>
  </div>
</template>

<script>
import BaseButton from "../components/UI/BaseButton.vue";
import BaseInput from "../components/UI/BaseInput.vue";
import formValidator from "@/mixins/FormValidator.js";
export default {
  components: { BaseInput, BaseButton },
  mixins: [formValidator],
  methods: {
    login() {
      if (this.finalValidator) {
        alert("Зашли");
      }
    },
  },
  computed: {
    finalValidator() {
      if (
        this.regData.email != "" &&
        this.emailValidate &&
        this.regData.pass !== "" &&
        this.minLengthCheck &&
        this.maxLengthCheck
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
.login__form {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.login__entBtn {
  margin-top: 20px;
  width: 200px;
  align-self: flex-start;
}
.login__input {
  display: flex;
  flex-direction: column;
}

.reg__error {
  width: 15vw;
  background-color: pink;
  font-size: 14px;
  top: -15px;
  z-index: -3;
  position: relative;
  padding-top: 20px;
  padding-bottom: 5px;
  padding-left: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
.login__pass {
  display: flex;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  column-gap: 5px;
}
.reg__showBtn {
  align-self: center;
  width: 40px;
  height: 40px;
  border: none;
  background-image: url("@/assets/ui-img/showPass.svg");
}
.reg__showBtn--hide {
  background-image: url("@/assets/ui-img/hidePass.svg");
}
</style>
