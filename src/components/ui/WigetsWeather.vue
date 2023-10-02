<template>
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
</template>
<script setup>

</script>
<style lang="scss" scoped>
@import '../../assets/style/style.scss';

</style>