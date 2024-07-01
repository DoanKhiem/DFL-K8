<script setup>
import Header from './components/Header.vue'
import Setting from './components/Setting.vue'
import Sidebar from './components/Sidebar.vue'
import Outer from './components/Outer.vue'

</script>

<template>
  <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
   <Header/>
   <Setting/>
    <div class="app-main">
      <Sidebar/>
      <Outer/>

    </div>
  </div>
</template>

<style scoped></style>
