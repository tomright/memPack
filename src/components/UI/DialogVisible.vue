<template>
  <div @click="closeDialog" v-if="vShow" class="modal-fullScreen" @wheel.prevent @touchmove.prevent @scroll.prevent>
    <div @click.stop class="modal-fullScreen__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vShow: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
  emits: ["closeDialog"],
};
</script>

<style scoped>
.modal-fullScreen {
  background-color: rgba(24, 24, 24, 0.726);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
