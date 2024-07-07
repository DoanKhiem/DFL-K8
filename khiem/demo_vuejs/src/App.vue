<script setup>
import Header from "./components/Header.vue";
import ThemeSettings from "./components/ThemeSettings.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div
    class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
  >
    <Header />
    <ThemeSettings />
    <div class="app-main">
      <Sidebar />
      <div class="app-main__outer">
        <RouterView />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
