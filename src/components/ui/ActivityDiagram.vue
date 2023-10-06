<template>
  <div class="diag white-box">
    <div class="diag-title">
      <h3>Your Activity</h3>
      <button class="diag-title__weekly">
        Weekly
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M5.25 7.5L9 11.25L12.75 7.5M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9Z"
            stroke="#15133D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <img src="@/assets/activity-block.png" alt="" />
  </div>
</template>
<script setup>
</script>
<style lang="scss" >
@import "../../assets/style/style.scss";
.diag {
  width: 587px;
  height: 273px;
  padding: 20px 27px 39px 27px;
  @include flex-column;
  justify-content: space-between;
  &-title {
    & h3{
      font-size: 16px;
    }
    @include flex-between;
    &__weekly {
      color: $dark-text;
      font-size: 10px;
      font-weight: 700;
      width: 127px;
      height: 26px;
      border-radius: 40px;
      background: #f5f4ff;
      padding:4px 13px;
          letter-spacing: normal;
    text-transform: none;
      @include flex-between;
      align-items: center;
    }
  }
}
</style>