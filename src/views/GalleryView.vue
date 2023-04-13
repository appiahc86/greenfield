<script setup>
import { ref } from "vue";
import { galleryData } from "../data/galleryImages";
const types = ref([
  {
    key: "all",
    value: "ALL",
  },
  {
    key: "people",
    value: "PEOPLE",
  },
  {
    key: "products",
    value: "PRODUCTS",
  },
  {
    key: "others",
    value: "OTHERS",
  },
]);
const selectedOption = ref("ALL");
const images = ref(galleryData);
const handleOptionChanged = (key, value) => {
  selectedOption.value = value;
  if (key === "all") {
    images.value = galleryData;
  } else {
    const filteredByKeys = galleryData.filter((image) => image.key === key);
    images.value = filteredByKeys;
  }
};
</script>

<template>
  <div class="container my">
    <div class="home-about my text-center">
      <h2>Gallery</h2>
      <P
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto modi
        repellendus, id cumque aspernatur atque eum distinctio recusandae at
        pariatur perferendis nobis harum non et quaerat veritatis, quidem nihil
        aperiam?</P
      >
    </div>
    <div class="gallery-type__buttons-container">
      <div class="checkers" v-for="t in types">
        <input
          type="checkbox"
          name="checkers"
          :id="t.key"
          v-model="selectedOption"
          :value="t.value"
          :checked="selectedOption === 'ALL'"
          @change="handleOptionChanged(t.key, t.value)"
        />
        <label :for="t.key" :class="{ active: selectedOption === t.value }">{{
          t.value
        }}</label>
      </div>
    </div>

    <div class="gallery-container my-s">
      <h3 v-if="images.length === 0">No Data found for this category</h3>
      <TransitionGroup>
        <div class="gallery" v-for="(image, key) in images" :key="key">
          <div class="inner-img">
            <img :src="image.path" alt="" />
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
label.active {
  background: #07264d !important;
  color: #fff;
}
.gallery-type__buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
.checkers {
  margin: 1rem;
}
.checkers label {
  padding: 0.5rem 2rem;
  background: #f3f4f6;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color linear 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checkers input {
  display: none;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.3rem;
}
.gallery-container .gallery {
  width: 100%;
  transition: all 0.4s ease-in-out;
  margin: 1rem 0;
}
.gallery-container .gallery img {
  width: 100%;
  min-height: 520px;
}
.my-s {
  margin: 2.5rem 0;
}

@media (max-width: 990px) {
  .gallery-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 768px) {
  .gallery-container,
  .gallery-type__buttons-container {
    display: block;
    text-align: center;
  }
}
</style>
