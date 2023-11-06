<template>
  <div class="search">
    <input class="search__input" type="text" />
    <BaseButton class="search__button" />
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "SearchInput",
  components: { BaseButton },
};
</script>

<style>
.search {
  display: flex;
  justify-content: center;
  column-gap: 3px;
}
.search__input {
  padding: 5px;
}
.search__button {
  background-image: url("@/assets/Img/search.svg");
  background-size: contain;
  background-position: center;
  width: 30px;
  height: 30px;
}
</style>
