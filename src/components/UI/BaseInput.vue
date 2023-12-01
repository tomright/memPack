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
    inputEvent(e) {
      this.$emit("inputEvent", e.target.data);
    },
  },
  emits: ["inputEvent"],
};
</script>

<style>
.baseInput {
  width: 15vw;
  padding: 10px;
  padding-left: 20px;
  border-radius: 10px;
  font-size: 15px;
}
</style>
