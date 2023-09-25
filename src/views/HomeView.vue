<template>
  <div class="home">
    <DashboardView />
  </div>
</template>


<script>
import DashboardView from "@/components/Dashboard.vue";
export default {
  name: "HomeView",
  components: {
    DashboardView,
  },
};
</script>