<script setup>
import Header from "./components/Header.vue";
import ThemeSetting from "./components/ThemeSetting.vue";
import SideBar from "./components/SideBar.vue";
import { RouterLink } from "vue-router";

</script>

<template>
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Header />
        <ThemeSetting />

        <div class="app-main">
            <SideBar />
            <div class="app-main__outer">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
