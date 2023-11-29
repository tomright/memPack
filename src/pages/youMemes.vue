<template>
  <ControlPanel />
  <MemList :sortMemes="sortMemes" />
</template>

<script>
import ControlPanel from "@/components/ControlPanel.vue";
import MemList from "@/components/MemList.vue";
export default {
  components: { ControlPanel, MemList },
  computed: {
    sortMemes() {
      return this.$store.getters.searchAndSortMemes;
    },
  },
  //   mounted: {
  //TODO отправка запроса на бэк для загрузки избранных мемов
  //   },
};
</script>

<style></style>
