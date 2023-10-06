<template>
  <div class="review-profile white-box">
    <div class="review-latest__title">
      <h3>News Pieces</h3>
      <div class="all">
        <div class="all-num">(126) All</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M13.9445 14.1875L9.94446 10.1875M13.9445 14.1875L8.946 19.1859C8.28735 19.8446 7.48784 20.3646 6.56993 20.5229C5.64311 20.6828 4.49294 20.736 3.94444 20.1875C3.39595 19.639 3.44915 18.4888 3.609 17.562C3.76731 16.6441 4.28735 15.8446 4.946 15.1859L9.94446 10.1875M13.9445 14.1875C13.9445 14.1875 16.9444 11.1875 14.9444 9.1875C12.9444 7.1875 9.94446 10.1875 9.94446 10.1875M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5"
            stroke="#15133D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="review-latest__purple">
      <div
        class="review-latest__purple-block purple-block"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <div class="circle-title">
          <div class="circle"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M19.9833 4.125C19.7083 3.48334 19.1583 2.93334 18.5166 2.65834C17.1416 2.10834 15.5833 2.75 14.9416 4.03334L10.7249 13.475C10.3583 14.3 10.2666 15.3083 10.3583 16.1333L10.7249 18.15C10.8166 18.425 10.9999 18.7 11.2749 18.7917C11.3666 18.8833 11.5499 18.8833 11.6416 18.8833C11.8249 18.8833 12.0083 18.7917 12.0999 18.7L13.8416 17.6C14.6666 17.05 15.2166 16.4083 15.5833 15.4917L19.7999 6.05C20.2583 5.5 20.2583 4.76667 19.9833 4.125ZM14.1166 14.9417C13.8416 15.4917 13.4749 15.8583 13.0166 16.225L12.3749 16.5917L12.2833 15.95C12.1916 15.4 12.2833 14.85 12.4666 14.3L15.6749 6.96667L17.3249 7.60834L14.1166 14.9417ZM18.3333 5.40834L18.1499 5.86667L16.4999 5.225L16.6833 4.76667C16.8666 4.4 17.1416 4.21667 17.5083 4.21667C17.5999 4.21667 17.7833 4.21667 17.8749 4.30834C18.0583 4.4 18.2416 4.58334 18.3333 4.76667C18.4249 5.04167 18.4249 5.225 18.3333 5.40834Z" fill="white"/>
<path d="M2.74992 15.5833H6.41659C6.96659 15.5833 7.33325 15.2167 7.33325 14.6667C7.33325 14.1167 6.96659 13.75 6.41659 13.75H2.74992C2.19992 13.75 1.83325 14.1167 1.83325 14.6667C1.83325 15.2167 2.19992 15.5833 2.74992 15.5833Z" fill="white"/>
<path d="M8.24992 17.4167H2.74992C2.19992 17.4167 1.83325 17.7833 1.83325 18.3333C1.83325 18.8833 2.19992 19.25 2.74992 19.25H8.24992C8.79992 19.25 9.16658 18.8833 9.16658 18.3333C9.16658 17.7833 8.79992 17.4167 8.24992 17.4167Z" fill="white"/>
</svg></div>
          <h3 class="title">{{ review.title }}</h3>
        </div>
        <CustomButton>
          <template #text>full review</template>
        </CustomButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";
import { ref } from "vue";
const reviews = ref([
  {
    title: "Calipso Sensations",

  },
  {
    title: "V Tech Mattee",

  },
  {
    title: "Emerald V6",

  },
  {
    title: "Ciel Cocoa",

  },
  {
    title: "Panthera 2024",

  },
  // Add more alert objects here
]);
</script>
<style lang="scss" >
@import "../../assets/style/style.scss";
.all {
  display:flex;
  &-num {
     color: $purple;
  font-size: 14px;
  font-weight: 700;
  margin-right: 27px;
  }

}
.review-profile  {
  width: 414px;
height: 343px;
    padding: 10px 20px;
}
</style>