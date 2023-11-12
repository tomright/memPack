<template>
  <div class="memList">
    <!-- TODO сделать вывод мемов из стора -->
    <MasonryWall :items="$store.state.memes" :column-width="300" :gap="5">
      <template #default="{ item }">
        <MemCard :item="item" />
      </template>
    </MasonryWall>
  </div>
</template>

<script>
import MemCard from "@/components/MemCard.vue";
import MasonryWall from "@yeger/vue-masonry-wall";

export default {
  name: "MemList",
  components: { MemCard },
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
