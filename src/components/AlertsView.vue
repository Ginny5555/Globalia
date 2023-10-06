<template>
  <MainLayout>
    <div class="alerts">
      <div class="searchline">
        <SearchLine></SearchLine>
      </div>
<AllertsNav></AllertsNav>
<AllertsTabs></AllertsTabs>
    </div>
  </MainLayout>
</template>

<script setup >
import AllertsTabs from "@/components/ui/AllertsTabs.vue";
import AllertsNav from "@/components/ui/AllertsNav.vue";
import SearchLine from "@/components/ui/SearchLine.vue";
import MainLayout from "@/layout/MainLayout.vue";
</script>

<style scoped lang="scss">
.alerts{
  margin: 49px 20px;
}
</style>
