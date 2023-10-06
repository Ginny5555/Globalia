<template>
  <div class="customfield purple-block">
    <div class="customfield-input">
    <img src="@/assets/julia.png" class="customfield-user" alt="">
    <label :for="inputId">{{ label }}</label>
    <input type="text" :id="id" :placeholder="placeholder" />
    </div>
    <div class="customfield-link">
    <a href=""
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M26.6667 14.6261L15.9504 24.7329C14.6376 25.9711 12.857 26.6667 11.0004 26.6667C9.14376 26.6667 7.36319 25.9711 6.05036 24.7329C4.73754 23.4948 4 21.8155 4 20.0644C4 18.3134 4.73754 16.6341 6.05036 15.396L16.7666 5.28917C17.6419 4.46373 18.8289 4 20.0666 4C21.3044 4 22.4914 4.46373 23.3667 5.28917C24.2419 6.1146 24.7336 7.23414 24.7336 8.40148C24.7336 9.56883 24.2419 10.6884 23.3667 11.5138L12.6387 21.6206C12.2011 22.0333 11.6076 22.2652 10.9887 22.2652C10.3698 22.2652 9.77632 22.0333 9.33871 21.6206C8.9011 21.2079 8.65526 20.6481 8.65526 20.0644C8.65526 19.4808 8.9011 18.921 9.33871 18.5083L19.2387 9.18231"
          stroke="#5644FC"
          stroke-width="2.1"
          stroke-linecap="round"
          stroke-linejoin="round"
        /></svg
    ></a>
    <CustomButton>
      <template #image>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M13.3333 18.6667L16.3637 25.7376C16.7808 26.7109 18.0781 26.8137 18.5982 25.8914C19.6244 24.0714 21.1455 21.1362 22.6667 17.3333C25.3333 10.6667 26.6667 5.33334 26.6667 5.33334M13.3333 18.6667L6.26238 15.6363C5.28915 15.2192 5.18633 13.9219 6.10865 13.4018C7.92862 12.3756 10.8638 10.8545 14.6667 9.33334C21.3333 6.66668 26.6667 5.33334 26.6667 5.33334M13.3333 18.6667L26.6667 5.33334"
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
</template>

<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";
import { defineProps } from "vue";

defineProps({
  value: String, // For v-model binding
  placeholder: String,
  label: String,
  id: String,
});
</script>
<style lang="scss" scoped>
@import "../../assets/style/style.scss";
.customfield {

  padding:14px;
  @include flex-between;
  align-items: center;
  width: 519px;
  height: 72px;
  margin: 0 auto;
&-input {
  display:flex;
}
  &-user {
width:52px;
height:52px;
border-radius:50%;
  }
  &-link {
    display: flex;
        align-items: center;
    & button {
      filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.16));
      width: 40px;
      height: 40px;
      text-align: center;
      @include center-align;
      margin-left:16px;
    }
  }
}
input {
  background:transparent;
  border:none;
  height: 40px;
      width: 250px;
margin-left: 15px;
  &::placeholder {
    color: #A3A1FF;
display: flex;
justify-content: center;
font-size: 12px;

font-weight: 700;

  }
}
</style>