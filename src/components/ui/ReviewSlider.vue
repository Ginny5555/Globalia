<template>
 <div class="review-slider">
          <CustomSlider
            :src="src"
            
            class="image-slider"
            :images="images"
            :texts="textBlocks"
          >

          </CustomSlider>
        </div>
</template>
<script setup>

import CustomSlider from "@/components/ui/CustomSlider.vue";
const textBlocks = [
  "Humanity’s fashion reached its zenith during the Vectorian era; unfortunately, it was during this very time that its decline began. Now, it has finally hit rock bottom...",

  "Title for Image 2",

  "Title for Image 3",
];
const images = [
  require("@/assets/anna.png"), // Use @ to refer to the src directory
  require("@/assets/anna.png"),
  require("@/assets/anna.png"),
  // Добавьте пути к вашим изображениям здесь
];
</script>
<style lang="scss" scoped>
@import '../../assets/style/style.scss';

</style>