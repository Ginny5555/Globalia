<template>
  <div class="rooms white-box">
    <div>
      <div class="rooms-title">
        <div class="messages">
          <h3>Messages <span> 13</span></h3>
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
                  d="M16.35 3.37501C16.125 2.85001 15.675 2.40001 15.15 2.17501C14.025 1.72501 12.75 2.25001 12.225 3.30001L8.77505 11.025C8.47505 11.7 8.40005 12.525 8.47505 13.2L8.77505 14.85C8.85005 15.075 9.00005 15.3 9.22505 15.375C9.30005 15.45 9.45005 15.45 9.52505 15.45C9.67505 15.45 9.82505 15.375 9.90005 15.3L11.325 14.4C12 13.95 12.45 13.425 12.75 12.675L16.2 4.95001C16.575 4.50001 16.575 3.90001 16.35 3.37501ZM11.55 12.225C11.325 12.675 11.025 12.975 10.65 13.275L10.125 13.575L10.05 13.05C9.97505 12.6 10.05 12.15 10.2 11.7L12.825 5.70001L14.175 6.22501L11.55 12.225ZM15 4.42501L14.85 4.80001L13.5 4.27501L13.65 3.90001C13.8 3.60001 14.025 3.45001 14.325 3.45001C14.4 3.45001 14.55 3.45001 14.625 3.52501C14.775 3.60001 14.925 3.75001 15 3.90001C15.075 4.12501 15.075 4.27501 15 4.42501Z"
                  fill="white"
                />
                <path
                  d="M2.25 12.75H5.25C5.7 12.75 6 12.45 6 12C6 11.55 5.7 11.25 5.25 11.25H2.25C1.8 11.25 1.5 11.55 1.5 12C1.5 12.45 1.8 12.75 2.25 12.75Z"
                  fill="white"
                />
                <path
                  d="M6.75 14.25H2.25C1.8 14.25 1.5 14.55 1.5 15C1.5 15.45 1.8 15.75 2.25 15.75H6.75C7.2 15.75 7.5 15.45 7.5 15C7.5 14.55 7.2 14.25 6.75 14.25Z"
                  fill="white"
                />
              </svg>
            </template>
          </CustomButton>
        </div>
        <SearchLineSmall />
      </div>
      <div class="room" >
      <div v-for="(room, index) in rooms" :key="index" class="rooms-names">
         <div class="rooms-names__title">
          <h3>{{room.name}}</h3>
          <div class="time">{{room.time}}</div>
        </div>
        <div class="rooms-names__pic">
          <img src="@/assets/julia.png" alt="" />
          <img :src="room.picture" alt="" />
          <img :src="room.picture2" alt="" />
          <img :src="room.picture3" alt="" />
        </div>
</div>
      </div>
    </div>
    <CustomButton class="rooms-button">
      <template #text> New room </template>
      <template #image>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
        >
          <path
            d="M26.3417 5.4375C25.9792 4.59167 25.2542 3.86667 24.4083 3.50417C22.5958 2.77917 20.5417 3.625 19.6958 5.31667L14.1375 17.7625C13.6542 18.85 13.5333 20.1792 13.6542 21.2667L14.1375 23.925C14.2583 24.2875 14.5 24.65 14.8625 24.7708C14.9833 24.8917 15.225 24.8917 15.3458 24.8917C15.5875 24.8917 15.8292 24.7708 15.95 24.65L18.2458 23.2C19.3333 22.475 20.0583 21.6292 20.5417 20.4208L26.1 7.975C26.7042 7.25 26.7042 6.28334 26.3417 5.4375ZM18.6083 19.6958C18.2458 20.4208 17.7625 20.9042 17.1583 21.3875L16.3125 21.8708L16.1917 21.025C16.0708 20.3 16.1917 19.575 16.4333 18.85L20.6625 9.18334L22.8375 10.0292L18.6083 19.6958ZM24.1667 7.12917L23.925 7.73334L21.75 6.8875L21.9917 6.28334C22.2333 5.8 22.5958 5.55834 23.0792 5.55834C23.2 5.55834 23.4417 5.55834 23.5625 5.67917C23.8042 5.8 24.0458 6.04167 24.1667 6.28334C24.2875 6.64584 24.2875 6.8875 24.1667 7.12917Z"
            fill="white"
          />
          <path
            d="M3.62496 20.5417H8.45829C9.18329 20.5417 9.66663 20.0583 9.66663 19.3333C9.66663 18.6083 9.18329 18.125 8.45829 18.125H3.62496C2.89996 18.125 2.41663 18.6083 2.41663 19.3333C2.41663 20.0583 2.89996 20.5417 3.62496 20.5417Z"
            fill="white"
          />
          <path
            d="M10.875 22.9583H3.62496C2.89996 22.9583 2.41663 23.4417 2.41663 24.1667C2.41663 24.8917 2.89996 25.375 3.62496 25.375H10.875C11.6 25.375 12.0833 24.8917 12.0833 24.1667C12.0833 23.4417 11.6 22.9583 10.875 22.9583Z"
            fill="white"
          />
        </svg>
      </template>
    </CustomButton>
  </div>
</template>
<script setup>
import { ref } from "vue";
import CustomButton from "@/components/ui/CustomButton.vue";
import SearchLineSmall from "@/components/ui/SearchLineSmall.vue";
const rooms = ref([
  {
    name: "Pitch Room",
    time: "09:23 AM",
    picture: require("@/assets/santana.png"),
    picture2: require("@/assets/gus.jpg"),
    picture3: require("@/assets/rin.png"),
  },
  {
    name: "Tech Expo",
    time: "09:26 AM",
    picture: require("@/assets/rin.png"),
  },
  {
    name: "Culinary Piece",
    time: "09:07 AM",
    picture: require("@/assets/amanda.png"),
  },
  {
    name: "Election Joint Cov...",
    time: "08:31 AM",

    picture: require("@/assets/santana.png"),
  },
  {
    name: "Products Review",
    time: "08:17 AM",
    picture2: require("@/assets/selina.png"),
    picture: require("@/assets/santana.png"),
  },
  {
    name: "Tech Expo on Site",
    time: "07:32 AM",
    picture2: require("@/assets/gus.jpg"),
  },
  // Add more alert objects here
]);
</script>
<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.room {
  @include flex-column ;
  gap:10px;
}
.rooms {
  width: 241px;
  height: 819px;
  @include flex-between;
  flex-direction: column;
  align-items: center;

  &-title {

    border-bottom: 1px solid rgba(21, 19, 61, 0.16);
    padding: 20px 18px 22.5px 18px;
    margin-bottom:20px;
  }
  &-names {
     @include flex-between;

     padding: 8px 12px ;
     border-radius: 10px;
     width: 204px;
height: 49px;
margin:0 auto;

         box-sizing: border-box;
    &:hover {
           background: #5644FC;
    }

    & img {
      width: 25.5px;
      border-radius: 50%;

    }
    &__title {

    }
  }
  & button {
    width: 210px;
    height: 57px;
    @include center-align;
    gap: 57px;

  }
  &-button {
    margin-bottom:44px;
  }
}
.messages {
  @include flex-between;
  margin-bottom: 18px;
  & span {
    color: $purple;
  }
  & button {
    width: 31px;
    height: 31px;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.16));
  }
}
.time {
  color: #A3A1FF;
font-family: Poppins;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h3 {
  font-size : 12px;
}
.rooms-names__pic img:not(:last-child) {
  margin-right: -6px; /* Смещение всех картинок, кроме последней, вправо на -2 пикселя */
 /* Размещение в одной линии */
 display: inline-block;
}
</style>