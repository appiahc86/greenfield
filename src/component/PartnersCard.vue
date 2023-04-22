<script setup>
import { useMyStore } from "@/store/home";

const store = useMyStore();
</script>

<template>

  <!--  Partners -->
  <div class="container my-5">
    <div class="text-center">
      <h2 class="text-muted">OUR
        <span
            style="border-bottom: 2px solid green; padding-bottom: 10px;">
        PAR</span>TNERS
      </h2><br>
    </div>
    <div class="row justify-content-center text-center">
      <div class="col-6 col-sm-4 col-md-3 mb-3">
        <div class="card h-100 px-2">
          <img
              v-if="store.homeLazy"
               v-lazy="{ src: '/img/partners/ab.png', loading: '/img/dummy493x168.svg', error: '', delay: 500 }"
               class="img-fluid my-auto"
               alt="ab"
          >
          <img
              v-else
              src="/img/partners/ab.png"
              class="img-fluid my-auto"
              alt="ab"
          >

        </div>

      </div>

      <div class="col-6 col-sm-4 col-md-3 mb-3">
        <div class="card h-100 px-2">
          <img
              v-if="store.homeLazy"
               v-lazy="{ src: '/img/partners/vf.png', loading: '/img/dummy493x168.svg', error: '', delay: 500 }"
               alt="vf" class="img-fluid my-auto"
          >
          <img
              v-else
              src="/img/partners/vf.png"
              alt="vf" class="img-fluid my-auto"
          >
        </div>
      </div>

      <div class="col-6 col-sm-4 col-md-3 mb-3">
        <div class="card h-100 px-2">
          <img
              v-if="store.homeLazy"
               v-lazy="{ src: '/img/partners/agro.png', loading: '/img/dummy493x168.svg', error: '', delay: 500 }"
               alt="agro" class="img-fluid my-auto">
          <img
              v-else
              src="/img/partners/agro.png"
              alt="agro" class="img-fluid my-auto">
        </div>
      </div>

      <div class="col-6 col-sm-4 col-md-3 mb-3">
        <div class="card h-100 px-2">
          <img
              v-if="store.homeLazy"
               v-lazy="{ src: '/img/partners/rmg.png', loading: '/img/dummy493x168.svg', error: '', delay: 500 }"
               alt="rmg" class="img-fluid my-auto">
          <img
             v-else
              src="/img/partners/rmg.png"
              alt="rmg" class="img-fluid my-auto">
        </div>
      </div>




    </div>
  </div>


</template>

<style scoped>

</style>