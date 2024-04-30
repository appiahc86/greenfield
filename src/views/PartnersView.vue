<script setup>
import {onMounted} from "vue";
import sal from "sal.js";
import PartnersCard from "@/component/PartnersCard.vue";


onMounted(() => {
  sal({
    once: false,
  });

})

</script>

<template>
  <div class="mt-5">
    <div class="py-5 top text-center">
      <h4 class="fw-bold">Partners</h4>
    </div>
  </div>

  <div class="my-5"></div>

  <PartnersCard />

</template>

<style scoped>


</style>