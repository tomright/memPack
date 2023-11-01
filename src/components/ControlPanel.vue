<template>
  <div class="control">
    <div class="control__search">
      <BaseInput />
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/UI/BaseInput.vue";
export default {
  name: "ControlPanel",
  components: {
    BaseInput,
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
