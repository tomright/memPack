<template>
  <div class="control">
    <div class="control__search">
      <SearchInput />
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/UI/SearchInput.vue";
export default {
  name: "ControlPanel",
  components: {
    SearchInput,
  },
};
</script>

<style scoped>
.control {
  display: flex;
  justify-content: center;
  width: 50vw;
}
</style>
