<template>
  <div class="postActions">
    <the-icon
      icon="like"
      @click="onLike"
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
    <span>{{ props.like }}</span>
    <span>{{ props.comment }}</span>
    <span>{{ props.collect }}</span>
  </div>
</template>

<script setup>
import TheIcon from "../components/TheIcon.vue";
import { inject, ref } from "vue";

const props = defineProps([
  "like",
  "comment",
  "collect",
  "isLike",
  "isFavorite",
  "onLike",
]);
const onLike = (id) => {
  props.onLike(props.id);
};

// 愛心的填滿
const isLike = ref(props.isLike);
//喜歡的填滿效果
const isFavorite = ref(props.isFavorite);
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