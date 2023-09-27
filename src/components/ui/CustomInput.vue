<template>
  <div class="custominput">
    <label :for="inputId">{{ label }}</label>
    <input type="text"  :id="id" :placeholder="placeholder" />
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
@import '../../assets/style/style.scss';
input {
  border-radius: 10px;
  border: 2px solid $purple-text;
  display: flex;
  box-sizing:border-box;

}
label {
    position: absolute;
    color: #a3a1ff;
    padding: 9px 16px;
    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2.6px;
  }
</style>