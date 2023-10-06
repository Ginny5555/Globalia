<template>
  <div class="profile">
    <div class="profile-preview">
      <div class="profile-preview__logout">
        <a href="#">Logout</a>
        <a href="#"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M9.16669 11H18.3334M18.3334 11L15.5834 8.25M18.3334 11L15.5834 13.75"
              stroke="#15133D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.66669 11C3.66669 6.9499 6.94993 3.66666 11 3.66666M11 18.3333C8.68417 18.3333 6.61904 17.2598 5.2751 15.5833"
              stroke="#15133D"
              stroke-width="2"
              stroke-linecap="round"
            /></svg
        ></a>
      </div>
      <div class="profile-preview__info">
        <div class="profile-preview__info-picture">

            <img class="info-picture" src="../assets/julia.png" alt="" />

          <router-link to="/settingsprofile" class="info-settings circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M8.70833 2.375H10.2917C10.7289 2.375 11.0833 2.72944 11.0833 3.16667V3.61696C11.0833 3.95563 11.3106 4.24986 11.6234 4.37973C11.9363 4.50964 12.3007 4.46012 12.5402 4.22056L12.8587 3.90205C13.1679 3.59289 13.6691 3.59289 13.9783 3.90205L15.0979 5.02164C15.4071 5.3308 15.4071 5.83206 15.0979 6.14122L14.7794 6.45968C14.5399 6.69927 14.4903 7.06362 14.6203 7.37655C14.7501 7.68935 15.0444 7.91667 15.3831 7.91667L15.8333 7.91667C16.2706 7.91667 16.625 8.27111 16.625 8.70833V10.2917C16.625 10.7289 16.2706 11.0833 15.8333 11.0833H15.3831C15.0444 11.0833 14.7501 11.3106 14.6203 11.6234C14.4904 11.9364 14.5399 12.3007 14.7794 12.5403L15.0979 12.8587C15.4071 13.1679 15.4071 13.6692 15.0979 13.9783L13.9783 15.0979C13.6692 15.4071 13.1679 15.4071 12.8587 15.0979L12.5403 14.7794C12.3007 14.5399 11.9364 14.4904 11.6234 14.6203C11.3106 14.7501 11.0833 15.0444 11.0833 15.3831V15.8333C11.0833 16.2706 10.7289 16.625 10.2917 16.625H8.70833C8.27111 16.625 7.91667 16.2706 7.91667 15.8333V15.3831C7.91667 15.0444 7.68935 14.7501 7.37655 14.6203C7.06362 14.4903 6.69927 14.5399 6.45968 14.7794L6.14121 15.0979C5.83205 15.4071 5.33079 15.4071 5.02163 15.0979L3.90204 13.9783C3.59287 13.6692 3.59287 13.1679 3.90204 12.8587L4.22056 12.5402C4.46012 12.3007 4.50964 11.9363 4.37973 11.6234C4.24986 11.3106 3.95563 11.0833 3.61696 11.0833H3.16667C2.72944 11.0833 2.375 10.7289 2.375 10.2917V8.70833C2.375 8.27111 2.72944 7.91667 3.16667 7.91667L3.61694 7.91667C3.95562 7.91667 4.24986 7.68936 4.37973 7.37656C4.50965 7.06365 4.46014 6.69931 4.22056 6.45973L3.90205 6.14123C3.59289 5.83206 3.59289 5.33081 3.90205 5.02164L5.02164 3.90206C5.3308 3.59289 5.83206 3.59289 6.14122 3.90206L6.45973 4.22056C6.69931 4.46014 7.06365 4.50965 7.37656 4.37973C7.68936 4.24986 7.91667 3.95562 7.91667 3.61694V3.16667C7.91667 2.72944 8.27111 2.375 8.70833 2.375Z"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M11.0833 9.5C11.0833 10.3745 10.3745 11.0833 9.5 11.0833C8.62555 11.0833 7.91667 10.3745 7.91667 9.5C7.91667 8.62555 8.62555 7.91667 9.5 7.91667C10.3745 7.91667 11.0833 8.62555 11.0833 9.5Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </router-link>
        </div>
        <div class="profile-preview__info-name">
          <h3>Julia Grey</h3>
          <div class="vocation">Chief Editor</div>
        </div>
      </div>
    </div>
    <div class="profile-total">
      <div class="profile-total__num purple-block">
        <div class="svg-block">
          <div class="profile-total__num-circle circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M19.9833 4.125C19.7083 3.48334 19.1583 2.93334 18.5167 2.65834C17.1417 2.10834 15.5833 2.75 14.9417 4.03334L10.725 13.475C10.3583 14.3 10.2667 15.3083 10.3583 16.1333L10.725 18.15C10.8167 18.425 11 18.7 11.275 18.7917C11.3667 18.8833 11.55 18.8833 11.6417 18.8833C11.825 18.8833 12.0083 18.7917 12.1 18.7L13.8417 17.6C14.6667 17.05 15.2167 16.4083 15.5833 15.4917L19.8 6.05C20.2583 5.5 20.2583 4.76667 19.9833 4.125ZM14.1167 14.9417C13.8417 15.4917 13.475 15.8583 13.0167 16.225L12.375 16.5917L12.2833 15.95C12.1917 15.4 12.2833 14.85 12.4667 14.3L15.675 6.96667L17.325 7.60834L14.1167 14.9417ZM18.3333 5.40834L18.15 5.86667L16.5 5.225L16.6833 4.76667C16.8667 4.4 17.1417 4.21667 17.5083 4.21667C17.6 4.21667 17.7833 4.21667 17.875 4.30834C18.0583 4.4 18.2417 4.58334 18.3333 4.76667C18.425 5.04167 18.425 5.225 18.3333 5.40834Z"
                fill="white"
              />
              <path
                d="M2.75001 15.5833H6.41668C6.96668 15.5833 7.33334 15.2167 7.33334 14.6667C7.33334 14.1167 6.96668 13.75 6.41668 13.75H2.75001C2.20001 13.75 1.83334 14.1167 1.83334 14.6667C1.83334 15.2167 2.20001 15.5833 2.75001 15.5833Z"
                fill="white"
              />
              <path
                d="M8.25001 17.4167H2.75001C2.20001 17.4167 1.83334 17.7833 1.83334 18.3333C1.83334 18.8833 2.20001 19.25 2.75001 19.25H8.25001C8.80001 19.25 9.16668 18.8833 9.16668 18.3333C9.16668 17.7833 8.80001 17.4167 8.25001 17.4167Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <h3>Articles</h3>
            <p>Total Published Pieces</p>
          </div>
        </div>
        <div class="num">126</div>
      </div>
      <div class="profile-total__num purple-block">
        <div class="svg-block">
          <div class="profile-total__num-circle circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.9445 14.1875L9.94446 10.1875M13.9445 14.1875L8.946 19.1859C8.28735 19.8446 7.48784 20.3646 6.56993 20.5229C5.64311 20.6828 4.49294 20.736 3.94444 20.1875C3.39595 19.639 3.44915 18.4888 3.609 17.562C3.76731 16.6441 4.28735 15.8446 4.946 15.1859L9.94446 10.1875M13.9445 14.1875C13.9445 14.1875 16.9444 11.1875 14.9444 9.1875C12.9444 7.1875 9.94446 10.1875 9.94446 10.1875M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3>Reviews</h3>
            <p>Total Product Reviews</p>
          </div>
        </div>
        <div class="num">1.37K</div>
      </div>
    </div>
 <div class="profile-latest">
    <div class="profile-latest__title">
      <h3>Latest Alerts</h3>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M8.51611 18.086C8.51611 19.5112 9.6716 20.6667 11.0968 20.6667C12.5219 20.6667 13.6774 19.5112 13.6774 18.086"
            stroke="#15133D"
            stroke-width="1.6"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M11.0968 2.60215C7.88968 2.60215 5.29032 5.20151 5.29032 8.4086V14.2151L4 16.1505V18.086H18.1935V16.1505L16.9032 14.2151V8.4086C16.9032 5.20151 14.3039 2.60215 11.0968 2.60215Z"
            stroke="#15133D"
            stroke-width="1.6"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M5.29034 14.2151H12.3871"
            stroke="#15133D"
            stroke-width="1.6"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M13.6774 14.2151H14.9678"
            stroke="#15133D"
            stroke-width="1.6"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          />
          <path
            d="M11.0968 0.666667C10.3839 0.666667 9.80646 1.24409 9.80646 1.95699V3.24731H12.3871V1.95699C12.3871 1.24409 11.8097 0.666667 11.0968 0.666667Z"
            fill="#15133D"
          />
          <circle cx="17" cy="6" r="3" fill="#FF5353" />
        </svg>
    </div>
    <div class="profile-latest__alerts">
      <div class="block-alert purple-block" v-for="(alert, index) in alerts" :key="index">
        <div class="block-alert__picture">
          <img :src="alert.picture" alt="" />
        </div>
        <div class="block-alert__title">
          <div class="block-alert__title-head">{{ alert.title }}</div>
          <div class="block-alert__title-date">{{ alert.date }}</div>
        </div>
      </div>
    </div>
    <div class="profile-latest__button">
      <button>{{ remainingAlerts }} MORE ALERTS</button>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const alerts = ref([
  {
    title: 'Upcoming Elections...',
    date: '3 October, 2023 - 07:26 AM',
    picture:   require("@/assets/alerts.png"),
  },
  {
    title: 'Upcoming Elections...',
    date: '3 October, 2023 - 07:26 AM',
    picture:   require("@/assets/alerts.png"),
  },
  {
    title: 'Upcoming Elections...',
    date: '3 October, 2023 - 07:26 AM',
    picture:   require("@/assets/alerts.png"),
  },
  // Add more alert objects here
]);

const maxAlertsToShow = 4;

const remainingAlerts = computed(() => {
  return alerts.value.length - maxAlertsToShow;
});
</script>


<style lang="scss" >
@import '../assets/style/style.scss';
h3 {
  color: $dark-text;
  font-size: 14px;
  font-weight: 700;
  margin: 0;
}
.num {
  font-size: 20px;
  font-weight: 700;
  color: $purple;
  margin-right: 12px;
}

.svg-block {
  display: flex;
}

.block-alert {
  display: flex;
  align-items: center;
  &__picture {
    width: 51px;
    height: 51px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-right: 10px;
    & img {
      width: 100%; /* Make the image fill the circle */
      height: auto; /* Maintain the image's aspect ratio */
      object-fit: cover; /* Cover the entire circle with the image */
    }
  }
  &__title {
    &-head {
      font-size: 12px;

      font-weight: 700;
      color: $dark-text;
    }
    &-date {
      font-size: 7px;

      font-weight: 700;
      color: $purple-text;
    }
  }
}
.profile {
  width: 240px;
  height: 819px;
  border-radius: 20px;
  background: $white;
  box-shadow: 0px 4px 6px 0px rgba(86, 68, 252, 0.06);
  margin: 49px 0 62px 0;
  @include flex-column;
  justify-content: space-between;
  &-preview {
    &__logout {
      margin: 21px;
      display: flex;
      justify-content: space-between;
      & a {
        color: $dark-text;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
      }
      & svg:hover path {
        stroke: $purple;
      }
    }
    &__info {
      &-picture {
        @include center-align;
        flex-direction: column;
        position:relative;
      }
      &-name {
        @include center-align;
        flex-direction: column;
        margin-top: 20px;
      }
    }
  }
  &-total {
    gap: 9px;
    display: flex;
    flex-direction: column;
    margin-top: 36px;
    &__num {
      width: 218px;
      height: 55px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: 0 auto;
      &-circle {
        @include center-align;
        width: 32px;
        height: 32px;
        margin: 0 7px 0 12px;
      }
      & p {
        color: $purple-text;
        font-size: 7px;
        font-weight: 700;
        margin: 0;
      }
    }
  }
  &-latest {
    margin-top: 53px;
    @include flex-column;
    align-items: center;
    &__title {
      display: flex;
      justify-content: space-between;
      margin: 0 27px;
      & svg {
        width: 22px;
        height: 22px;
      }
    }
    &__button button{
      border-radius: 20px 20px 0px 0px;
      background: #5644fc;
      text-align: center;
      width:162px;
      height: 22px;

      font-size: 7px;
letter-spacing: 1.82px;
    }
    &__alerts {
      margin:20px 20px;
      gap:20px;
      @include flex-column;
    }
  }
}
.vocation {
  color: $purple-text;
  font-size: 10px;
  font-weight: 700;
}
.info {
  &-picture {
    width: 111px;
    height: 111px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;

  }
  &-settings {
    width: 33px;
    height: 33px;

    @include center-align;
    position: absolute;
    top: 76%;
    left: 53%;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>