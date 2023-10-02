<template>
    <div class="settings-blocks__fields white-box">
          <div class="personal">
            <div class="personal-title">Edit Your Information</div>
            <div class="personal-fields">
              <CustomInput label="FULL NAME"></CustomInput>
              <CustomInput label="OUTLET (S)"></CustomInput>
              <CustomInput label="POSITION"></CustomInput>
            </div>
          </div>
          <div class="credentials">
            <div class="credentials-title">Edit Your Credentials</div>
            <div class="credentials-fields">
              <CustomInput label="EMAIL"></CustomInput>
              <CustomInput label="PASSWORD"></CustomInput>
            </div>
          </div>
          <div class="settings-buttons">
            <CustomButton class="save">
              <template #text>save changes</template>
              <template #image
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 12H7M17 12L13 16M17 12L13 8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></template>
            </CustomButton>
            <CustomButton class="remove">
              <template #text>remove account</template>
              <template #image>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M17.5 11.875C17.5 11.875 18.125 13.125 18.125 15.625C18.125 18.125 17.5 19.375 17.5 19.375M12.5 11.875C12.5 11.875 11.875 13.125 11.875 15.625C11.875 18.125 12.5 19.375 12.5 19.375M7.49999 7.5C7.49999 14.8234 5.78883 25 15 25C24.2111 25 22.5 14.8234 22.5 7.5M5 7.5H25M18.75 7.5V6.25C18.75 4.0312 16.7034 3.75 15 3.75C13.2966 3.75 11.25 4.0312 11.25 6.25V7.5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></template>
            </CustomButton>
          </div>
        </div>
</template>
<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";
import CustomInput from "@/components/ui/CustomInput.vue";

</script>
<style lang="scss" scoped>
@import '../../assets/style/style.scss';

</style>