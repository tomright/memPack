<template>
  <DialogVisible :vShow="$store.state.dialogVisible" @closeDialog="closeMemFullScreen">
    <MemCardFullScreen :item="$store.state.memFullScreen" />
  </DialogVisible>
  <div class="memList">
    <MasonryWall :items="sortMemes" :min-columns="2" :column-width="300" :gap="5">
      <template #default="{ item }">
        <MemCard :item="item" />
      </template>
    </MasonryWall>
  </div>
</template>

<script>
import MemCardFullScreen from "@/components/MemCardFullScreen.vue";
import MemCard from "@/components/MemCard.vue";
import MasonryWall from "@yeger/vue-masonry-wall";
import DialogVisible from "./UI/DialogVisible.vue";

export default {
  name: "MemList",
  components: { MemCardFullScreen, DialogVisible, MemCard },
  methods: {
    closeMemFullScreen() {
      this.$store.commit("setDialogVisible");
    },
  },
  computed: {
    sortMemes() {
      return this.$store.getters.searchAndSortMemes;
    },
  },
};
</script>

<style scoped>
.memList {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  justify-content: center;
}
</style>
