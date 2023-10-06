<template>
  <div class="settings-blocks__fields white-box">
    <div class="article">
      <div class="article-title">Article body</div>
      <div class="article-fields">
        <CustomInput
          label="TITLE"
          id="holder1"
          placeholder="Example: Breaking News from 2024 elections."
        ></CustomInput>
        <CustomInput
          label="CATEGORY (IES)"
          id="holder2"
          placeholder="Search for a category..."
        ></CustomInput>
      </div>
    </div>
<div class="article-tabs" v-for="(tab, index) in tabs" :key="index">
  <div class="article-tabs__item">
    {{tab.tab}}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M16 8L8 16M8.00001 8L16 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </div>

</div>
    <CustomTextarea
      label="ARTICLE BODY"
      id="articletext"
      placeholder="Write your piece..."
    ></CustomTextarea>
    <div class="article-fact">
      FACT CHECK SIMULATOR
      <CustomButton>
        <template #image>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M2.63263 11.243C3.11896 12.6233 4.04073 13.8081 5.25906 14.619C6.47739 15.4299 7.92627 15.8229 9.3874 15.7388C10.8485 15.6548 12.2427 15.0981 13.36 14.1528C14.4772 13.2075 15.257 11.9247 15.5817 10.4978C15.9065 9.07081 15.7586 7.57697 15.1605 6.24132C14.5623 4.90568 13.5463 3.8006 12.2654 3.09258C10.9846 2.38455 9.5083 2.11195 8.05903 2.31584C5.61219 2.66007 3.9956 4.43357 2.25 6M2.25 6V1.5M2.25 6H6.75"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
      </CustomButton>
    </div>
    <div class="article-buttons">
      <CustomButton class="publish">
        <template #text>publish</template>
        <template #image>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 12H7M17 12L13 16M17 12L13 8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
      </CustomButton>
      <CustomButton class="savedraft">
        <template #text>SAVE AS DRAFT</template>
        <template #image> </template>
      </CustomButton>
    </div>
  </div>
</template>
<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";
import CustomInput from "@/components/ui/CustomInput.vue";
import CustomTextarea from "@/components/ui/CustomTextarea.vue";

import { ref } from "vue";

const tabs = ref([
  {
    tab:'POLITICS'
  },
  {
    tab:'BREAKING NEWS'
  }
  ])
</script>
<style lang="scss" >
@import "../../assets/style/style.scss";
textarea#articletext {
  width: 499px;
  height: 240px;
  box-sizing: border-box;
  &::placeholder {
    padding-top: 22px !important;
    padding-left: 11px;
    color: $dark-text;
    font-family: Poppins;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
  }
}
input#holder1 {
  width: 499px;
  height: 58px;
  &::placeholder {
    padding-top: 7px;
    padding-left: 11px;
    color: $dark-text;
    position: absolute;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
  }
}
input#holder2 {
  width: 499px;
  height: 58px;
  &::placeholder {
    padding-top: 7px;
    padding-left: 11px;
    color: $dark-text;
    position: absolute;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
  }
}
.publish {
  @include center-align;
  width: 166px;
  height: 57px;
  margin-right:36px;
  & svg {
    margin-left:39px;
  }
}
.savedraft {
  color: $dark-text;
  width: 166px;
  height: 57px;
  background: #a3a1ff;
  box-shadow: 0px 4px 6px 0px rgba(163, 161, 255, 0.16);
}
.article {
  &-fields {
    @include flex-column;
    gap:19px;
  }
  &-tabs {
    display: inline-flex;
margin:10px 0 22px 0;
    &__item {
      border-radius: 40px;
background: $purple-text;
    width: fit-content;
    color: $white;
display: flex;
    align-items: center;
    justify-content: space-between;
height: 21px;;
padding:0 12px ;
font-size: 10px;
box-sizing: border-box;
font-weight: 700;
margin-right:15px;
    }
  }
  &-fact {
    border-radius: 40px;
background: $light-purpl;
color: $purple-text;
@include flex-between ;
align-items:center;
font-size: 10px;
box-sizing:border-box;
font-weight: 700;
padding: 10px 24px;
width: 498px;
height: 50px;
letter-spacing: 2.6px;
margin: 32px 0;
& button {
  width: 30px;
height: 30px;
filter: drop-shadow(0px 4px 4px rgba(163, 161, 255, 0.16));
}
  }
  &-buttons {
    display:inline-flex;
  }
}
</style>