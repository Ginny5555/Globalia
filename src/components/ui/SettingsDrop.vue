<template>
  <div class="settings-blocks__drop white-box drag">
<h3>{{title}}</h3>
          <div class="drag-drop">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              viewBox="0 0 85 85"
              fill="none"
            >
              <path
                d="M74.375 46.0416C74.375 36.5972 72.6042 28.3333 70.8333 27.1528C69.6984 26.3961 64.1992 25.6395 56.6667 25.1937C52.4461 24.9439 60.2083 17.7083 42.5 17.7083C24.7917 17.7083 32.5539 24.9439 28.3333 25.1937C20.8008 25.6395 15.3016 26.3961 14.1667 27.1528C12.3958 28.3333 10.625 36.5972 10.625 46.0416C10.625 55.4861 12.3958 63.75 14.1667 64.9305C15.9375 66.1111 28.3333 67.2916 42.5 67.2916C56.6667 67.2916 69.0625 66.1111 70.8333 64.9305C72.6042 63.75 74.375 55.4861 74.375 46.0416Z"
                stroke="#A3A1FF"
                stroke-width="4.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.5 56.6666C48.368 56.6666 53.125 51.9097 53.125 46.0416C53.125 40.1736 48.368 35.4166 42.5 35.4166C36.632 35.4166 31.875 40.1736 31.875 46.0416C31.875 51.9097 36.632 56.6666 42.5 56.6666Z"
                stroke="#A3A1FF"
                stroke-width="4.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <a class="drag-link" href="">Click or Drag & Drop</a>
          <div class="drag-com">PNG OR JPG MAX 2MB</div>
        </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
    title: String,

});

</script>
<style lang="scss" scoped>
@import '../../assets/style/style.scss';

</style>