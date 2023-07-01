<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="icon_img">
        <img src="../assets/logo.png" class="logo" alt="LOGO" />
      </router-link>
      <div class="searchInput">
        <input type="text" />
        <the-icon icon="search" />
      </div>
      <div class="navItems">
        <router-link to="/"><the-icon icon="home"></the-icon></router-link>
        <button @click="showPostUpload">
          <the-icon icon="publish"></the-icon>
        </button>
        <div class="profileDropDown">
          <the-avatar
            src="/src/assets/portfolio/88178.jpg"
            :width="42"
            :height="42"
            style="cursor: pointer"
            class="avatar"
            @click="showBar"
          ></the-avatar>

          <div class="dropdownMenu" v-if="isMenuVisible">
            <ul class="profileMenu">
              <li @click="showBar">
                <router-link to="/profile/AboutMe">個人主頁</router-link>
              </li>
              <li @click="showBar">
                <router-link to="/profile/edit">修改個人資料</router-link>
              </li>
              <li @click="showBar">
                <router-link to="/login">登出</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <PostUpload v-if="showUpload" />
  </div>
</template>


<script setup>
import TheIcon from "./TheIcon.vue";
import TheAvatar from "../components/TheAvatar.vue";
import PostUpload from "../components/PostUpload.vue";
import { ref } from "vue";
//做頭像選單切換
const isMenuVisible = ref(false);
function showBar() {
  isMenuVisible.value = !isMenuVisible.value;
}
//導入showPostUpload的值，去做到切換，因為不同組件
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const showUpload = computed(() => store.state.showPostUpload);
const showPostUpload = () => {
  store.commit("showPostUpload");
};
</script>



<style scoped>
.navbar {
  width: 80vw;
  height: 80px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.navbar svg {
  width: 38px;
  height: 38px;
}
.logo {
  transform: scale(0.7);
}

.searchInput {
  position: relative;
}

.searchInput input {
  width: 100%;
  padding: 12px;
  padding-left: 36px;

  background: #f1f1f1;
  border-radius: 14px;
  border: none;
}

.searchInput > svg {
  position: absolute;
  left: 0;
  top: 11px;
  left: 12px;
}

.navItems {
  justify-self: end;
  display: flex;
  gap: 24px;
  align-items: center;
}

.navItems > button {
  border: none;
  background: none;
}

.profileDropDown {
  position: relative;
}

.profileMenu {
  position: absolute;
  width: max-content;
  padding: 24px 26px;
  list-style: none;
  background: white;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  right: 0;
  display: grid;
  row-gap: 18px;
  transform: translateY(18px);
  /* display: none; */
}

.profileMenu::before {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  top: -12px;
  right: 10px;
  border-bottom: 12px solid white;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
}

.profileMenu a,
.profileMenu li {
  text-decoration: none;
  cursor: pointer;
}

.profileMenu a:visited {
  color: initial;
}
</style>
<style scoped>
@media (max-width: 1024px) {
  .logo {
    position: relative;
    right: 40px;
  }
}
@media (max-width: 768px) {
  .navbar {
    width: 80vw;
  }
  .logo {
    position: relative;
    right: 80px;
  }
  .searchInput {
    position: relative;
    right: 60px;
  }
}
@media (max-width: 500px) {
  .navbar {
    width: 80vw;
    gap: 10px;
    grid-template-columns: .4fr .6fr;
  }
  .icon_img {
    display: none;
  }

  .searchInput {
    position: relative;
    right: 0px;
  }
}
</style>
