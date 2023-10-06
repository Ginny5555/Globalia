<template>
  <MainLayout>
    <div class="myprofile">
      <div class="searchline">
        <SearchLine/>
      </div>
      <div class="diagram">
        <ProfileRange/>
<ActivityDiagram/>
      </div>
      <div class="icons">
<ColeguesProfile/>
      </div>
      <div class="pieces">
        <ProfileReviews />
        <NewsPieces />
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import ProfileRange from "@/components/ui/ProfileRange.vue";
import ProfileReviews from "@/components/ui/ProfileReviews.vue";
import NewsPieces from "@/components/ui/NewsPieces.vue";
import SearchLine from "@/components/ui/SearchLine.vue";
import ColeguesProfile from "@/components/ui/ColeguesProfile.vue";
import ActivityDiagram from "@/components/ui/ActivityDiagram.vue";

import MainLayout from "@/layout/MainLayout.vue";
</script>

<style  lang="scss">
@import "../assets/style/style.scss";
.pieces {
  @include flex-between;
  margin-top:32px;
  gap:20px;
}
.diagram {
  display:flex;
  margin:20px 0;
  gap:20px;
}
.myprofile {
  margin: 0 20px;
}
</style>
