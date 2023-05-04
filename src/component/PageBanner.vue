<template>
  <div class="banner-container">
    <div class="banner" :style="{ backgroundImage: `url(${img})` }">
      <div class="title">
        <span>
          <router-link :to="{name: 'home'}" class="text-decoration-none text-white">Home</router-link>
        </span>
        <span> / </span>
        <span class="fw-bold">{{ subTitle }}</span>
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
  height: 35em;
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
@media screen and (max-width: 600px) {
  .banner {
    height: 28em;
  }
}
.title {
  padding: 0.6rem 2rem;
  background: #cccccc4c;
  border-radius: 20px;
}
</style>
