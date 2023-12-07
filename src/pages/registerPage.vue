<template>
  <form method="post" @submit.prevent="sendForm">
    <div class="reg">
      <h1 class="reg__title">Регистрация</h1>
      <div class="reg__input">
        <label for="email">Введите вашу электронную почту:</label>
        <BaseInput
          v-model="regData.email"
          placeholder="test@test.ru"
          type="email"
          required
          autocomplete="off"
          id="email"
          tabindex="1" />
        <div v-show="!emailValidate" class="reg__error">Вводите корректный email, формата: xxx@xxx.xx</div>
      </div>
      <div class="reg__input">
        <label for="pass">Введите пароль:</label>
        <div class="reg__pass">
          <BaseInput
            v-model="regData.pass"
            placeholder="Пароль"
            :type="typePass"
            required
            autocomplete="off"
            id="pass"
            tabindex="2" />
          <BaseButton
            @click="show"
            type="button"
            class="reg__showBtn"
            :class="{ 'reg__showBtn--hide': showPass }"
            tabindex="6"></BaseButton>
        </div>
        <div v-show="!minLengthCheck" class="reg__error">
          Минимальная длинна пароля {{ minLength }}, вы ввели {{ regData.pass.length }}
        </div>
        <div v-show="!maxLengthCheck" class="reg__error">
          Максимальная длинна пароля {{ maxLenght }}, вы ввели {{ regData.pass.length }}
        </div>
      </div>
      <div class="reg__pass">
        <div class="reg__input">
          <label for="repeat">Повторите пароль:</label>
          <BaseInput
            v-model="repeatPass"
            placeholder="Повторите пароль"
            :type="typePass"
            required
            autocomplete="off"
            id="repeat"
            tabindex="3" />
          <div v-show="!identityPass" class="reg__error">Пароли должны совпадать!</div>
        </div>
      </div>
      <BaseButton :disabled="!finalValidator" type="submit" tabindex="4">Зарегистрироваться</BaseButton>
    </div>
  </form>
</template>

<script>
import BaseButton from "../components/UI/BaseButton.vue";
import BaseInput from "../components/UI/BaseInput.vue";
import formValidator from "@/mixins/FormValidator.js";

export default {
  components: { BaseInput, BaseButton },
  mixins: [formValidator],
  data() {
    return {
      repeatPass: "",
    };
  },
  methods: {
    sendForm() {
      if (this.finalValidator) {
        alert("Зарегано");
      }
    },
  },
  computed: {
    identityPass() {
      return this.regData.pass === this.repeatPass;
    },
    finalValidator() {
      if (
        this.regData.email !== "" &&
        this.emailValidate &&
        this.regData.pass !== "" &&
        this.identityPass &&
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

<style>
.reg {
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  align-items: flex-start;
  background-clip: padding-box;
}
.reg__pass {
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
.reg__input {
  display: flex;
  flex-direction: column;
}
.reg__invalid:invalid {
  border: 3px solid pink;
}
</style>
