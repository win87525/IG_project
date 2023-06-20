<template>
  <div class="postItem">
    <img
      :src="img"
      alt=""
      width="100%"
      height="100%"
      style="background: #eee"
    />
    <div class="postInfo">
      <div class="postMeta">
        <!-- <img src="#" class="avatar" alt="" /> -->
        <the-avatar></the-avatar>
        <span>{{ props.name }}</span>
        <span class="postPubData">12小時</span>
        <post-actions 
        :like="props.like"
        :comment="props.comment"
        :collect="props.collect"
        :isLike="props.isLike" 
        :isFavorite="props.isFavorite"></post-actions>
      </div>
      <div class="postDesc">
        <p>{{ props.text }}</p>
        <!-- <p>{{props.number}}</p> -->
      </div>
    </div>
    <!-- <PostUDetails /> -->
  </div>
</template>

<script setup >
import TheAvatar from "../components/TheAvatar.vue";
import PostActions from "../components/PostActions.vue";
import PostUDetails from "../components/PostDetails.vue";
// import HomePage from "../assets/HomePage"
import { ref } from "vue";

const props=defineProps(["name","text",'img','like','comment','collect','isLike','isFavorite'])
const img = props.img
// console.log(img);
</script>


<style scoped>
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
/* .avatar {
  border-radius: 50%;
  background: #eee;
  object-fit: cover;
  object-position: top center;
} */
</style>