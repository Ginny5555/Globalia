<template>
  <MainLayout>
    <div class="chat">
      <RoomsView/>
 <PitchView/>
    </div>
  </MainLayout>
</template>

<script setup>
import PitchView from "@/components/ui/PitchView.vue";
import RoomsView from "@/components/ui/RoomsView.vue";
// import ProfileReviews from "@/components/ui/ProfileReviews.vue";


import MainLayout from "@/layout/MainLayout.vue";
</script>

<style  lang="scss">
@import "../assets/style/style.scss";
.chat {
  margin-top:40px;
  display: flex;
  gap: 20px;
  padding: 0 20px;
}
</style>
