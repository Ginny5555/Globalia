<template>
  <div class="custominput">
    <label :for="inputId">{{ label }}</label>
    <input type="text" :id="id" :placeholder="placeholder" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomInput",
  props: {
    value: String, // For v-model binding
    placeholder: String,
    label: String,
    id: String,
  },
});
</script>
<style lang="scss" scoped>
$dark-text: #15133d;
$purple-text: #a3a1ff;
input {
  border-radius: 10px;
  border: 2px solid $purple-text;
  display: flex;
  box-sizing:border-box;
}
</style>