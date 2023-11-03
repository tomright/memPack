<template>
  <div class="control">
    <SearchInput />
    <BaseSelector />
  </div>
</template>

<script>
import SearchInput from "@/components/UI/SearchInput.vue";
import BaseSelector from "./UI/BaseSelector.vue";
export default {
  name: "ControlPanel",
  components: {
    SearchInput,
    BaseSelector,
  },
};
</script>

<style scoped>
.control {
  display: flex;
  justify-content: center;
  width: 50vw;
  column-gap: 5px;
}
</style>
