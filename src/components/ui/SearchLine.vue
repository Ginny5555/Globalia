<template>
  <div class="searchline">
    <div class="input-container">
      <input type="text" id="search" placeholder="Search..." />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        class="search-icon"
      >
        <path
          d="M24.1666 24.1667L19.0956 19.0957M21.75 12.6875C21.75 7.68242 17.6926 3.625 12.6875 3.625C7.68242 3.625 3.625 7.68242 3.625 12.6875C3.625 17.6926 7.68242 21.75 12.6875 21.75C17.6926 21.75 21.75 17.6926 21.75 12.6875Z"
          stroke="#15133D"
          stroke-width="2.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="newarticle">
      <CustomButton>
        <template #text> new article</template>
        <template #image>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M26.3416 5.4375C25.9791 4.59167 25.2541 3.86667 24.4083 3.50417C22.5958 2.77917 20.5416 3.625 19.6958 5.31667L14.1375 17.7625C13.6541 18.85 13.5333 20.1792 13.6541 21.2667L14.1375 23.925C14.2583 24.2875 14.5 24.65 14.8625 24.7708C14.9833 24.8917 15.225 24.8917 15.3458 24.8917C15.5875 24.8917 15.8291 24.7708 15.95 24.65L18.2458 23.2C19.3333 22.475 20.0583 21.6292 20.5416 20.4208L26.1 7.975C26.7041 7.25 26.7041 6.28334 26.3416 5.4375ZM18.6083 19.6958C18.2458 20.4208 17.7625 20.9042 17.1583 21.3875L16.3125 21.8708L16.1916 21.025C16.0708 20.3 16.1916 19.575 16.4333 18.85L20.6625 9.18334L22.8375 10.0292L18.6083 19.6958ZM24.1666 7.12917L23.925 7.73334L21.75 6.8875L21.9916 6.28334C22.2333 5.8 22.5958 5.55834 23.0791 5.55834C23.2 5.55834 23.4416 5.55834 23.5625 5.67917C23.8041 5.8 24.0458 6.04167 24.1666 6.28334C24.2875 6.64584 24.2875 6.8875 24.1666 7.12917Z"
              fill="white"
            />
            <path
              d="M3.62499 20.5417H8.45832C9.18332 20.5417 9.66666 20.0583 9.66666 19.3333C9.66666 18.6083 9.18332 18.125 8.45832 18.125H3.62499C2.89999 18.125 2.41666 18.6083 2.41666 19.3333C2.41666 20.0583 2.89999 20.5417 3.62499 20.5417Z"
              fill="white"
            />
            <path
              d="M10.875 22.9583H3.62499C2.89999 22.9583 2.41666 23.4417 2.41666 24.1667C2.41666 24.8917 2.89999 25.375 3.62499 25.375H10.875C11.6 25.375 12.0833 24.8917 12.0833 24.1667C12.0833 23.4417 11.6 22.9583 10.875 22.9583Z"
              fill="white"
            /></svg
        ></template>
      </CustomButton>
    </div>
  </div>
</template>
<script setup>

import CustomButton from "@/components/ui/CustomButton.vue";


</script>
<style lang="scss" scoped>
@import '../../assets/style/style.scss';

.input-container {
  position: relative;
  display: inline-block;
  margin-bottom:0;
}

#search {
  width: 588px;
  height: 57px;
  border-radius: 10px;
  padding: 20px;
  margin-right:21px;
  outline: none;
  background: #fff;
  box-shadow: 0px 4px 6px 0px rgba(163, 161, 255, 0.16);
  border: none;
  box-sizing: border-box;
  &::placeholder {
    color: $dark-text;

    font-size: 14px;
    font-style: italic;
    font-weight: 300;
  }
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 36px;
  transform: translateY(-50%);

  cursor: pointer;
}
.searchline {
  display:flex;
  align-items: center;
}
button {
  border-radius:10px;
  width: 239px;
height: 57px;
 box-sizing: border-box;
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding: 21px 14px;
}
</style>