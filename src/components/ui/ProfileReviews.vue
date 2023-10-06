<template>
  <div class="review-profile white-box">
    <div class="review-latest__title">
      <h3>Reviews</h3>
      <div class="all">
        <div class="all-num">(1.37K) All</div>
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
          <div class="circle">{{ review.number }}</div>
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
    number: "7.2",
  },
  {
    title: "V Tech Mattee",
    number: "9.1",
  },
  {
    title: "Emerald V6",
    number: "7.9",
  },
  {
    title: "Ciel Cocoa",
    number: "6.2",
  },
  {
    title: "Panthera 2024",
    number: "9.3",
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