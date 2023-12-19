<template>
  <DialogVisible :vShow="$store.state.dialogVisible" @closeDialog="closeMemFullScreen">
    <MemCardFullScreen :item="$store.state.memFullScreen" />
  </DialogVisible>
  <div class="memList">
    <MasonryWall :items="sortMemes" :min-columns="minColumns" :column-width="300" :gap="5">
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
import widthWindow from "@/mixins/WidthWindow.js";

export default {
  name: "MemList",
  components: { MemCardFullScreen, DialogVisible, MemCard },
  mixins: [widthWindow],
  props: {
    sortMemes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    closeMemFullScreen() {
      this.$store.commit("setDialogVisible");
    },
  },
  computed: {
    minColumns() {
      return this.widthWindow < 466 ? 1 : 2;
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
