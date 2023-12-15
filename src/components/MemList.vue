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

export default {
  name: "MemList",
  components: { MemCardFullScreen, DialogVisible, MemCard },
  props: {
    sortMemes: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      widthWindow: "",
    };
  },
  methods: {
    closeMemFullScreen() {
      this.$store.commit("setDialogVisible");
    },
    windowResize(e) {
      this.widthWindow = window.innerWidth;
    },
  },
  computed: {
    minColumns() {
      return this.widthWindow < 500 ? 1 : 2;
    },
  },
  created() {
    window.addEventListener("resize", this.windowResize);
  },
  deactivated() {
    window.removeEventListener("resize", this.windowResize);
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
