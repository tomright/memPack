<template>
  <select class="baseSelector" id="sort" @change="changeOptions">
    <option selected disabled>Сортировать по:</option>
    <option v-for="item in $store.state.sortOptions" :key="item.value" :value="item.value">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "BaseSector",
  methods: {
    changeOptions(event) {
      this.$store.commit("changeSortOption", event.target.value);
    },
  },
};
</script>

<style scoped>
.baseSelector {
  padding-left: 20px;
  height: 35px;
}
</style>
