<template>
  <div
    @click="closeDialog"
    v-show="$store.state.dialogVisible"
    class="modal-fullScreen"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent>
    <div @click.stop class="modal-fullScreen__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeDialog() {
      this.$store.commit("setDialogVisible");
    },
  },
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
