<script setup>
import {onMounted, ref} from "vue";
import { galleryData } from "@/data/galleryImages";

const modalImage = ref();
const modal = ref();
const types = ref([

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
  {
    key: "all",
    value: "ALL",
  }
]);
const selectedOption = ref("PEOPLE");
const images = ref([]);
const handleOptionChanged = (key, value) => {
  selectedOption.value = value;
  if (key === "all") {
    images.value = galleryData;
  } else {
    images.value = galleryData.filter((image) => image.key === key);
  }
};


onMounted(() => {
  images.value = galleryData.filter((image) => image.key === "people");
})

const openModal = (event) => {
  const src = event.target.getAttribute('src');
  // const modal = this.$refs.modal;
  const modalImg = modalImage.value;

  modalImg.setAttribute('src', src);
  modal.value.style.display = "block";

}

const closeModal = () => {
  modal.value.style.display = "none";
}

</script>

<template>

  <div class="container my">
    <div class="home-about my text-center">
      <h2>Gallery</h2>
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
      <h3 v-if="!images.length">No Data found for this category</h3>
      <TransitionGroup>
        <div class="gallery" v-for="(image, key) in images" :key="key">
          <div class="inner-img">
            <img :src="image.path" alt="image" class="img-fluid" @click="openModal" />
          </div>
        </div>
      </TransitionGroup>
    </div>

    <!-- The Modal -->
    <div id="myModal" ref="modal" class="modal" style="margin-top: 4rem;">
      <span class="close" @click="closeModal">&times;</span>
      <img class="modal-content img-fluid" ref="modalImage" alt="image">
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
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
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
  /*width: 100%;*/
  /*min-height: 520px;*/
  cursor: pointer;
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



/*Modal*/
.page-link, .btn-primary{
  font-size: 1.1em;
}

.img-fluid:hover {opacity: 0.8;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  padding: 5px;
  max-height: 75vh;
  border-radius: 4%;
}

/* Add Animation */
.modal-content, #caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)}
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)}
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
</style>
