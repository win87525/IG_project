<template>
  <div>
    <div class="profileContainer">
      <the-avatar src="/src/assets/portfolio/88178.jpg" :width="186" :height="186"></the-avatar>
      <!-- <img src="/src/assets/portfolio/88178.jpg" :width="186" :height="186" alt=""> -->
      <div class="profile">
        <p class="name">
          <span style="letter-spacing: 10px">陳寬鴻</span
          ><router-link to="/profile/edit">編輯個人資料</router-link>
        </p>
        <p class="handle">win87525@gmail.com</p>
        <div class="description">
          <ul>
            <li>90後設計師🧑‍🎨</li>
            <li>畢業於實踐大學🎓</li>
            <li>熱情活潑  熱愛分享</li>
            <li>喜愛籃球🏀 羽球🏸️</li>
          </ul>
        </div>
        <!-- <p class="website">https//com</p> -->
        <p class="website">#喜愛與人交流 #活潑 #幽默 #開朗</p>
      </div>
    </div>
    <div class="tabs">
      <div class="tab active">
        <the-icon icon="posts"></the-icon>
        <p>我的</p>
      </div>
      <div class="tab">
        <the-icon icon="like"></the-icon>
        <p>按讚</p>
      </div>
      <div class="tab">
        <the-icon icon="favorite"></the-icon>
        <p>收藏</p>
      </div>
    </div>
    <div class="tabContent">
      <p>6篇貼文</p>
      <div class="posts">
        <img
          :src="item.img"
          class="postImage"
          v-for="item in items"
          :key="item.id"
        />
        <!-- <p>123</p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
import TheAvatar from "../components/TheAvatar.vue";
import { ref, computed, provide } from "vue";

const items = ref([
  {
    id: 1,
    img: "/src/assets/portfolio/sky.jpg",
  },
  {
    id: 2,
    img: "/src/assets/portfolio/fish.jpg",
  },
  {
    id: 3,
    img: "/src/assets/portfolio/card.png",
  },
  {
    id: 4,
    img: "/src/assets/portfolio/book.png",
  },
  {
    id: 5,
    img: "/src/assets/portfolio/page.jpg",
  },
  {
    id: 6,
    img: "/src/assets/portfolio/room_last.jpg",
  },
]);
console.log(items.img);
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
}

.profile .name > span {
  font-size: 26px;
}
.profile .name > a {
  color: #1da0ff;
  text-decoration: none;
  margin-left: 26px;
}
.profile .handle {
  margin-top: 16px;
  color: #848484;
}

.profile .description {
  margin-top: 26px;
  margin-bottom: 22px;
}

.tabs {
  display: grid;
  grid-template-columns: repeat(3, 88px);
  column-gap: 4vw;
  justify-content: center;

  margin-top: 7vmin;
  margin-bottom: 20px;
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
  height: 321px;
  background: #eee;
  object-fit: cover;
  object-position: bottom;
}
ul {
  list-style: none;
  line-height: 32px;
}
li {
  letter-spacing: 7px;
}
</style>