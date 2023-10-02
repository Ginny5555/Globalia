<template>
  <div class="wigets-activity white-box">
        <div class="wigets-activity__title">
          <h3>Colleagues’ Activity</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 20.25V17.1056C7 16.7107 7.11688 16.3247 7.3359 15.9962L9.2604 13.1094C9.70827 12.4376 9.70827 11.5624 9.2604 10.8906L7.3359 8.00385C7.11688 7.67531 7 7.2893 7 6.89445V3.75M7 20.25C5.75 20.125 5 20 5 20M7 20.25C8.25 20.375 10 20.5 12 20.5C14 20.5 15.75 20.375 17 20.25M7 3.75C5.75 3.875 5 4 5 4M7 3.75C8.25 3.625 10 3.5 12 3.5C14 3.5 15.75 3.625 17 3.75M17 20.25V17.1056C17 16.7107 16.8831 16.3247 16.6641 15.9962L14.7396 13.1094C14.2917 12.4376 14.2917 11.5624 14.7396 10.8906L16.6641 8.00385C16.8831 7.67531 17 7.2893 17 6.89445V3.75M17 20.25C18.25 20.125 19 20 19 20M17 3.75C18.25 3.875 19 4 19 4"
              stroke="#15133D"
              stroke-width="2.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="wigets-activity__colegues">
          <div class="colegues purple-block" v-for="(colegue, index) in colegues" :key="index">
            <div class="colegues-block">
              <div class="colegues-image">
                <img :src="colegue.picture" alt="" />
              </div>
              <div class="title">{{colegue.title}}</div>
            </div>
            <div class="colegues-date date">{{colegue.date}}</div>
          </div>

        </div>
      </div>
</template>
<script setup>
import {ref} from "vue";
const colegues = ref([
  {
    title: 'Amanda Lock',
    date: 'October 2, 2023 - 10:42 PM',
    picture:   require("@/assets/amanda.png"),
  },
  {
    title: 'Selina Fye',
    date: 'October 2, 2023 - 09:16 PM',
    picture:   require("@/assets/selina.png"),
  },
  {
    title: 'Rin Vulcan',
    date: 'October 2, 2023 - 05:23 PM',
    picture:   require("@/assets/rin.png"),
  },
  // Add more alert objects here
]);
</script>
<style lang="scss" scoped>
@import '../../assets/style/style.scss';

</style>