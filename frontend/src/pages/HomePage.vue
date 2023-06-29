<template>
  <div class="postList">
    <post-item
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :text="item.text"
      :img="item.img"
      :time="item.time"
      :like="item.like"
      :comment="item.comment"
      :favorite="item.favorite"
      :isLike="item.isLike"
      :isFavorite="item.isFavorite"
      :onLike="onLike"
      :onFavorite="onFavorite"
    ></post-item>
    <!-- <post-details></post-details> -->
  </div>
</template>

<script setup>
import PostItem from "../components/PostItem.vue";
import PostDetails from "../components/PostDetails.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const items = computed(() => store.state.items);

const onLike = (id) => {
  store.commit("Like", id);
};
const onFavorite = (id) => {
  store.commit("favorite", id);
};
</script>

<style scoped>
.postList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
}
@media(max-width:1440px) {
.postList{
  grid-template-columns: 1fr 1fr;
}
}
@media(max-width:768px) {
.postList{
  grid-template-columns: 1fr;
}
}
</style>

