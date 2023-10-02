<template>
  <MainLayout>
    <div class="dashboard">
      <div class="searchline">
        <SearchLine/>
      </div>
      <div class="welcome">
        <div class="welcome-title">
          <h2>Welcome back, Julia!</h2>
          <div class="welcome-title__today">
            Today is <b>October 3, 2023.</b> You have <b>126</b> news and
            alerts, along with <b>3</b> messages awaiting your response.
          </div>
        </div>
        <div class="welcome-img">
          <img src="../assets/journalist.png" alt="" />
        </div>
      </div>
      <div class="wigets">
        <WigetsWeather />
        <WigetsActivity />
        <WigetsDraft />
      </div>
      <div class="review">
        <ReviewSlider />
        <ReviewLatest />
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import ReviewLatest from "@/components/ui/ReviewLatest.vue";
import ReviewSlider from "@/components/ui/ReviewSlider.vue";
import WigetsWeather from "@/components/ui/WigetsWeather.vue";
import WigetsActivity from "@/components/ui/WigetsActivity.vue";
import WigetsDraft from "@/components/ui/WigetsDraft.vue";
import SearchLine from "@/components/ui/SearchLine.vue";

import MainLayout from "@/layout/MainLayout.vue";
</script>

<style  lang="scss">
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
