<template>
  <div class="control">
    <SearchInput />
    <BaseSelector class="control__baseSelector" />
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
  width: 80vw;
  column-gap: 15px;
}
.control__baseSelector {
  align-self: center;
}
@media (max-width: 991.98px) {
  .control {
    flex-direction: column;
    row-gap: 10px;
    height: 100%;
  }
}
</style>
