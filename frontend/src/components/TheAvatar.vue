<template>
  <!-- <img src="./assets/" alt=""> -->
  <img :src=" src || defaultAvatat" class="avatar" alt="" />
</template>

<script setup>
import defaultAvatat from "../assets/avatarDefault.png";
defineProps({
  src: String,
  width: {
    type: Number,
    default: 34,
  },
  height: {
    type: Number,
    default: 34,
  },
});
</script>

<style scoped>
.avatar {
  width: v-bind(width + "px");
  height: v-bind(height + "px");
  border-radius: 50%;
  background: #eee;
  object-fit: cover;
  object-position: top center;
}
</style>