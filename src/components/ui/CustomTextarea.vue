<template>
  <div class="custominput">
    <label :for="inputId">{{ label }}</label>
    <textarea type="text" :id="id" :placeholder="placeholder" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    value: String, // For v-model binding
    placeholder: String,
    label:String,
    id:String,
});


</script>
<style lang="scss" scoped>
@import "../../assets/style/style.scss";
textarea {
  border-radius: 10px;
  border: 2px solid $purple-text;
  display: flex;
}
</style>