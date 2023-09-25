<template>
  <div class="settings">
    <div class="searchline">
      <SearchLine></SearchLine>
    </div>
    <div class="settings-blocks">
      <div class="settings-blocks__drop white-box drag">
       <div class="drag-drop">
<svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
<path d="M74.375 46.0416C74.375 36.5972 72.6042 28.3333 70.8333 27.1528C69.6984 26.3961 64.1992 25.6395 56.6667 25.1937C52.4461 24.9439 60.2083 17.7083 42.5 17.7083C24.7917 17.7083 32.5539 24.9439 28.3333 25.1937C20.8008 25.6395 15.3016 26.3961 14.1667 27.1528C12.3958 28.3333 10.625 36.5972 10.625 46.0416C10.625 55.4861 12.3958 63.75 14.1667 64.9305C15.9375 66.1111 28.3333 67.2916 42.5 67.2916C56.6667 67.2916 69.0625 66.1111 70.8333 64.9305C72.6042 63.75 74.375 55.4861 74.375 46.0416Z" stroke="#A3A1FF" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.5 56.6666C48.368 56.6666 53.125 51.9097 53.125 46.0416C53.125 40.1736 48.368 35.4166 42.5 35.4166C36.632 35.4166 31.875 40.1736 31.875 46.0416C31.875 51.9097 36.632 56.6666 42.5 56.6666Z" stroke="#A3A1FF" stroke-width="4.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
       </div>
       <a class="drag-link" href="">Click or Drag & Drop</a>
       <div class="drag-com">PNG OR JPG MAX 2MB</div>
      </div>
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
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SearchLine from "@/components/ui/SearchLine.vue";
import CustomButton from "@/components/ui/CustomButton.vue";
import CustomInput from "@/components/ui/CustomInput.vue";
export default defineComponent({
  name: "SettingsView",
  components: {
    SearchLine,
    CustomButton,
    CustomInput,
  },
  props: {
    msg: String,
  },

  setup() {
    // const inputValue = ref("");
  },
});
</script>

<style  lang="scss">
$purple: #5644fc;
$white: #fff;
$purple-text: #a3a1ff;
$dark-text: #15133d;
$red-button: #ff5353;
$purple-bg: #F5F4FF;
@mixin center-align {
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin flex-column {
  display: flex;
  flex-direction: column;
}
@mixin flex-between {
  display: flex;
  justify-content: space-between;
}
.settings {
  margin-top:49px;
  margin: 49px 20px 0 20px;
  & label {
    position: absolute;
    color: #a3a1ff;
    padding: 9px 16px;
    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2.6px;
  }
  & input {
    width: 470px;
    height: 58px;
  }
  &-blocks {
    margin-top: 43px;
    @include flex-between;
    &__drop {
      width: 241px;
      height: 273px;
    }
    &__fields {
      padding: 50px 44px;
      width: 587px;
      height: 719px;
    }
  }
  &-buttons {
    @include flex-between;
    margin-top:35px;
  }
}
.personal {
  margin-bottom: 50px;
  &-title {
    margin-bottom: 21px;
    color: $dark-text;

    font-size: 20px;
    font-weight: 700;
  }
  &-fields {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
.credentials {
  padding-top: 39px;
  border-top: 1px solid rgba(21, 19, 61, 0.16);
  &-title {
    color: $dark-text;
    margin-bottom: 21px;
    font-size: 20px;
    font-weight: 700;
  }
   &-fields {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
.remove {
  width: 227px;
  height: 57px;
padding: 0 30px;
  background: $red-button;
  box-shadow: 0px 4px 6px 0px rgba(163, 161, 255, 0.16);
    @include flex-between;
  align-items: center;
}
.save {
  width: 210px;
  height: 57px;
  box-shadow: 0px 4px 6px 0px rgba(163, 161, 255, 0.16);
  @include flex-between;
  align-items: center;
  padding: 0 30px;
}
.drag{
  padding: 33px ;
  @include flex-between ;
  flex-direction: column;
  align-items: center;
  &-drop {
  width: 123px;
    height: 123px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background-color: $purple-bg;
    @include center-align;
    }
&-link {
color: $dark-text;
text-decoration: none;
font-size: 14px;
font-weight: 700;
}
&-com {
  color: $purple-text;
font-size: 10px;
font-weight: 700;
letter-spacing: 2.6px;
}
}
</style>
