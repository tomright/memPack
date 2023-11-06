<template>
  <div class="memList">
    <div v-for="item in 30">
      <MemCard />
    </div>
  </div>
</template>

<script>
import MemCard from "@/components/MemCard.vue";

export default {
  name: "MemList",
  components: { MemCard },
};
</script>

<style scoped>
.memList {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
</style>
