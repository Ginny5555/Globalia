<template>
<div class="app">
<MenuView/>
  <router-view/>
  <ProfileView  ></ProfileView>
  </div>
</template>

<script setup>
import MenuView from './views/MenuView.vue';

import ProfileView from './views/ProfileView.vue';

</script>

<style lang="scss">
$background-main:#F5F4FF;

#app {
 font-family: 'Poppins', sans-serif;
width:100%;

}
.app {
      width: 100%;
      height: 100%;
  display: flex;
padding-right:36px;
  background-color: $background-main;
    justify-content: center;
margin:0 auto;
    width: fit-content;
    border-radius:40px;
    box-shadow: 0px 26px 36px 0px rgba(85, 85, 85, 0.16);
}
</style>
