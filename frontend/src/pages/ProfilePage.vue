<template>
  <div>
    <div class="profileContainer" v-for="item in filteredItems" :key="item.id">
      <!-- <p>{{ item.name }}</p> -->
      <!-- <the-avatar
        src="/src/assets/avatarDefault.png"
        :width="186"
        :height="186"
      ></the-avatar> -->
      <img :src="item.img" alt="" class="avatar">
      <!-- <img src="/src/assets/portfolio/88178.jpg" :width="186" :height="186" alt=""> -->
      <div class="profile">
        <p class="name">
          <span style="letter-spacing: 10px">{{ item.name }}</span>
          <!-- <router-link to="/profile/edit">編輯個人資料</router-link> -->
        </p>
        <span class="mg-ri">{{ item.nickName }}</span>
        <span class="mg-ri">{{ item.phone }}</span>

        <div class="description">
          <pre>{{ item.introduce }}</pre>
        </div>
        <p class="handle">{{ item.email }}</p>
        <p class="website">{{ item.website }}</p>
      </div>
    </div>
    <div class="tabs">
      <div :class="{ tab: true, active: showDiv1 }" @click="updateShowDiv(1)">
        <the-icon icon="posts"></the-icon>
        <p>我的</p>
      </div>
      <div :class="{ tab: true, active: showDiv2 }" >
        <the-icon icon="like"></the-icon>
        <p>按讚</p>
      </div>
      <div :class="{ tab: true, active: showDiv3 }">
        <the-icon icon="favorite"></the-icon>
        <p>收藏</p>
      </div>
    </div>
    <div class="tabContent">
      <!-- <p>6篇貼文</p> -->
      <div class="posts" v-if="showDiv1">
        <img
          :src="url"
          class="postImage"
          v-for="url in imageUrls" :key="url"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
import TheAvatar from "../components/TheAvatar.vue";
import { ref, computed, provide, onMounted } from "vue";
import { useRoute } from 'vue-router';

//取得vuex裡的數組items
import { useStore } from "vuex";
const store = useStore();
// 取得main.js裡面，我自己個人的資料
const user = computed(() => store.state.user);

const route = useRoute();
const filteredItems = computed(() => {
  // 使用過濾方法根據 userId 過濾項目
 return store.state.items.filter((item) => item.url === route.params.userId);
});

//控制只顯示有點讚的貼文
const isLike = computed(() => {
  return personal.value.filter((personal) => personal.isLike);
});

//控制只顯示有收藏的貼文
const isFavorite = computed(() => {
  return personal.value.filter((personal) => personal.isFavorite);
});

//寫控制顯示哪一個div(個人、按讚、收藏)
const showDiv1 = ref(true);
const showDiv2 = ref(false);
const showDiv3 = ref(false);

const updateShowDiv = (index) => {
  showDiv1.value = index === 1;
  showDiv2.value = index === 2;
  showDiv3.value = index === 3;
};

// 取得狗狗照片
const imageUrls = ref([]);
onMounted(() => {
  const currentDomain = window.location.pathname.split("/profile/")[1];
fetch(`https://dog.ceo/api/breed/${currentDomain}/images`)
      .then(response => response.json())
      .then(data => {
        imageUrls.value = data.message.slice(0, 7);
      })
      .catch(error => {
        console.error(error);
      });
})
</script>

<style scoped>
.profileContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10vw;
}

.avatar {
  justify-self: end;
}

.profile .name {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}

.profile .name > span {
  font-size: 26px;
}
.profile .name > a {
  color: #1da0ff;
  text-decoration: none;
  margin-left: 26px;
}

.mg-ri {
  color: #848484;
  margin-right: 20px;
}
.handle {
  margin-top: 20px;
  margin-bottom: 16px;
  color: #848484;
}

.profile .description {
  margin-top: 26px;
  /* margin-bottom: 10px; */
}

.tabs {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  column-gap: 4vw;
  justify-content: center;

  margin-top: 7vmin;
  margin-bottom: 40px;
}

.tab {
  text-align: center;
  padding: 12px 0;
  cursor: pointer;
}
.tab > svg {
  width: 32px;
  height: 32px;
  stroke: #8a9194;
  fill: #8a9194;
}

.tab.active {
  background: #f6f9fb;
  border-radius: 18px;
}

.tab.active > svg {
  stroke: #1787d9;
  fill: #1787d9;
}
.tab.active > p {
  color: #1787d9;
}

.tabContent > p {
  text-align: center;
  font-weight: 600;
  margin-bottom: 32px;
}

.posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

.postImage {
  width: 100%;
  height: 320px;
  background: #eee;
  object-fit: cover;
  object-position: center;
}
pre {
  line-height: 34px;
}
ul {
  list-style: none;
  line-height: 32px;
}
li {
  letter-spacing: 7px;
}
.avatar {
  width: 186px;
  height: 186px;
  border-radius: 50%;
  background: #eee;
  object-fit: cover;
  object-position: top center;
}
</style>
<style scoped>
@media (max-width: 1200px) {
  .posts {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 1024px) {
  .profileContainer {
    grid-template-columns: 0.4fr 0.6fr;
  }
}

@media (max-width: 800px) {
  .posts {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .postImage {
    height: 420px;
  }
}
@media (max-width: 660px) {
  .profileContainer {
    grid-template-columns: 1fr;
  }
  .avatar {
    justify-self: center;
    margin-bottom: 30px;
  }
  .tabs {
    grid-template-columns: repeat(3, 80px);
  }
  .posts {
    grid-template-columns: 1fr;
    gap: 50px;
  }
}
@media (max-width: 390px) {
  .postImage {
    height: 220px;
  }
}
</style>