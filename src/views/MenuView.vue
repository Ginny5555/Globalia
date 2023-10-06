<template>
  <div class="menu">
    <div class="menu-logo">
      <img src="../assets/logo.svg" alt="" />
      <div>Globalia</div>
    </div>
    <div class="menu-items">
      <nav>
        <router-link to="/"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M7.875 3.5C4.52941 3.5 3.5 4.52941 3.5 7.875C3.5 11.2206 4.52941 12.25 7.875 12.25C11.2206 12.25 12.25 11.2206 12.25 7.875C12.25 4.52941 11.2206 3.5 7.875 3.5Z"
              stroke="#A3A1FF"
              stroke-width="2.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.875 15.75C4.52941 15.75 3.5 16.7794 3.5 20.125C3.5 23.4706 4.52941 24.5 7.875 24.5C11.2206 24.5 12.25 23.4706 12.25 20.125C12.25 16.7794 11.2206 15.75 7.875 15.75Z"
              stroke="#A3A1FF"
              stroke-width="2.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.125 15.75C16.7794 15.75 15.75 16.7794 15.75 20.125C15.75 23.4706 16.7794 24.5 20.125 24.5C23.4706 24.5 24.5 23.4706 24.5 20.125C24.5 16.7794 23.4706 15.75 20.125 15.75Z"
              stroke="#A3A1FF"
              stroke-width="2.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.125 3.5C16.7794 3.5 15.75 4.52941 15.75 7.875C15.75 11.2206 16.7794 12.25 20.125 12.25C23.4706 12.25 24.5 11.2206 24.5 7.875C24.5 4.52941 23.4706 3.5 20.125 3.5Z"
              stroke="#A3A1FF"
              stroke-width="2.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>Dashboard</div></router-link
        >
        <router-link to="/alerts"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M10.875 21.1458V22.3542C10.875 24.3562 12.498 25.375 14.5 25.375C16.5021 25.375 18.125 24.3562 18.125 22.3542V21.1458M7.25001 10.2708C7.25001 6.26677 10.4959 4.22917 14.5 4.22917C18.5041 4.22917 21.75 6.26677 21.75 10.2708C21.75 12.614 22.602 15.2411 23.4798 17.3262C24.2087 19.0575 22.9852 21.1458 21.1067 21.1458H7.8933C6.01484 21.1458 4.79129 19.0575 5.52019 17.3262C6.39806 15.2411 7.25001 12.614 7.25001 10.2708Z"
              stroke="#A3A1FF"
              stroke-width="2.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>All alerts</div></router-link
        >
        <router-link to="/chat"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M10 11.875H18.75M10 16.875H16.25M19.6191 24.0397L23.8784 25.4595C24.8556 25.7852 25.7853 24.8555 25.4595 23.8783L24.0398 19.6191M19.125 23.8751C19.125 23.8751 17.6059 25 14.375 25C8.50697 25 3.75 20.243 3.75 14.375C3.75 8.50697 8.50697 3.75 14.375 3.75C20.243 3.75 25 8.50697 25 14.375C25 17.5 23.875 19.1251 23.875 19.1251"
              stroke="#A3A1FF"
              stroke-width="2.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>Chat</div></router-link
        >
        <router-link to="/myprofile"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <path
              d="M23.25 24.1571C23.25 20.2412 18.7292 19.375 15.5 19.375C12.2708 19.375 7.75 20.2412 7.75 24.1571M27.125 15.5C27.125 21.9203 21.9203 27.125 15.5 27.125C9.07969 27.125 3.875 21.9203 3.875 15.5C3.875 9.07969 9.07969 3.875 15.5 3.875C21.9203 3.875 27.125 9.07969 27.125 15.5ZM19.375 11.625C19.375 13.7651 17.6401 15.5 15.5 15.5C13.3599 15.5 11.625 13.7651 11.625 11.625C11.625 9.4849 13.3599 7.75 15.5 7.75C17.6401 7.75 19.375 9.4849 19.375 11.625Z"
              stroke="#A3A1FF"
              stroke-width="2.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>My profile</div></router-link
        >
        <router-link to="/settings"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <path
              d="M5.16669 6.45833L12.9167 6.45833M12.9167 6.45833C12.9167 7.88507 14.0733 9.04167 15.5 9.04167C16.9268 9.04167 18.0834 7.88507 18.0834 6.45833M12.9167 6.45833C12.9167 5.0316 14.0733 3.875 15.5 3.875C16.9268 3.875 18.0834 5.0316 18.0834 6.45833M18.0834 6.45833L25.8334 6.45833M5.16669 15.5L20.6667 15.5M20.6667 15.5C20.6667 16.9267 21.8233 18.0833 23.25 18.0833C24.6768 18.0833 25.8334 16.9267 25.8334 15.5C25.8334 14.0733 24.6768 12.9167 23.25 12.9167C21.8233 12.9167 20.6667 14.0733 20.6667 15.5ZM10.3334 24.5417L25.8334 24.5417M10.3334 24.5417C10.3334 23.1149 9.17676 21.9583 7.75002 21.9583C6.32329 21.9583 5.16669 23.1149 5.16669 24.5417C5.16669 25.9684 6.32328 27.125 7.75002 27.125C9.17676 27.125 10.3334 25.9684 10.3334 24.5417Z"
              stroke="#A3A1FF"
              stroke-width="2.6"
              stroke-linecap="round"
            />
          </svg>
          <div>Settings</div></router-link
        >
      </nav>
    </div>
    <div class="menu-notification">
      <div class="menu-notification__bell">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
        >
          <path
            d="M25.5484 54.2581C25.5484 58.5335 29.0149 62 33.2903 62C37.5658 62 41.0323 58.5335 41.0323 54.2581"
            stroke="white"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M33.2903 7.80646C23.669 7.80646 15.871 15.6045 15.871 25.2258V42.6452L12 48.4516V54.2581H54.5806V48.4516L50.7097 42.6452V25.2258C50.7097 15.6045 42.9116 7.80646 33.2903 7.80646Z"
            stroke="white"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M15.871 42.6452H37.1613"
            stroke="white"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M41.0323 42.6452H44.9033"
            stroke="white"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M33.2903 2C31.1516 2 29.4194 3.73226 29.4194 5.87097V9.74194H37.1613V5.87097C37.1613 3.73226 35.429 2 33.2903 2Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="menu-notification__block">
        <div>Enable notifications for your <span> Globalia Mobile.</span></div>
        <CustomButton>
          <template #text>ACTIVATE</template>
        </CustomButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";



</script>
<style lang="scss" >
@import '../assets/style/style.scss';

.menu {
  width: 276px;
  background-color: $white;
  padding: 45px 0 62px 36px;
  @include flex-column;
      border-radius: 40px 0 0 40px;
  &-logo {
    margin-bottom: 101px;
    & img {
      width: 67px;
      height: 67px;
      margin-right: 20px;
    }
    display: inline-flex;
    align-items: center;
    color: $dark-text;

    font-size: 24px;

    font-weight: 700;
  }
  &-items nav {
    @include flex-column;
    & a:hover {
      color: $dark-text;
    }
    & a {
      color: $purple-text;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;

      letter-spacing: 3.22px;
      display: flex;
      align-items: center;
      margin-bottom: 61px;
      &:hover svg path {
        stroke: #5644fc;
      }
      & div {
        justify-content: space-between;
        width: 100%;
      }
      & svg {
        margin-right: 24px;
      }
      &.router-link-active.router-link-exact-active {
        color: $dark-text;
        &::after {
          content: "";
          border-radius: 20px 0px 0px 20px;
          background: #5644fc;
          width: 8px;
          height: 23px;
        }
      }
      &.router-link-active.router-link-exact-active svg path {
        stroke: #5644fc;
      }
    }
  }
  &-notification {
    width: 211px;
    height: 172px;
    background-color: $light-purpl;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: 64px;
    color: $purple-text;
    text-align: center;
    font-size: 12px;
position:relative;
    font-weight: 400;
    & span {
      color: $dark-text;

      font-size: 12px;
      font-weight: 700;
    }

    & button {
      padding: 9px 50px;
      margin: 18px 0 22px 0;
    }
    &__bell {
      width: 94px;
      height: 94px;
      border-radius: 50%;
      background-color: $purple;
      @include center-align;
      position: absolute;
     top: -23%;
    }
  }
}
</style>