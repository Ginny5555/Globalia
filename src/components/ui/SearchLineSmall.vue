<template>
  <div class="searchline">
    <div class="input-container purple-block">
      <input  type="text " class="purple-block" id="searchline" placeholder="Search Rooms" />
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
  </div>
</template>
<script setup>




</script>
<style lang="scss" scoped>
@import '../../assets/style/style.scss';

.input-container {
  position: relative;
  display: inline-block;
  margin-bottom:0;
}

#searchline {
  width: 204px;

height: 42px;
  border: none;
  box-sizing: border-box;
  padding: 10px 12px;
  &::placeholder {
    color: $dark-text;

font-size: 10px;
font-style: italic;
font-weight: 700;

  }
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  width:22px;

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