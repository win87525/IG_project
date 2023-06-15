<template>
  <div>
    <post-list>
      <post-item
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :text="item.text"
        :img="item.img"
        :like="item.like"
        :comment="item.comment"
        :collect="item.collect"
        :isLike="item.isLike"
        :isFavorite="item.isFavorite"
      ></post-item>
    </post-list>
    <!-- <PostUDetails /> -->
    <!-- <post-upload></post-upload> -->
  </div>
</template>

<script setup>
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostUDetails from "../components/PostDetails.vue";

import { ref, computed, provide } from "vue";

const items = ref([
  {
    id: 1,
    name: "雪兒",
    text: "喜歡這組照片的風格，你呢?",
    img: "/src/assets/HomePage/1.jpeg",
    like:"482",
    comment:"231",
    collect:"41",
    isLike: true,
    isFavorite: false,
  },
  {
    id: 2,
    name: "思婷",
    text: "留意生活中的那些小角落 #花兒",
    img: "/src/assets/HomePage/2.jpg",
    like:"182",
    comment:"31",
    collect:"57",
    isLike: false,
    isFavorite: true,
  },
  {
    id: 3,
    name: "雨樹",
    text: "想不想知道我在看什麼?",
    img: "/src/assets/HomePage/3.jpg",
    like:"412",
    comment:"43",
    collect:"57",
    isLike: false,
    isFavorite: true,
  },
  {
    id: 4,
    name: "王美",
    text: "每到夏天我要去海邊!",
    like:"422",
    comment:"41",
    collect:"36",
    img: "/src/assets/HomePage/4.jpg",
    isLike: true,
    isFavorite: false,
  },
  {
    id: 5,
    name: "雲飛",
    text: "放下那些種種，用心生活。",
    like:"342",
    comment:"25",
    collect:"17",
    img: "/src/assets/HomePage/5.jpg",
    isLike: false,
    isFavorite: true,
  },
  {
    id: 6,
    name: "王超",
    text: "喜歡那些與朋友們相聚的時刻 #野餐",
    img: "/src/assets/HomePage/6.jpg",
    like:"482",
    comment:"111",
    collect:"37",
    isLike: true,
    isFavorite: false,
  },
]);
// provide("items", items)
</script>

