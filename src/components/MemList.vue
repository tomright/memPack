<template>
  <DialogVisible :vShow="$store.state.dialogVisible" @closeDialog="closeMemFullScreen">
    <MemCard :item="$store.state.memFullScreen" />
  </DialogVisible>
  <div class="memList">
    <MasonryWall :items="$store.state.memes" :min-columns="2" :column-width="300" :gap="5">
      <template #default="{ item }">
        <MemCard :item="item" />
      </template>
    </MasonryWall>
  </div>
</template>

<script>
import MemCard from "@/components/MemCard.vue";
import MasonryWall from "@yeger/vue-masonry-wall";
import DialogVisible from "./UI/DialogVisible.vue";

export default {
  name: "MemList",
  components: { MemCard, DialogVisible },
  methods: {
    closeMemFullScreen() {
      this.$store.commit("setDialogVisible");
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
