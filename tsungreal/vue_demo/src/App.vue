<script setup>
import Header from './components/Header.vue';
import Settings from './components/Settings.vue';
import SideBar from './components/Sidebar.vue';
import Outer from './components/Outer.vue';
</script>

<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
    <Header />
    <Settings />
    <div class="app-main">
      <SideBar />
      <Outer />
    </div>
  </div>

</template>

<style scoped></style>
