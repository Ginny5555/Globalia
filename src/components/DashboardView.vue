<template>
  <MainLayout>
    <div class="dashboard">
      <div class="searchline">
        <SearchLine></SearchLine>
      </div>
      <div class="welcome">
        <div class="welcome-title">
          <h2>Welcome back, Julia!</h2>
          <div class="welcome-title__today">
            Today is <b>October 3, 2023.</b> You have <b>126</b> news and alerts,
            along with <b>3</b> messages awaiting your response.
          </div>
        </div>
        <div class="welcome-img">
          <img src="../assets/journalist.png" alt=""/>
        </div>
      </div>
      <div class="wigets">
        <div class="wigets-weather white-box">
          <div class="wigets-weather__title">
            <h3>Weather</h3>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
              <path
                  d="M12 12V21M12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C18.9656 7.65184 19.774 9.36728 19.9592 11.1923C19.9967 11.5621 19.6088 11.8044 19.2764 11.6382L18.2236 11.1118C18.0828 11.0414 17.9172 11.0414 17.7764 11.1118L16.2236 11.8882C16.0828 11.9586 15.9172 11.9586 15.7764 11.8882L14.2236 11.1118C14.0828 11.0414 13.9172 11.0414 13.7764 11.1118L12.2236 11.8882C12.0828 11.9586 11.9172 11.9586 11.7764 11.8882L10.2236 11.1118C10.0828 11.0414 9.91716 11.0414 9.7764 11.1118L8.22361 11.8882C8.08285 11.9586 7.91716 11.9586 7.7764 11.8882L6.22361 11.1118C6.08285 11.0414 5.91716 11.0414 5.7764 11.1118L4.72361 11.6382C4.39116 11.8044 4.00334 11.5621 4.04085 11.1923C4.226 9.36727 5.03445 7.65184 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4ZM12 4L12 3"
                  stroke="#15133D"
                  stroke-width="2.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="wigets-weather__img">
            <div>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="85"
                  height="85"
                  viewBox="0 0 85 85"
                  fill="none"
              >
                <path
                    d="M31.875 31.875C31.875 20.1389 41.389 10.625 53.125 10.625C64.861 10.625 74.375 20.1389 74.375 31.875C74.375 39.7403 70.1016 45.9092 63.75 49.5833"
                    stroke="#5644FC"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M29.4093 26.5625C27.5436 25.4383 25.3577 24.7917 23.0208 24.7917C16.1748 24.7917 10.625 30.3415 10.625 37.1875C10.625 44.0335 16.1748 49.5833 23.0208 49.5833H63.75"
                    stroke="#5644FC"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M63.75 60.2083V74.375"
                    stroke="#5644FC"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M53.125 70.8333V74.375"
                    stroke="#5644FC"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M53.125 49.5833V60.2083"
                    stroke="#5644FC"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M42.5 56.6667V70.8333"
                    stroke="#5644FC"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M31.875 70.8333V74.375"
                    stroke="#5644FC"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M31.875 49.5833V60.2083"
                    stroke="#5644FC"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M21.25 60.2083V74.375"
                    stroke="#5644FC"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="wigets-weather__img-temperature">16° (Rain)</div>
          </div>
          <div class="wigets-weather__location purple-block">
            <div class="location">
              <div class="title">Austin, TX (USA)</div>
              <div class="date">October 3rd, 2023</div>
            </div>
            <button class="circle">
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
            </button>
          </div>
        </div>

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
                  <img :src="colegue.picture" alt=""/>
                </div>
                <div class="title">{{ colegue.title }}</div>
              </div>
              <div class="colegues-date date">{{ colegue.date }}</div>
            </div>

          </div>
        </div>

        <div class="wigets-draft white-box">
          <div class="wigets-draft__title">
            <h3>Quick Draft</h3>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
              <path
                  d="M12.4445 19.6875H20.9445M14.4443 5.68747L5.44587 14.6859C4.78722 15.3446 4.26719 16.1441 4.10888 17.062C3.94903 17.9888 3.89583 19.139 4.44432 19.6875C4.99281 20.236 6.14299 20.1828 7.0698 20.0229C7.98772 19.8646 8.78722 19.3446 9.44587 18.6859L18.4443 9.68747M14.4443 5.68747C14.4443 5.68747 17.4443 2.68747 19.4443 4.68747C21.4443 6.68747 18.4443 9.68747 18.4443 9.68747M14.4443 5.68747L18.4443 9.68747"
                  stroke="#15133D"
                  stroke-width="2.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="wigets-draft__textarea">
            <div>
              <CustomTextarea
                  v-model="inputValue"
                  id="draft"
                  placeholder="Write something..."
              />
            </div>
          </div>
          <CustomButton>
            <template #text>continue</template>
          </CustomButton>
        </div>
      </div>
      <div class="review">
        <div class="review-slider">
          <CustomSlider class="image-slider"
                        :images="images"
                        :texts="textBlocks"/>
        </div>

        <div class="review-latest white-box">
          <div class="review-latest__title">
            <h3>Colleagues’ Activity</h3>
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
          <div class="review-latest__purple">
            <div class="review-latest__purple-block purple-block" v-for="(review, index) in reviews" :key="index">
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
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import {ref} from "vue";
import SearchLine from "@/components/ui/SearchLine.vue";
import CustomTextarea from "@/components/ui/CustomTextarea.vue";
import CustomButton from "@/components/ui/CustomButton.vue";
import CustomSlider from "@/components/ui/CustomSlider.vue";
import MainLayout from "@/layout/MainLayout.vue";

const inputValue = ref("");
const images = [
  require("@/assets/anna.png"), // Use @ to refer to the src directory
  require("@/assets/anna.png"),
  require("@/assets/anna.png"),
  // Добавьте пути к вашим изображениям здесь
];
const reviews = ref([
  {
    title: 'Calipso Sensations',
    number: '7.2',

  },
  {
    title: 'V Tech Mattee',
    number: '9.1',
  },
  {
    title: 'Emerald V6',
    number: '7.9',
  },
  // Add more alert objects here
]);
const colegues = ref([
  {
    title: 'Amanda Lock',
    date: 'October 2, 2023 - 10:42 PM',
    picture: require("@/assets/amanda.png"),
  },
  {
    title: 'Selina Fye',
    date: 'October 2, 2023 - 09:16 PM',
    picture: require("@/assets/selina.png"),
  },
  {
    title: 'Rin Vulcan',
    date: 'October 2, 2023 - 05:23 PM',
    picture: require("@/assets/rin.png"),
  },
  // Add more alert objects here
]);
const textBlocks = [
  "Humanity’s fashion reached its zenith during the Vectorian era; unfortunately, it was during this very time that its decline began. Now, it has finally hit rock bottom...",

  "Title for Image 2",

  "Title for Image 3",
];

</script>

<style lang="scss">
@import "../assets/style/style.scss";

.dashboard {
  margin: 49px 20px;
}

.date {
  color: $purple-text;
  font-size: 7px;
  font-weight: 700;
}

.title {
  color: $dark-text;

  font-size: 12px;

  font-weight: 700;
}

.welcome {
  @include flex-between;
  width: 848px;
  height: 137px;
  margin-top: 63px;

  border-radius: 20px;
  background: $purple;
  box-shadow: 0px 4px 6px 0px rgba(163, 161, 255, 0.16);

  &-img {
    & img {
      margin-top: -20%;
      margin-left: -6%;
    }
  }

  &-title {
    margin-left: 48px;

    & h2 {
      font-size: 16px;
      margin-top: 30px;
      color: $white;
      font-weight: 700;
    }

    &__today {
      width: 425px;
      color: $white;

      font-size: 14px;

      font-weight: 400;
    }
  }
}

.wigets {
  margin-top: 35px;
  @include flex-between;

  &-weather {
    @include flex-column;
    justify-content: space-between;
    padding: 16px 14px;
    width: 240px;
    height: 251px;
    box-sizing: border-box;

    &__img {
      margin: 0 auto;
      color: $purple;
      font-size: 16px;
      font-weight: 700;
    }

    &__title {
      @include flex-between;
      padding: 11px 10px;
    }

    &__location {
      @include flex-between;
      box-sizing: border-box;
      align-items: center;
      padding: 10px;
      width: 210px;
      height: 51px;
      margin: 0 auto;

      & button {
        width: 30px;
        height: 30px;
      }
    }
  }

  &-activity {
    width: 327px;
    height: 252px;
    box-sizing: border-box;
    padding: 27px 24px;
    @include flex-between;
    flex-direction: column;

    &__title {
      @include flex-between;
      margin-bottom: 22px;
    }

    &__colegues {
      gap: 11px;
      @include flex-column;
    }
  }

  &-draft {
    width: 240px;
    height: 251px;
    padding: 27px 24px;
    box-sizing: border-box;
    @include flex-between;
    flex-direction: column;

    &__title {
      @include flex-between;
    }

    & button {
      width: 188px;
      height: 33px;
    }
  }
}

.review {
  @include flex-between;
  margin-top: 32px;

  &-latest {
    width: 414px;
    height: 243px;
    padding: 16px 14px;

    box-sizing: border-box;

    &__purple {
      box-sizing: border-box;
      @include flex-column;
      gap: 9px;

      &-block {
        width: 374px;
        box-sizing: border-box;
        height: 47px;
        @include flex-between;
        align-items: center;
        padding: 5px 9px;

        & .circle {
          width: 37px;
          height: 37px;
          color: $white;

          font-size: 14px;

          font-weight: 700;
          @include center-align;
        }

        & button {
          width: 123px;
          height: 25px;
        }
      }
    }

    &__title {
      @include flex-between;
      padding: 11px 10px;
    }
  }
}

textarea#draft {
  width: 188px !important;
  height: 109px;
  box-sizing: border-box;
}

.colegues {
  @include center-align;
  justify-content: space-between;
  width: 271px;
  height: 44px;
  padding: 7px;
  box-sizing: border-box;

  &-block {
    @include center-align;
  }

  &-date {
    margin-right: 7px;
  }

  &-image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    margin-right: 10px;

    & img {
      width: 100%;
      height: auto;
      -o-object-fit: cover;
      object-fit: cover;
      margin-right: 5px;
    }
  }
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

textarea {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  resize: vertical;

  &::placeholder {
    color: $purple-text;

    font-size: 10px;
    font-style: italic;
    font-weight: 700;
  }
}

.image-slider {
  width: 414px;
  height: 243px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
}

// .image-anna {
//   background-image: url('../assets/anna.png');
// }
.circle {
  margin-right: 20px;

  &-title {
    @include center-align;
  }
}
</style>
