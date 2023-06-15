<template to="body">
  <div class="modal" id="modal">
    <div class="backdrop"></div>
    <div class="modalContent">
      <button class="closeBtn" @click="closeModal"><the-icon icon="close"></the-icon></button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";
// 關閉按鈕還有待處理
function closeModal() {
  document.getElementById('modal').style.display = "none";
}
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
</style>