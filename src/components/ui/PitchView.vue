<template>
  <div class="pitch white-box">
    <div class="pitch-head">
      <div class="pitch-head__room">
        <div class="pitch-head__room-img">
          <div class="users" v-for="(user, index) in users" :key="index">
            <img :src="user.picture" class="users-pic" alt="" />
          </div>
          <div class="room">
            <div class="room-name">Pitch Room</div>
            <div class="room-num">3 members online</div>
          </div>
        </div>
        <div class="pitch-head__room-link">
          <a href=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M17.5 3.49999C19.2867 3.69849 20.8946 4.5629 22.1666 5.83332C23.4386 7.10374 24.2992 8.71346 24.5 10.5M16.9166 7.58332C17.7766 7.75112 18.6304 8.1304 19.25 8.74999C19.8696 9.36958 20.2488 10.2233 20.4166 11.0833M9.56719 18.4322C1.51955 10.3836 2.6639 6.698 3.51226 5.51034C3.62125 5.31838 6.30751 1.29718 9.18698 3.6564C16.3343 9.54269 7.58329 9.33332 13.2876 14.7132C18.9919 20.093 18.4582 11.6666 24.3435 18.8124C26.7028 21.693 22.6815 24.3791 22.4907 24.4869C21.303 25.3365 17.6161 26.4808 9.56719 18.4322Z"
                stroke="#5644FC"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></a>
          <a href=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M23.3333 23.3333L18.4372 18.4372M21 12.25C21 7.41751 17.0825 3.5 12.25 3.5C7.41751 3.5 3.5 7.41751 3.5 12.25C3.5 17.0825 7.41751 21 12.25 21C17.0825 21 21 17.0825 21 12.25Z"
                stroke="#5644FC"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></a>
          <a href=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M12.8333 3.5H15.1667C15.811 3.5 16.3333 4.02233 16.3333 4.66667V5.33025C16.3333 5.82935 16.6683 6.26296 17.1293 6.45433C17.5904 6.64578 18.1273 6.57281 18.4803 6.21977L18.9497 5.75039C19.4053 5.29478 20.144 5.29478 20.5996 5.75039L22.2495 7.40031C22.7051 7.85592 22.7051 8.59461 22.2495 9.05022L21.7802 9.51953C21.4271 9.87261 21.3542 10.4095 21.5456 10.8707C21.737 11.3317 22.1707 11.6667 22.6698 11.6667L23.3333 11.6667C23.9777 11.6667 24.5 12.189 24.5 12.8333V15.1667C24.5 15.811 23.9777 16.3333 23.3333 16.3333H22.6698C22.1707 16.3333 21.737 16.6683 21.5457 17.1293C21.3542 17.5904 21.4272 18.1273 21.7802 18.4804L22.2496 18.9497C22.7052 19.4053 22.7052 20.144 22.2496 20.5996L20.5996 22.2496C20.144 22.7052 19.4053 22.7052 18.9497 22.2496L18.4804 21.7802C18.1273 21.4272 17.5904 21.3542 17.1293 21.5457C16.6683 21.737 16.3333 22.1707 16.3333 22.6698V23.3333C16.3333 23.9777 15.811 24.5 15.1667 24.5H12.8333C12.189 24.5 11.6667 23.9777 11.6667 23.3333V22.6698C11.6667 22.1707 11.3317 21.737 10.8707 21.5456C10.4095 21.3542 9.8726 21.4271 9.51953 21.7802L9.05021 22.2495C8.59459 22.7052 7.8559 22.7052 7.40029 22.2495L5.75037 20.5996C5.29476 20.144 5.29476 19.4053 5.75037 18.9497L6.21977 18.4803C6.57281 18.1273 6.64578 17.5904 6.45433 17.1293C6.26296 16.6683 5.82935 16.3333 5.33025 16.3333H4.66667C4.02233 16.3333 3.5 15.811 3.5 15.1667V12.8333C3.5 12.189 4.02233 11.6667 4.66667 11.6667L5.33023 11.6667C5.82934 11.6667 6.26296 11.3317 6.45434 10.8707C6.6458 10.4096 6.57283 9.87267 6.21977 9.51961L5.75039 9.05023C5.29478 8.59462 5.29478 7.85592 5.75039 7.40031L7.40031 5.7504C7.85592 5.29479 8.59461 5.29479 9.05023 5.7504L9.5196 6.21977C9.87266 6.57283 10.4096 6.6458 10.8707 6.45434C11.3317 6.26296 11.6667 5.82934 11.6667 5.33022V4.66667C11.6667 4.02233 12.189 3.5 12.8333 3.5Z"
                stroke="#5644FC"
                stroke-width="2.6"
              />
              <path
                d="M16.3333 14C16.3333 15.2887 15.2887 16.3333 14 16.3333C12.7113 16.3333 11.6667 15.2887 11.6667 14C11.6667 12.7113 12.7113 11.6667 14 11.6667C15.2887 11.6667 16.3333 12.7113 16.3333 14Z"
                stroke="#5644FC"
                stroke-width="2.6"
              /></svg
          ></a>
        </div>
      </div>
    </div>
    <div class="pitch-chat">
      <div class="pitch-chat__you">
         <img src="@/assets/julia.png" alt="" />
        <div class="chat-indiv">
          <div class="chat-indiv__title you">
            <div class="chat-indiv__title-name room-name ">You</div>
            <div class="chat-indiv__title-time room-num">9:16 AM</div>
          </div>
          <div class="chat-indiv__block purple-block message">Morning, everyone!</div>
        </div>
      </div>
      <div
        class="pitch-chat__users chat"
        v-for="(user, index) in users.slice(1)"
        :key="index + 1"
      >
        <img :src="user.picture" alt="" />
        <div class="chat-indiv">
          <div class="chat-indiv__title">
            <div class="chat-indiv__title-name room-name">{{ user.name }}</div>
            <div class="chat-indiv__title-time room-num">{{ user.time }}</div>
          </div>
          <div class="chat-indiv__block purple-block">{{ user.message }}</div>
        </div>
      </div>
       <div class="pitch-chat__you">
         <img src="@/assets/julia.png" alt="" />
        <div class="chat-indiv">
          <div class="chat-indiv__title you">
            <div class="chat-indiv__title-name room-name ">You</div>
            <div class="chat-indiv__title-time room-num">9:23 AM</div>
          </div>
          <div class="chat-indiv__block purple-block message">Sounds like we've got a busy day ahead. Let's dive into it!</div>
        </div>
      </div>
    </div>
    <div class="pitch-field">
      <ChatTextarea placeholder="write something..."/>
    </div>
  </div>
</template>
<script setup>
import ChatTextarea from "@/components/ui/ChatTextarea.vue";
import { ref } from "vue";
const users = ref([
  {
    name: "Julia",
    time: "09:16 AM",
    picture: require("@/assets/julia.png"),
  },
  {
    name: "Amanda",
    time: "09:19 AM",
    picture: require("@/assets/amanda.png"),
    message: " Morning! Ready to tackle some stories today?",
  },
  {
    name: "Selina",
    time: "09:20 AM",
    picture: require("@/assets/selina.png"),
    message:
      "Absolutely, I've got a lead on that environmental piece we discussed last week.",
  },
  {
    name: "Rin",
    time: "09:22 AM",
    picture: require("@/assets/rin.png"),
    message:
      "Hey there, folks! I'm following up on that tech expo happening next month. Exciting stuff!",
  },
  // Add more alert objects here
]);
</script>
<style lang="scss" scoped>

@import "../../assets/style/style.scss";
.pitch {
  width: 587px;
  height: 819px;
  &-head {
    &__room {
      @include flex-between;
      align-items: center;
      padding: 14px 23px;
      border-bottom: 1px solid rgba(21, 19, 61, 0.16);
      &-img {
        display: flex;
            align-items: center;
      }
      &-link {
        display: flex;
        gap: 26px;
      }
    }
  }
  &-chat {
     &__you {
      margin-top:30px;
    display: flex;
    flex-direction: row-reverse;
        align-items: center;
        & img {
          margin-left: 14px;
        }
  }
  }
  &-field {
    margin-top:57px;
  }
}
.users-pic {
    width: 45.16px!important;
    height: 45.16px!important;
    border-radius: 50%;
    margin-right: -10px;

}
.room {
  @include flex-column;
  align-items: center;

  margin-left: 35px;
  &-name {
    font-size: 16px;
    font-weight: 700;
    color: $dark-text;
  }
  &-num {
    color: $purple-text;

    font-size: 10px;
    font-weight: 700;
  }
}
svg:hover {
  opacity: 0.1;
}
.chat {
  display: flex;
  align-items: center;
  margin-top: 40px;
  & img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }
  &-indiv {
    margin-left: 14px;
    &__title {
      display: flex;
      align-items: end;
      &-time {
        margin-bottom: 2px;
        margin-left: 12px;
      }
    }
    &__block {
      width: 316px;
      height: 57px;
      color: $dark-text;
      font-size: 12px;
      font-weight: 400;
      @include center-align;
      padding: 10px 17px;
    }
  }

}
.you {
  display: flex;
    justify-content: right;

}
.message {
  display: flex;
    justify-content: left;
}

</style>