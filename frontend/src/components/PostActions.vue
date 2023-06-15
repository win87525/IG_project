<template>
  <div class="postActions">

    <the-icon
      icon="like"
      @click="isLike = !isLike"
      :fill="isLike ? '#ff0012' : 'none'"
      :stroke="isLike ? 'none' : '#000000'"
    ></the-icon>
    <the-icon icon="comment" fill="none" stroke="#000000"> </the-icon>
    <the-icon
      icon="favorite"
      @click="isFavorite = !isFavorite"
      :fill="isFavorite ? '#F7E048' : 'none'"
      :stroke="isFavorite ? 'none' : '#000000'"
    >
    </the-icon>
    <span>{{props.like}}</span>
    <span>{{props.comment}}</span>
    <span>{{props.collect}}</span>

    
   
  </div>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
import { inject, ref } from "vue";
const props=defineProps(['like','comment','collect','isLike','isFavorite'])


// 愛心的填滿
const isLike = ref(props.isLike);
//喜歡的填滿效果
const isFavorite = ref(props.isFavorite);

const items = ref([
  {
    id: 1,
    isLike: true,
    isFavorite: false,
  },
  {
    id: 2,
    isLike: false,
    isFavorite: true,
  },
  {
    id: 3,
    isLike: false,
    isFavorite: true,
  },
  {
    id: 4,
    isLike: true,
    isFavorite: false,
  },
  {
    id: 5,
    isLike: false,
    isFavorite: true,
  },
  {
    id: 6,
    isLike: true,
    isFavorite: false,
  },
]);
// console.log(items[0].isLike);


</script>

<style scoped>
.postActions {
  /* grid-area: actions; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  /* justify-self: end; */
  column-gap: 20px;
  row-gap: 4px;
}
.postActions > svg {
  width: 32px;
  height: 32px;
  grid: -row 1/2;
  cursor: pointer;
}
.postActions > span {
  font-size: 14px;
}
</style>