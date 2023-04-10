<script setup>
import {ref, onMounted, computed} from "vue";
import sal from 'sal.js';
import Button from "primevue/button";

const imagesLoaded = ref(0);

const allImagesLoaded = computed(() => {
  return imagesLoaded.value > 2
})

const loadImage = () => {
  imagesLoaded.value += 1;
}

onMounted(() => {

  const myCarouselElement = document.querySelector('#homeCarousel')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    pause: false,
    wrap: true
  })
  carousel.cycle();

  sal({
    once: false,
  });

})


</script>

<template>

  <div class="mt-5 mt-sm-5 mt-md-4 mt-lg-0" v-show="allImagesLoaded">

    <div id="homeCarousel" class="carousel slide carousel-fade">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/carousel/c1.jpeg" @load="loadImage" class="d-block w-100 carousel-img" alt="c1">
          <div class="carousel-caption d-block">
            <h3>sustainable cocoa farming</h3>
<!--            <p>Some representative placeholder content for the first slide.</p>-->
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/carousel/c2.jpg" @load="loadImage" class="d-block w-100 carousel-img" alt="c2">
          <div class="carousel-caption d-block">
            <h3>Farmer Registration</h3>
<!--            <p>Some representative placeholder content for the second slide.</p>-->
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/carousel/c3.jpg" @load="loadImage" class="d-block w-100 carousel-img" alt="c3">
          <div class="carousel-caption d-block">
            <h3>Greenfield Farmer Group</h3>
<!--            <p>Some representative placeholder content for the second slide.</p>-->
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div><!--   ./carousel -->



    <div class="container-fluid container-md mt-5 p-0 p-lg-5">
      <h2 class="fw-bold px-2">MISSION</h2>
      <p class="fs-5 px-2"
         data-sal="slide-up"
         data-sal-delay="300"
         data-sal-duration="2000"
         style="--sal-duration: 1s; --sal-delay: 1s;"
         data-sal-easing="ease-out-back"
      >
        Our mission is to impact the society and improve the well-being of small holder
        farmers through implementation of sustainable agricultural value
        chain programs that seek to increase crop yield, increase small holder
        farmers’ income and improve their livelihood to help alleviate poverty.
      </p>
      <div class="row flex-md-row-reverse g-0" style="background: #ecf0f1">
        <div class="col-md-6" >
          <img src="/img/xa.jpeg" alt="" class="img-fluid w-100">
        </div>
        <div class="col-md-6 pt-5  px-3">
          <h2 class="fw-bold"
              data-sal="slide-right"
              data-sal-delay="300"
              style="--sal-duration: 2s; --sal-delay: 1s;"
              data-sal-easing="ease-out-back"
          >WELCOME TO GREENFIELD</h2>
          <p class="mt-2 mt-lg-5 fs-6 text-center"
             data-sal="flip-right"
             data-sal-delay="300"
             style="--sal-duration: 2s; --sal-delay: 1s;"
             data-sal-easing="ease-out-back"
          >
            GreenField Agricultural Services is a social impact and value addition
            Agribusiness Company that supports small holder farmers by implementing
            sustainable agricultural value chain programs aimed at increasing crop
            yield, increasing farmers' income, improving their livelihood and reducing poverty.
            The Head Office is located in Kumasi, the capital city of the Ashanti Region.
            <br>  <button class="btn btn-sm btn-success">Read more</button>
          </p>
        </div>
      </div>


      <div class="row g-0" style="background: #ecf0f1;">
        <div class="col-md-6">
          <img src="/img/headoffice.jpeg" alt="" class="img-fluid w-100 h-100">
        </div>
        <div class="col-md-6 pt-5 px-3">
          <h2 class="fw-bold"
              data-sal="zoom-in"
              data-sal-delay="300"
              data-sal-easing="ease-out-back"
              style="--sal-duration: 1s; --sal-delay: 1s;"
          >VISION</h2>
          <p class="mt-2 mt-lg-5 fs-6 text-center"
             data-sal="zoom-in"
             data-sal-delay="300"
             style="--sal-duration: 2s; --sal-delay: 1s;"
             data-sal-easing="ease-out-back"
          >
            Our vision is to become the preferred social impact and value addition
            Agribusiness partner in Ghana and West Africa with tailor-made and farmer
            friendly agribusiness models that work effectively for small holder farmers
            and seek to increase crop yield, increase small holder farmers' income,
            improve their livelihood and help alleviate poverty.
          </p>
        </div>

      </div>
    </div>







    <div class="container mt-3 mb-5">
      <div class="row">
        <div class="col-12 text-center">
          <div class="section-title">
            <h3 class="title mb-2 mt-5 underline"><span class="text-success">Management </span> Team</h3>
            <hr style="width: 3em; margin: 0 auto; border: 2px solid green;">
          </div>
        </div><!--end col-->
      </div><!--end row-->

      <div class="row justify-content-center">
        <div class="col-12 mb-5">
          <div class="mt-4 pt-2">
            <div class="team position-relative d-block text-center">
              <div class="image position-relative d-block overflow-hidden">
                <img src="/img/team/samuel.jpg" class="img-fluid rounded-circle" alt="sebe">
                <div class="overlay rounded bg-dark"></div>
              </div>
              <div class="content py-2 member-position bg-white overflow-hidden d-inline-block">
                <h4 class="title mb-0">Mr. Samuel Amissah </h4>
                <small class="text-muted">Founder & CEO</small><br><br>
              </div>
            </div>
          </div>
        </div><!--end col-->
      </div>


      <div class="row">
        <div class="col-lg-3 col-md-6 col-12 mb-5">
          <div class="mt-4 pt-2">
            <div class="team position-relative d-block text-center">
              <div class="image position-relative d-block overflow-hidden">
                <img src="/img/team/sebe.jpg" class="img-fluid rounded-circle" alt="sebe">
                <div class="overlay rounded bg-dark"></div>
              </div>
              <div class="content py-2 member-position bg-white border-bottom overflow-hidden d-inline-block">
                <h4 class="title mb-0">Mr. Kofi Sebe</h4>
                <small class="text-muted">General Manager</small><br><br>
<!--                <small>-->
<!--                  <a href="" class="text-decoration-none text-success">View Profile</a>-->
<!--                </small>-->
              </div>
            </div>
          </div>
        </div><!--end col-->

        <div class="col-lg-3 col-md-6 col-12 mb-5">
          <div class="mt-4 pt-2">
            <div class="team position-relative d-block text-center">
              <div class="image position-relative d-block overflow-hidden">
                <img src="/img/team/ellen.jpg" class="img-fluid rounded-circle" alt="ellen">
                <div class="overlay rounded bg-dark"></div>
              </div>
              <div class="content py-2 member-position bg-white border-bottom overflow-hidden  d-inline-block">
                <h4 class="title mb-0">Ms Ellen Addai</h4>
                <small class="text-muted">Project Administration Officer</small><br><br>
<!--                <small>-->
<!--                  <a href="" class="text-decoration-none text-success">View Profile</a>-->
<!--                </small>-->
              </div>
            </div>
          </div>
        </div><!--end col-->

        <div class="col-lg-3 col-md-6 col-12 mb-5">
          <div class="mt-4 pt-2">
            <div class="team position-relative d-block text-center">
              <div class="image position-relative d-block overflow-hidden">
                <img src="/img/team/benjamin.jpg" class="img-fluid rounded-circle" alt="benjamin">
                <div class="overlay rounded bg-dark"></div>
              </div>
              <div class="content py-2 member-position bg-white border-bottom overflow-hidden d-inline-block">
                <h4 class="title mb-0">Mr. Benjamin Dadzie</h4>
                <small class="text-muted">Operations Manager</small><br><br>
<!--                <small>-->
<!--                  <a href="" class="text-decoration-none text-success">View Profile</a>-->
<!--                </small>-->
              </div>
            </div>
          </div>
        </div><!--end col-->

        <div class="col-lg-3 col-md-6 col-12 mb-5">
          <div class="mt-4 pt-2">
            <div class="team position-relative d-block text-center">
              <div class="image position-relative d-block overflow-hidden">
                <img src="/img/team/asante.jpg" class="img-fluid rounded-circle" alt="asante">
                <div class="overlay rounded bg-dark"></div>
              </div>
              <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                <h4 class="title mb-0">Mr. Collins Asante</h4>
                <small class="text-muted">Project Coordinator</small><br><br>
<!--                <small>-->
<!--                  <a href="" class="text-decoration-none text-success">View Profile</a>-->
<!--                </small>-->
              </div>
            </div>
          </div>
        </div><!--end col-->
      </div><!--end row-->
    </div>


  </div>

  <div class="text-center" v-if="!allImagesLoaded" style="margin: 40vh 0">
    <span class="spinner-grow"></span>
  </div>


</template>

<style scoped>
@import 'sal.js/dist/sal.css';
.carousel-img{
  filter: brightness(90%);
}

.underline {

}
</style>
