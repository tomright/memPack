<template>
  <button class="baseButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>

<style>
.baseButton {
  background-color: inherit;
  width: auto;
  height: 100%;
  border-radius: 5px;
  border: 2px black solid;
  padding: 5px;
  cursor: pointer;
}
.baseButton:hover {
  background-color: rgb(223, 250, 241);
}

.baseButton:disabled {

  border: 2px rgb(196, 196, 196) solid;
}
</style>
