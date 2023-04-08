<script setup>
import { ref } from "vue";
import Carousel from "primevue/carousel";
import Button from "primevue/button";
import Tag from "primevue/tag";
const responsiveOptions = ref([
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '991px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  }
]);

const products  = ref([
  {name: 'Mr Amissah Francis', price: 200, inventoryStatus: 'boom', image: '/img/headoffice.jpg'},
  {name: 'hello', price: 200, inventoryStatus: 'boom', image: '/img/headoffice.jpg'},
  {name: 'Appiah Collins', price: 200, inventoryStatus: 'boom', image: '/img/headoffice.jpg'},
  {name: 'hello', price: 200, inventoryStatus: 'boom', image: '/img/headoffice.jpg'},
  {name: 'hello', price: 200, inventoryStatus: 'boom', image: '/img/headoffice.jpg'},
])
</script>

<template>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="mt-5 mt-sm-5 mt-md-4 mt-lg-0">

          <br><br><br><h4>Gallery</h4>

          <div class="card shadow border-0 mb-4">
            <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
              <template #item="slotProps">
                <div class="m-2 text-center py-5 px-3">
                  <div class="mb-3">
                    <img :src="slotProps.data.image" alt="jj" class="shadow-2 img-fluid" />
                  </div>
                  <div>
                    <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                    <h6 class="mt-0 mb-3">${{ slotProps.data.price }}</h6>
                    <Tag :value="slotProps.data.inventoryStatus" severity="success" />
                    <div class="mt-5">
                      <Button icon="pi pi-search" rounded class="me-2" />
                      <Button icon="pi pi-star-fill" rounded severity="success" class="me-2" />
                      <Button icon="pi pi-cog" rounded severity="help" />
                    </div>
                  </div>
                </div>
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>

<style scoped>

</style>
