<template>
  <div class="search">
    <input
      @keydown.enter="search"
      @input="search"
      v-model="inputData"
      class="search__input"
      type="text"
      placeholder="Введите текст для поиска" />
    <BaseButton @click="search" class="search__button" />
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "SearchInput",
  components: { BaseButton },
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    search() {
      this.$store.commit("setSearchValue", this.inputData);
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  column-gap: 3px;
  height: 35px;
}
.search__input {
  padding: 5px;
  padding-left: 10px;
  border-radius: 10px;
  border: 2px solid black;
  width: 250px;
}
.search__button {
  background-image: url("@/assets/ui-img/search.svg");
  background-size: contain;
  background-position: center;
  width: 35px;
  height: 35px;
}
</style>
