<template>
  <div class="navig">
    <div class="navig-items">
      <div class="" v-for="(nav, index) in navs" :key="index">
        <nav>
          <router-link to="">{{ nav.title }}</router-link>
        </nav>
      </div>
    </div>
    <div class="navig-buttons">
      <CustomButton>
        <template #text>All Types</template>
        <template #image>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 10L12 15L17 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#15133D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
      </CustomButton>
      <CustomButton>
        <template #text>Custom Date</template>
        <template #image>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16 15.2V16.8875L16.9 17.9M15 2.5V6.5M9 2.5V6.5M9 11.5H3.51733M3.51733 11.5C3.50563 11.8208 3.5 12.154 3.5 12.5C3.5 17.4094 4.64094 19.7517 8 20.6041M3.51733 11.5C3.7256 5.79277 5.84596 4 12 4C17.3679 4 19.6668 5.36399 20.3048 9.5M20.5 17C20.5 19.4853 18.4853 21.5 16 21.5C13.5147 21.5 11.5 19.4853 11.5 17C11.5 14.5147 13.5147 12.5 16 12.5C18.4853 12.5 20.5 14.5147 20.5 17Z"
              stroke="#15133D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
      </CustomButton>
    </div>
  </div>
</template>
<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";
import { ref } from "vue";
const navs = ref([
  {
    title: "Today",
  },
  {
    title: "This Week",
  },
  {
    title: "This Month",
  },
]);
</script>
<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.navig {
  @include flex-between;

  align-items: center;
  margin: 27px 0 21px;
  padding: 0 40px;
  width: 848px;
  height: 65px;
  box-sizing: border-box;
  background: $purple;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(163, 161, 255, 0.16);
  &-items {
    @include flex-between;
    align-items: center;
    flex-direction: row;
    gap: 50px;

    & nav {
      & a {
        color: #a3a1ff;
        text-decoration: none;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position: relative;
        display: flex;
        justify-content: center;
        &:hover {
          color: $white;
          &.router-link-active.router-link-exact-active {
            &::after {
              content: "";
              border-radius: 40px 40px 0px 0px;
              background: #15133d;
              width: 68px;
              height: 9px;
              position: absolute;
              top: 32px;
            }
          }
        }
      }
    }
  }
  &-buttons {
    display: flex;
    gap: 12px;
    & button {
      border-radius: 40px;
      background: $white;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
      color: $dark-text;
      font-size: 10px;
      text-transform: inherit;
      font-weight: 700;
      letter-spacing: inherit;
      padding: 4px 24px;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      & svg {
        margin-left: 57px;
      }
    }
  }
}
</style>