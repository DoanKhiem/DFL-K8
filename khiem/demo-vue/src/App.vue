<script setup>
import AppHeader from "./components/AppHeader.vue";
import UiThemeSettings from "./components/UiThemeSettings.vue";
import AppSidebar from "./components/AppSidebar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div
      class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
    >
      <AppHeader />
      <UiThemeSettings />
      <div class="app-main">
        <AppSidebar />
        <div class="app-main__outer">
          <RouterView />
          <Footer />
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
