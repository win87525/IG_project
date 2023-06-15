<template>
<div>
<h2 class="title">搜索結果：植物</h2>
 <post-list class="postList">
    <post-item v-for="n in 10" :key="n"></post-item>
 </post-list>
</div>
    <!-- <post-details></post-details> -->
    <!-- <post-upload></post-upload> -->
</template>

<script setup>
import PostIst from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
</script>


<style scoped>
.postList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
.title{
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 44px;
}
</style>