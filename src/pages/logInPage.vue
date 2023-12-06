<template>
  <div class="login">
    <h1>Вход</h1>
    <form method="post" @submit.prevent="login" class="login__form">
      <label to="login">Логин</label>
      <BaseInput id="login"></BaseInput>
      <label to="pass">Логин</label>
      <BaseInput id="pass"></BaseInput>
      <BaseButton class="login__entBtn">Вход</BaseButton>
    </form>
  </div>
</template>

<script>
import BaseButton from "../components/UI/BaseButton.vue";
import BaseInput from "../components/UI/BaseInput.vue";
export default {
  components: { BaseInput, BaseButton },
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
}
</style>
