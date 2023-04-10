<template>
  <div class="banner-container">
    <div class="banner" :style="{ backgroundImage: `url(${img})` }">
      <div class="title">
        <span>Home</span>
        <span> / </span>
        <span>{{ subTitle }}</span>
      </div>
      <div class="banner-title">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.banner {
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: grey;
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
}
.title {
  padding: 0.6rem 2rem;
  background: #cccccc4c;
  border-radius: 20px;
}
</style>
