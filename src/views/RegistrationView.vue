<template>
  <div class="registration">
    <div class="registration-block white-box">
      <h2>Create account</h2>
      <CustomInput class="email" label="EMAIL"></CustomInput>
      <CustomInput label="PASSWORD"></CustomInput>
      <CustomButton>
        <template #text> create user</template>
      </CustomButton>
    </div>
  </div>
</template>


<script setup>
import CustomButton from "@/components/ui/CustomButton.vue";
import CustomInput from "@/components/ui/CustomInput.vue";
</script>
<style lang="scss" >
@import "../assets/style/style.scss";
.registration {
  height: 100%;
  background-color: $purple-bg;
  width: 100%;
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  @include center-align;
  &-block {
    & h2 {
      margin:0;
    }
    gap:20px;
    width: 300px;
    margin: 0 auto;
    padding: 20px;
     @include center-align;
     flex-direction: column;
     & button{
 width: 250px;
  height: 40px;}
  }
   & input{
 width: 250px;
  height: 58px;
  }

}

</style>