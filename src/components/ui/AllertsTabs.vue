<template>
  <div class="cards">
    <div class="cards-items">
      <div class="card white-box" v-for="(card, index) in cards" :key="index">
        <img class="card-img" :src="card.image" alt="" />
        <div class="card-description">
          <h3>{{ card.title }}</h3>
          <div>{{ card.description }}</div>
          <div class=" post purple-block">
            <img class="post-face" :src="card.face" alt="">
            <div class="post-name">{{card.name}}</div>
            <div class="post-data date">{{card.date}}</div>
            <div class="post-company">{{card.company}}</div>
             <div class="post-views"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 5C8.24261 5 5.43602 7.4404 3.76737 9.43934C2.51521 10.9394 2.51521 13.0606 3.76737 14.5607C5.43602 16.5596 8.24261 19 12 19C15.7574 19 18.564 16.5596 20.2326 14.5607C21.4848 13.0606 21.4848 10.9394 20.2326 9.43934C18.564 7.4404 15.7574 5 12 5Z" stroke="#15133D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#15133D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>{{card.views}}</div>
          </div>
        </div>
        <div class="card-button">
          <CustomButton class="breaking" v-if="card.breaking && card.breaking.trim() !== ''">
            <template #text>{{ card.breaking }}</template>
          </CustomButton>
          <CustomButton class="read">
            <template #text>read more</template>
            <template #image
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 12L7 12M17 12L13 16M17 12L13 8"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";
import { ref } from "vue";
const cards = ref([
  {
    title: "Tech Titans Clash in Epic Showdown",
    description:
      "In a high-stakes battle for the international market, industry giants are locking horns over the future of technology. ",
    image: require("@/assets/work.png"),
    breaking: "Breaking news!",
     face:require("@/assets/john.png"),
     name:"John Smith",
     date: "3 October, 2023 - 10:35 AM",
     company:"IN TECHNOLOGY",
     views:"116.2K"
  },
  {
    title: "Environmental Crusaders Rally for a Greener Tomorrow",
    description:
      "Activists worldwide unite to address pressing climate concerns. Explore their efforts to combat environmental challenges and pave the way for a sustainable future",
    image: require("@/assets/forest.png"),
    face:require("@/assets/santana.png"),
     name:"Emily Davis",
     date: "3 October, 2023 - 09:52 AM",
     company:"IN GLOBAL",
     views:"76.5K"
  },
  {
    title: "Innovative Trends Shaping the Future of Healthcare",
    description:
      "Discover the latest healthcare innovations poised to revolutionize patient care. From AI diagnostics to telemedicine, the future of medicine is here.",
    image: require("@/assets/office.png"),
     face:require("@/assets/micael.png"),
      name:"Michael Tory",
     date: "3 October, 2023 - 09:27 AM",
     company:"IN INNOVATION",
     views:"216.7K"
  },
  {
    title: "Culinary Marvels: Unearthing Hidden Food Gems",
    description:
      "Join our culinary explorers on a gastronomic journey to uncover hidden food gems from around the world. Savor the flavors of authentic local cuisine.",
    image: require("@/assets/cu.png"),
      face: require("@/assets/gus.jpg"),
       name:"Sofia Rodriguez",
     date: "3 October, 2023 - 09:27 AM",
     company:"IN CUISINE",
     views:"37.6K"
  },
]);
</script>
<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.card {
  width: 848px;
  height: 132px;
  @include flex-between;
  padding: 12px 13px;
  &-img {
    width: 132px;
    height: 103px;
    border-radius: 10px;
    margin-right: 30px;
  }
  &-description {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right:20px;
  }
  &-button {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  & h3 {
    font-size: 16px;
  }
}
.cards {
  &-items {
    @include flex-column;
    gap: 17px;
  }
}
.breaking {
  width: 123px;
  height: 28px;
  border-radius: 40px;
  background: #ff5353;
  box-shadow: 0px 4px 4px 0px rgba(163, 161, 255, 0.14);
  font-size: 10px;
  letter-spacing: normal;
  text-transform: inherit;
  font-weight: 700;
  margin-bottom:40px;
}
.read {
  width: 145px;
height: 33px;
@include center-align;
}
.post {
 @include flex-between;
 align-items: center;
 padding: 5px  35px 5px   10px;

 &-face {
width:30px;
height:30px;
border-radius:50%;
 }
 &-views {
  display:inline-flex;
  align-items: center;
  font-size: 10px;

font-weight: 700;
& svg {
  margin-right:10px;
}

 }
 &-name {
  font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
 }
 &-company {
  color: #5644FC;
font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
 }

}
</style>