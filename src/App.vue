<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref, watch} from "vue";

const navbarCollapse = ref(null);
const route =  useRoute();
const router = useRouter();
const moreServices = ref(null);

const togglerElement = ref(null);


const togglerFunction = (e) => {

  if ( e.delegateTarget.classList.contains('collapsed')){
    e.delegateTarget.children[0].style.display = 'block';
    e.delegateTarget.children[1].style.display = 'none';
  }else{
    e.delegateTarget.children[0].style.display = 'none';
    e.delegateTarget.children[1].style.display = 'block';
  }

}

const hideTimesIcon = () => {
  togglerElement.value.children[0].style.display = 'block';
  togglerElement.value.children[1].style.display = 'none';
}

const goHome = () => {router.push({name: 'home'})}

onMounted(() => {

  watch(() => route.name, () => {
    navbarCollapse.value.classList.remove('show');
    togglerElement.value.children[0].style.display = 'block';
    togglerElement.value.children[1].style.display = 'none';
  })

  // moreServices.value.onclick = () =>  navbarCollapse.value.classList.remove('show');


})
</script>

<template>

  <div class="">
  <nav class="navbar navbar-expand-lg fixed-top p-0 shadow shadow-sm" id="mainNav">
    <div class="container-fluid">
      <a class="navbar-brand" style="cursor: pointer;" @click="goHome">
        <img src="/img/logo.jpg" class="logo" height="50" width="80" alt="logo"/>
      </a>

      <a class="navbar-toggler text-decoration-none" @click="togglerFunction($event)" ref="togglerElement" data-bs-toggle="collapse"
         data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
         aria-expanded="false" aria-label="Toggle navigation" style="cursor: pointer;">
        <span class="pi pi-bars ms-1"></span>
        <span class="pi pi-times ms-1" style="display: none;"></span>
      </a>
      <div class="collapse navbar-collapse text-white" id="navbarResponsive" ref="navbarCollapse">
        <ul class="navbar-nav text-uppercase ms-auto py-lg-0 fw-bold">
          <li class="nav-item text-center">
            <router-link :to="{name: 'home'}" class="nav-link text-decoration-none">home</router-link>
          </li>

          <li class="nav-item text-center">
            <router-link :to="{name: 'products'}" class="nav-link text-decoration-none">product & services</router-link>
          </li>

          <li class="nav-item text-center">
            <a href="#" class="nav-link text-decoration-none">Social impact</a>
          </li>

          <li class="nav-item text-center">
            <router-link :to="{name: 'gallery'}" class="nav-link text-decoration-none">gallery</router-link>
          </li>

          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle text-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="d-lg-none">&nbsp; &nbsp; &nbsp;</span>our programs
            </div>
            <ul class="dropdown-menu text-center">
              <li><a href="#" class="dropdown-item">project one</a></li>
              <li><a href="#" class="dropdown-item">project two</a></li>
            </ul>
          </li>

          <li class="nav-item text-center">
            <a href="#" class="nav-link text-decoration-none ">careers</a>
          </li>

          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle text-center" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="d-lg-none">&nbsp; &nbsp; &nbsp;</span>About
            </div>
            <ul class="dropdown-menu text-center">
              <router-link :to="{name: 'management'}" class="nav-link text-decoration-none">management</router-link>
            </ul>
          </li>

          <li class="nav-item text-center">
            <router-link :to="{name: 'contact'}" class="nav-link text-decoration-none">contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <router-view/>

    <footer class="bg-success text-white">
    <div class="container-fluid py-5">
      <div class="row text-center">
        <div class="col-6 col-lg-3 mb-4">
          <h4>Company</h4>
            <a href="#" class="text-decoration-none text-white">About Us</a><br>
            <a href="#" class="text-decoration-none text-white">Leadership</a><br>
            <a href="#" class="text-decoration-none text-white">Social Impact</a><br>
            <a href="#" class="text-decoration-none text-white">Careers</a><br>
        </div>

        <div class="col-6 col-lg-3 mb-4">
          <h4>Products</h4>
          <a href="#" class="text-decoration-none text-white">Product One</a><br>
          <a href="#" class="text-decoration-none text-white">Product Two</a><br>
          <a href="#" class="text-decoration-none text-white">Product Three</a><br>
        </div>

        <div class="col-6 col-lg-3 mb-4">
          <h4>Contact</h4>
            <a href="#" class="text-decoration-none text-white"><span class="fw-bold">Phone:</span> 0243631511 / 0265557165 / 0202144534</a><br>
            <a href="#" class="text-decoration-none text-white"><span class="fw-bold">Email:</span> greenfieldagriculturalservices@gmail.com</a><br>
            <a href="#" class="text-decoration-none text-white"><span class="fw-bold">Location:</span> Four 34 st Agric Nzema</a><br>
        </div>

        <div class="col-6 col-lg-3 mb-4">
          <h4>Connect</h4>
          <div class="d-flex text-center">
            <div class="mx-auto">
<!--              <a><span class="pi pi-facebook" style="font-size: 1.6em"></span></a>-->
<!--              <a ><span class="pi pi-linkedin mx-4" style="font-size: 1.6em"></span></a>-->
<!--              <a ><span class="pi pi-twitter" style="font-size: 1.6em"></span></a>-->
              <a class="btn btn-dark mx-2" href="tel:+233243631511"><i class="pi pi-phone"></i></a>
              <a class="btn btn-success mx-2" href="https://api.whatsapp.com/send?phone=233243631511"><i class="pi pi-whatsapp"></i></a>
              <a class="btn bg-primary text-white mx-2" href="https://www.linkedin.com"><i class="pi pi-linkedin"></i></a>
            </div>

          </div>
        </div>
      </div>
    </div>
    </footer>
  </div>
</template>

<style scoped>

.router-link-exact-active {
  color: gold;
}
.navbar-expand-lg{
  background: linear-gradient(45deg, white, white, #eafcea );
}

</style>
