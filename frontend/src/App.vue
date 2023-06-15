<template>
  <div>
    <!-- 頁面不是登入時才有navbar -->
    <div v-if="$route.name != 'login'">
      <header class="header">
        <nav-bar></nav-bar>
      </header>
      <the-layout>
        <router-view></router-view>
      </the-layout>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
    <div>
      <footer class="footer" :class="{ inside: $route.name == 'login' }">
        &copy; Fenghua. All Rights Reserved
      </footer>
    </div>
  </div>
</template>


<script setup>
import "./assets/base.css";
import NavBar from "./components/NavBar.vue";
import TheLayout from "./components/TheLayout.vue";
</script>


<style scoped>
.header {
  height: 80px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}
.footer {
  text-align: center;
  padding: 20px 0;
  padding-top: 60px;
  color: #828282;
  font-size: 12px;
}
.footer.inside {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
