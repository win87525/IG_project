<template>
  <div class="postItem">
    <img
      :src="img"
      alt=""
      width="100%"
      height="100%"
      style="background: #eee"
      @click="toggleDetails"
    />
    <div class="postInfo">
      <div class="postMeta">
        <!-- <img src="#" class="avatar" alt="" /> -->
        <the-avatar></the-avatar>
        <span>{{ props.name }}</span>
        <span class="postPubData">{{ props.time }}</span>
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
            @click="onFavorite"
            :fill="isFavorite ? '#F7E048' : 'none'"
            :stroke="isFavorite ? 'none' : '#000000'"
          >
          </the-icon>
          <span>{{ props.like }}</span>
          <span>{{ props.comment }}</span>
          <span>{{ props.favorite }}</span>
        </div>
      </div>
      <div class="postDesc">
        <p>{{ props.text }}</p>
      </div>
    </div>
    <post-details
      v-if="showDetails"
      :item="props"
      :show-details="showDetails"
      @update:showDetails="showDetails = $event"
      :id="props.id"
      :name="props.name"
      :text="props.text"
      :img="props.img"
      :time="props.time"
      :like="props.like"
      :comment="props.comment"
      :favorite="props.favorite"
      :isLike="props.isLike"
      :isFavorite="props.isFavorite"
      :onLike="onLike"
      :onFavorite="onFavorite"
    ></post-details>
    <!-- <button @click="toggleDetails">Show Details</button> -->
  </div>
</template>

<script setup >
import TheAvatar from "../components/TheAvatar.vue";
import PostDetails from "../components/PostDetails.vue";
import TheIcon from "../components/TheIcon.vue";
import { defineProps, ref } from "vue";
//接收父組件傳遞進來的值
const props = defineProps([
  "id",
  "name",
  "text",
  "img",
  "time",
  "like",
  "comment",
  "favorite",
  "isLike",
  "isFavorite",
  "onLike",
  "onFavorite",
]);
const img = props.img;
// console.log(img);

const onLike = (id) => {
  props.onLike(props.id);
};

const onFavorite = (id) => {
  props.onFavorite(props.id);
};

const showDetails = ref(false);
const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};
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

.postItem {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
}

.postInfo {
  padding: 24px;
}

.postItem > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.postMeta {
  display: grid;
  grid-template-areas:
    "avatar name actions"
    "pubDate pubDate actions";
  grid-template-columns: 42px 1fr 3fr;
  row-gap: 6px;
  column-gap: 5px;
}
.postMeta .avatar {
  grid-area: avatar;
}

.postMeta .postPubData {
  grid-area: pubDate;
  color: #9f9f9f;
  font-size: 14px;
}

.postActions {
  grid-area: actions;
  justify-self: end;
}

.postDesc {
  margin-top: 28px;
  white-space: pre-line;
}
</style>
<style scoped>
@media (max-width: 1440px) {
  .postItem > img {
    height: 380px;
  }
}

@media (max-width: 1024px) {
  .postItem > img {
    height: 300px;
  }
}
@media (max-width: 768px) {
  .postItem {
    margin-bottom: 10px;
  }
  .postItem > img {
    height: 450px;
  }
}
@media (max-width: 500px) {
  .postItem > img {
    height: 320px;
  }
}
@media (max-width: 390px) {
  .postItem > img {
    height: 250px;
  }
}
</style>