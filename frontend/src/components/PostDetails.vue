<template>
  <div class="modal" id="modal">
    <div class="backdrop"></div>
    <div class="modalContent">
      <button class="closeBtn" @click="toggleDetails">
        <the-icon icon="close"></the-icon>
      </button>
      <div class="postDetails">
        <img :src="img" alt="" class="postImage" />
        <div class="postMeta">
          <div class="author">
          <the-avatar></the-avatar>
            <span>{{ props.item.name }}</span>
          </div>
          <pre class="postDesc"
            >{{ props.item.text }}

</pre
          >
          <div class="comments">
            <div class="comment" v-for="n in 10" :key="n">
              <the-avatar></the-avatar>
              <span class="user">李四</span>
              <span class="commentDate">1d</span>
              <p class="commentContent">非常好</p>
            </div>
          </div>
          <div class="actions">
            <!-- <post-actions></post-actions> -->
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
            </div>
            <span class="postPubDate">{{ props.item.time }}</span>
            <input
              type="text"
              name="comment"
              class="commentInput"
              placeholder="寫一條評論吧"
            />
            <button class="commentPubBtn">發布</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";
import TheAvatar from "../components/TheAvatar.vue";
import PostActions from "../components/PostActions.vue";
import TheModal from "./TheModal.vue";
import { defineProps, ref } from "vue";
//接收父組件傳遞進來的值
const props = defineProps([
  "item",
  "showDetails",
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
const onLike = (id) => {
  props.onLike(props.id);
};

const onFavorite = (id) => {
  props.onFavorite(props.id);
};

const img = props.item.img;

const emit = defineEmits(["update:showDetails"]);

// 控制close的開關，將值傳遞回父組件
const toggleDetails = () => {
  emit("update:showDetails", !props.showDetails);
};
</script>

<style scoped>
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  z-index: 10;
}
.backdrop {
  background: rgba(0, 0, 0, 0.56);
  position: absolute;
  width: 100vw;
  height: 100vh;
}
.modalContent {
  position: relative;
  background: white;
  border-radius: 10px;
  overflow: hidden;
}
.closeBtn {
  position: absolute;
  background: none;
  right: 14px;
  top: 10px;
  border: none;
}
.closeBtn svg {
  width: 54px;
  height: 54px;
  transform: scale(0.6);
}

.postDetails {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 300px);
  grid-template-rows: minmax(0, 1fr);
  width: 60vw;
  height: 65vh;
  min-height: 600px;
}
.postImage {
  width: 100%;
  height: 100%;
  min-width: 400px;
  object-fit: cover;
  /* border: none; */
  /* border: 1px solid red; */
}
.postMeta {
  padding: 24px;
  padding-top: 36px;
  display: grid;
  align-items: start;
  grid-template-rows: max-content max-content 1fr max-content;
  max-height: 100%;
  height: 100%;
  background-color: white;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.postDesc {
  width: 100%;
  white-space: pre-wrap;
  margin-top: 24px;
}
.comments {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-gap: 28px;
  align-items: start;
  overflow-y: auto;
  height: 100%;
}
.comment {
  display: grid;
  grid-template-areas:
    "avatar name date"
    "comment comment comment";
  grid-template-columns: 34px 1fr 1fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 14px;
}
.commentDate {
  grid-area: date;
  justify-self: end;
  color: #a7a7a7;
}
.commentContent {
  grid-area: comment;
}

.actions {
  border-top: 1px solid #eaeaea;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 20px -24px 0px -24px;
  padding: 20px 24px 0 24px;
  row-gap: 16px;
}

.postActions > :deep(svg) {
  transform: scale(0.8125);
}

.postPubDate {
  color: #9f9f9f;
  grid-column: 2 / 6;
  justify-self: end;
  font-size: 14px;
}
.commentInput {
  background: #f7f7f7;
  border-radius: 8px;
  border: none;
  grid-column: 1 / 4;
}
.commentInput::placeholder {
  color: #b9b9b9;
  border: none;
}
.commentPubBtn {
  color: #1da0ff;
  border: none;
  background: none;
  font-size: 16px;
  margin-left: 20px;
  grid-column: 4 / 6;
}

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
<style scoped>
@media(max-width:1200px) {
.postDetails{
  width: 70vw;
}
}
@media(max-width:1024px) {
.postDetails{
  width: 75vw;
}
}
@media(max-width:800px) {
.postDetails{
  grid-template-columns: 1fr ;
     grid-template-rows: minmax(300px, 1fr);
     min-height: 600px;
}
.postMeta {
  padding: 20px;
  padding-top: 12px;
  display: grid;
  align-items: start;
  grid-template-rows: max-content max-content 1fr max-content;
  max-height: 100%;
  height: 100%;
  background-color: white;
}
.comments{
  display: none;
}
.actions {
  border-top: 1px solid #eaeaea;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 0px -24px 0px -24px;
  padding: 20px 24px 0 24px;
  row-gap: 16px;
}
.commentPubBtn{
  grid-column: 5/6;
}
}
@media(max-width:500px) {
.postDetails{
    width: 80vw;
}
.commentPubBtn{
  font-size: 14px;
}

}
@media(max-width:390px) {
.postDetails{
  grid-template-columns: 1fr ;
     grid-template-rows: minmax(200px, 1fr);
     min-height: 550px;
}
.commentPubBtn{
  font-size: 14px;
}
.commentInput {
  background: #f7f7f7;
  border-radius: 4px;
  border: none;
  grid-column: 1 /3;
}
.postPubDate {
  color: #9f9f9f;
  grid-column: 2 / 5;
  justify-self: end;
  font-size: 12px;
}
.commentPubBtn {
  font-size: 14px;
  margin-left: 30px;
  grid-column: 3 / 5;
}
.postActions {
  column-gap: 20px;
  row-gap: 4px;
}
.actions{
  width: 380px;
}
}
</style>