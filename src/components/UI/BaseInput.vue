<template>
  <input @input="inputEvent" v-model="inputValue" type="text" :placeholder="placeholder" class="baseInput" />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    placeholder: {
      type: String,
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    inputEvent() {
      this.$emit("inputEvent", this.inputValue);
    },
  },
  emits: ["inputEvent"],
};
</script>

<style scoped>
.baseInput {
  width: 15vw;
  padding: 10px;
  padding-left: 20px;
  border-radius: 10px;
  font-size: 15px;
  border: 2px solid black;
}

@media (max-width: 991.98px) {
  .baseInput {
    width: 230px;
  }
}
</style>
