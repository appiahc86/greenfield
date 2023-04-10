<script setup>
import {computed, ref} from "vue";

const imagesLoaded = ref(0);

const loadImage = () => {
  imagesLoaded.value += 1;
}

const allImagesLoaded = computed(() => {
  return imagesLoaded.value > 1
})

</script>

<template>
  <img src="/img/contact/as.jpg" @load="loadImage" class="d-none" alt="bg">
  <img src="/img/contact/bg.webp" @load="loadImage" class="d-none" alt="bg">

  <div v-if="allImagesLoaded" class="mt-5 cover">

    <div class="container">
      <div class="row px-2 px-sm-0">
        <div style="margin-top: 180px"></div>
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="card shadow h-100 p-3 text-center">
            <h1 class="mb-3"><span class="pi pi-map-marker text-danger" style="font-size: 1.4em"></span></h1>
            <h5 class="mb-3">OUR MAIN OFFICE</h5>
            <p class="text-muted">Four 34 st Agric Nzema</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="card shadow h-100 p-3 text-center">
            <h1 class="mb-3"><span class="pi pi-phone text-dark" style="font-size: 1.4em"></span></h1>
            <h5 class="mb-3">PHONE NUMBER</h5>
            <p class="text-muted">0243631511 / 0265557165 / 0202144534</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="card shadow h-100 p-3 text-center">
            <h1 class="mb-3"><span class="pi pi-envelope" style="font-size: 1.4em"></span></h1>
            <h5 class="mb-3">EMAIL</h5>
            <p class="text-muted">greenfieldagriculturalservices@gmail.com</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="card shadow h-100 p-3 text-center">
            <h1 class="mb-3"><span class="pi pi-whatsapp text-success" style="font-size: 1.4em"></span></h1>
            <h5 class="mb-3">WHATSAPP</h5>
            <p class="text-muted">0243631511</p>
          </div>
        </div>
      </div>

    </div>


<!--    Google Map -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.743389513819!2d-1.6395819257635391!3d6.678680193316519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb970cb6888acd%3A0x388cd70277e9449a!2sModern%20Tiles%20GH%20Ltd!5e0!3m2!1sen!2sgh!4v1680938321412!5m2!1sen!2sgh" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>


  </div>
  <div class="text-center" v-else style="margin: 40vh 0">
      <span class="spinner-grow"></span>
  </div>


</template>


<style scoped>
.cover {
  background: url("../../public/img/contact/bg.webp");
  background-position-x: center;
  background-size: cover;
}
</style>