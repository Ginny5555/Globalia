<template>
<div class="app">
<MenuView/>
  <router-view/>
  <ProfileView :userName="userName" ></ProfileView>
  </div>
</template>

<script>
import MenuView from './views/Menu.vue';

import ProfileView from './views/ProfileView.vue';
export default {
  components: {
    MenuView,
    ProfileView

  },
  
};
</script>

<style lang="scss">
$background-main:#F5F4FF;

#app {
 font-family: 'Poppins', sans-serif;
background-color: $background-main;
}
.app {
  display: flex;
  justify-content: space-between;
}
</style>
