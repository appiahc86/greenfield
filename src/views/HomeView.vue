<script setup>
import { ref, onMounted } from "vue";
import sal from "sal.js";
import Button from "primevue/button";
// import ServiceCard from "@/component/ServiceCard.vue";
import TeamCard from "@/component/TeamCard.vue";
import PartnersCard from "@/component/PartnersCard.vue"
import ContactCard from "@/component/ContactCard.vue";
import { useMyStore } from "@/store/home";
import {onBeforeRouteLeave} from "vue-router";

const count = ref(20000);
const store = useMyStore();


onMounted(() => {
  const myCarouselElement = document.querySelector("#homeCarousel");
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    pause: false,
    wrap: true,
  });
  carousel.cycle();

  sal({
    once: false,
  });

  const counter = document.querySelector('.counter');
  window.addEventListener('scroll', () => {
    const containerRect = counter.getBoundingClientRect();

    if (containerRect.top < window.innerHeight) {

      const intervalId = setInterval(() => {
        if (count.value < 50000) {
          count.value += 10;
        } else {
          clearInterval(intervalId);
        }
      }, 25);

    }
  });




});

onBeforeRouteLeave((to, from, next) => {
  store.homeLazy = false;
  next();
});

</script>

<template>

  <div class="mt-5 mt-sm-5 mt-md-4 mt-lg-0">
    <div id="homeCarousel" class="carousel slide ">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="/img/carousel/c1.jpeg"
            class="d-block w-100 carousel-img"
            alt="img"
          />
          <div class="carousel-caption d-block">
            <h3>sustainable cocoa farming</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
              src="/img/carousel/c4.jpg"
              class="d-block w-100 carousel-img"
              alt="img"
          />
          <div class="carousel-caption d-block">
            <h3>Food Security</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
              src="/img/carousel/c2.jpg"
              class="d-block w-100 carousel-img"
              alt="img"
          />
          <div class="carousel-caption d-block">
            <h3>Farmer Registration</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
              src="/img/carousel/c3.jpg"
            class="d-block w-100 carousel-img"
            alt="img"
          />
          <div class="carousel-caption d-block">
            <h3>Greenfield Farmer Group</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img
              src="/img/carousel/c5.jpg"
              class="d-block w-100 carousel-img"
              alt="img"
          />
          <div class="carousel-caption d-block">
            <h3>Food Security</h3>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span class="pi pi-arrow-circle-left" style="font-size: 2em;" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
<!--        <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
        <span class="pi pi-arrow-circle-right" style="font-size: 2em;" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!--   ./carousel -->


<!--  Stock Feed -->
  <div class="container">
    <div class="row g-0">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 hidden-xs">
        <div class="">
          <span style="float:left; font-size: 15px; line-height: 24px;
          font-weight: 400; padding-top:10px"><strong>GSE STOCK FEED</strong></span>
        </div>
      </div><!--date-panel-->
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <div class="feed-board">
          <iframe src="https://gsestockfeed.com" style="width: 100%; height: 40px; background: rgba(204,204,204,0.16);"
                  scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0">
          </iframe>

        </div>
      </div><!--feed board-->
    </div>
  </div>
  <!--  ./Stock Feed -->



  <div class="container mt-5 ">
    <div class="row">
      <div class="col-lg-6 d-flex mb-2 justify-content-center align-items-center">
        <div class="home-about">
          <h2>About Us</h2>
          <h3
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="2000"
              style="--sal-duration: 1s; --sal-delay: 1s;"
              data-sal-easing="ease-out-back"
          >
            IMPROVING THE LIVELIHOOD OF SMALL HOLDER FARMERS<br />
          </h3>
          <p>
            Our mission is to impact the society and improve the well-being of
            small holder farmers through implementation of sustainable
            agricultural value chain programs that seek to increase crop yield,
            increase small holder farmers’ income and improve their livelihood
            to help alleviate poverty.
          </p>
          <p>
          Our goal is to positively impact the society, create value in the lives of small 
          holder farmers and improve their well-being to help reduce poverty. 
          </p>
          <div class="hb-box d-flex flex-row">
            <div class="hb-inner">
              <figure class="hb-icon">
                <img
                    src="/img/shield-orange.png" alt=""
                />
              </figure>
              <h5>We are Passionate</h5>
              <p>Improving livelihood to help alleviate poverty.</p>
            </div>
            <div class="hb-inner spacing-sm">
              <figure class="hb-icon">
                <img src="/img/wheat.png" alt="" />
              </figure>
              <h5>Industry Oriented</h5>
              <p>Enabling Ecosystem for Food and Agriculture.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 spacing-md mb-2">
        <figure class="home-about-img">

          <img v-if="store.homeLazy"
               v-lazy="{ src: '/img/gfofficer.jpg',
              loading: '/img/dummy768x1024.svg',
               error: '', delay: 500 }"
               class="img-fluid"
               alt="officer">
          <img
              v-else
              src="/img/gfofficer.jpg"
               alt="officer"
               class="img-fluid">

          <div class="image-badget">
            <figure class="ib-icon">
              <img src="/img/medal.png" alt="medal" />
            </figure>
            <h4 class="mt-0">Our Values</h4>
            <p>
              Continuously support smallholder farmers on sustainable basis to increase their crop yield, increase their income,
              and improve their livelihood to help reduce poverty while meeting the expectations of our shareholders
            </p>
          </div>
        </figure>
      </div>
    </div>
  </div>

  <section>
<!--     SERVICES START-->
<!--    <ServiceCard />-->
<!--     SERVICES END-->

    <div class="why-us-layer mt-5 mb-5 container-fluid">
      <div class="row me-0">
        <div class="col-md-6">
          <img
              v-if="store.homeLazy"
               v-lazy="{ src: '/img/headoffice.jpeg', loading: '/img/dummy1280x903.svg', error: '', delay: 500 }"
               alt="headoffice" class="img-fluid">
          <img v-else src="/img/headoffice.jpeg" alt="headoffice" class="img-fluid">
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <div class="why-us-left">
            <h2
                data-sal="slide-right"
                data-sal-delay="300"
                style="--sal-duration: 2s; --sal-delay: 1s;"
                data-sal-easing="ease-out-back"
            >WHY CHOOSE US</h2>
            <p
                data-sal="zoom-in"
                data-sal-delay="300"
                style="--sal-duration: 2s; --sal-delay: 1s;"
                data-sal-easing="ease-out-back"
            >
              We provide small holder farmers with training and extension services, quality agro inputs,
              and facilitate access to micro loans for farmers to purchace agro inputs acting as a bridge
              between small holder farmers and Microfinance Institutions (MFIs). We support small holder
              farmers in the comfort of their communities to increase their crop yield, increase
              their income and improve their livelihood to help alleviate poverty.
            </p>


            <router-link class="btn btn-sm btn-default" :to="{name: 'contact'}" role="button">GET IN TOUCH</router-link>
          </div>
        </div>
      </div>
    </div>


      <div class="section-title">
        <h2>TOTAL FARMERS ONBOARD</h2>
        <h3>OUR FARMERS</h3>
        <h1 class="counter text-success fw-bold"
            style="border-radius: 50%; background: rgba(204,204,204,0.24)">
          {{ count ? count.toLocaleString() : 0 }}</h1>
      </div>

    <!-- TEAM STAR -->
    <div class="container mt-5 mb-5">
      <div class="section-title">
        <h2>MEET</h2>
        <h3>Our Team</h3>
        <p>
          We have a team of professionals, dedicated to providing excellent
          service.
        </p>
      </div>
      <TeamCard />
    </div>
    <!-- TEAM END -->
    <ContactCard />
    <!-- CONTACT END -->
  </section>


<!--  Partners Card-->
  <PartnersCard />

</template>

<style>
@import "sal.js/dist/sal.css";
.carousel-img {
  filter: brightness(90%);
}

.home-about-img {
  margin-top: 0;
  position: relative;
}
.home-about-img img {
  width: 100%;
}

.home-about h2 {
  color: #dae1e6;
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 60px;
  line-height: 70px;
}
.home-about h3 {
  font-size: 35px;
  line-height: 42px;
  margin-top: -35px;
  position: relative;
  z-index: 1;
}

.home-about p {
  margin: 20px 0;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
}
.hb-box {
  margin-top: 40px;
}
.hb-icon {
  width: 50px;
}
.hb-icon img {
  width: 100%;
}
.hb-inner {
  padding-right: 30px;
}
.hb-box h5 {
  font-size: 18px;
  margin: 15px 0 2px;
}
.hb-box p {
  margin: 0;
  font-size: 14px;
  font-style: italic;
}
.home-about-img .image-badget {
  background-color: #de7900;
  padding: 30px;
  max-width: 300px;
  position: absolute;
  bottom: 15px;
  left: 15px;
  outline: 1px dashed #fff;
  outline-offset: -12px;
  color: #fff;
}
.image-badget {
  padding: 20px !important;
}
.image-badget h4 {
  font-size: 20px;
  line-height: 20px;
}

.image-badget p {
  font-style: italic;
}
.ib-icon {
  width: 4em;
}
/* section */
section {
  overflow: hidden !important;
}
.services-layer {
  padding: 80px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.section-title {
  text-align: center;
  margin: auto auto 50px auto;
}
.section-title h2 {
  color: #dae1e6;
  opacity: 0.8;
  text-transform: uppercase;
  font-size: 3.5em;
  text-align: center;
  line-height: 42px;
}

.section-title h3 {
  margin-top: -25px;
  text-transform: uppercase;
  z-index: 1;
  position: relative;
  line-height: 35px;
}

.section-title p {
  margin: 0 0 15px;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: var(--paragraph-color);
}

.service-box {
  background-color: #fff;
  -webkit-box-shadow: 0 0 11px 0 rgba(6, 22, 58, 0.14);
  -moz-box-shadow: 0 0 11px 0 rgba(6, 22, 58, 0.14);
  box-shadow: 0 0 11px 0 rgba(6, 22, 58, 0.14);
  border-radius: 5px;
  padding: 30px 20px;
  margin: 15px 0;
}

.media {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
}
.sb-icon {
  width: 50px;
  float: left;
}
.mr-3 {
  margin-right: 1rem !important;
}
.media-body {
  flex: 1;
}
.media-body h4 {
  margin-bottom: 6px;
}

.why-us-img-bg {
  /*height: 600px;*/
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  /*position: relative;*/
}
</style>
