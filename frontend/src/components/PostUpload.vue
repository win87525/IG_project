<template>
  <the-modal>
    <div class="postUpload">
      <label class="upload">
        <the-icon icon="upload-image" class="img"></the-icon>
        <input type="text" accept="image/*" class="fileChooser" />
      </label>
      <div class="postContent">
        <textarea
          placeholder="寫點甚麼吧..."
          class="postContentInput"
        ></textarea>
        <the-button class="pubBtn">發布</the-button>
      </div>
    </div>
  </the-modal>
</template>


<script setup>
import TheIcon from "./TheIcon.vue";
import TheModal from "./TheModal.vue";
import TheButton from "./TheButton.vue";
</script>

<style scoped>
.postUpload {
  width: 30vw;
  height: 70vh;
  display: grid;
  grid-template-rows: 4fr 1fr;
  /* min-width: 30vw; */
}
.preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 0;
}
.upload {
  display: grid;
  place-items: center;
  cursor: pointer;
  min-height: 0;
}
.upload > svg {
  width: 254px;
  height: 316px;
}
.fileChooser {
  opacity: 0;
  position: absolute;
}

.postContent {
  display: grid;
}
.postContentInput {
  border-bottom: none;
  resize: none;
  padding: 12px 24px;
}
.postContentInput::placeholder {
  color: #757575;
}

.pubBtn {
  align-self: end;
  justify-self: end;
  position: relative;
  right: 24px;
  bottom: 18px;
}
@media (max-width: 1800px) {
  .postUpload {
    width: 50vw;
  }

}
@media (max-width: 1440px) {
  .postUpload {
    width: 40vw;
  }

}
@media (max-width: 1024px) {
  .postUpload {
    width: 70vw;
  }

}
@media (max-width: 768px) {
  .postUpload {
    width: 70vw;
    height: 50vh;
  }
    .upload>svg{
    transform:scale(.7);
    position: relative;
    bottom: 0px;
  }
}
@media (max-width: 390px) {
  .postUpload {
    width: 80vw;
    height: 45vh;
  }
  .upload>svg{
    transform:scale(.6);
    position: relative;
    bottom: 25px;
  }
}
</style>