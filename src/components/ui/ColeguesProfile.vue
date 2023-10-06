<template>
  <div class="icon white-box">
    <h3>Colleagues</h3>

<div class="icon-pic">
      <div v-for="(picture, index) in pictures" :key="index">
        <img :src="picture" alt="" />
      </div>
       <div class="icon-circle circle">
        +117
    </div>
    </div>
  </div>
</template>
<script setup>
const pictures = [
  require("@/assets/1.png"),
  require("@/assets/2.png"),
  require("@/assets/3.png"),
  require("@/assets/4.png"),
  require("@/assets/5.png"),
  require("@/assets/6.png"),
  require("@/assets/7.png"),
  require("@/assets/8.png"),
];
</script>
<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.icon {
  @include flex-between;
  align-items: center;
  padding:13px 24px;
  box-sizing: border-box;
  &-pic {
    display:flex;
    gap: 20px;
    & img {
      width:44px;
      height:44px;
      border-radius:50%;
    }
  }
  &-circle {
        width: 43px;
    height: 43px;
    margin: 0  0  0 20px;
    color: $white;
@include center-align;
font-size: 16px;

font-weight: 700;


  }
}
</style>