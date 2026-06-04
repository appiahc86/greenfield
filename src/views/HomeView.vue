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

const count = ref(0);
const store = useMyStore();
const hasAnimated = ref(false);


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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true;
        const intervalId = setInterval(() => {
          if (count.value < store.registeredFarmers) {
            count.value += Math.ceil(store.registeredFarmers / 100);
          } else {
            count.value = store.registeredFarmers;
            clearInterval(intervalId);
          }
        }, 20);
      }
    });
  }, { threshold: 0.5 });

  if (counter) {
    observer.observe(counter);
  }
});

onBeforeRouteLeave((to, from, next) => {
  store.homeLazy = false;
  next();
});

</script>

<template>


  <div class="mt-5 mt-sm-5 mt-md-4 mt-lg-0 hero-section">
    <div id="homeCarousel" class="carousel slide modern-carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4"></button>
      </div>
      <div class="carousel-inner">

        <div class="carousel-item active">
          <div class="carousel-overlay"></div>
          <img
              src="/img/carousel/n1.jpeg"
              class="d-block w-100 carousel-img"
              alt="img"
          />
          <div class="carousel-caption modern-caption">
            <h3 class="caption-title">Sustainable Cocoa Farming</h3>
            <p class="caption-text">Growing quality cocoa for a better tomorrow</p>
          </div>
        </div>

        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img
            src="/img/carousel/n3.jpeg"
            class="d-block w-100 carousel-img"
            alt="img"
          />
          <div class="carousel-caption modern-caption">
            <h3 class="caption-title">Vegetable Farming</h3>
            <p class="caption-text">Fresh produce from farm to table</p>
          </div>
        </div>

        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img
              src="/img/carousel/c4.jpg"
              class="d-block w-100 carousel-img"
              alt="img"
          />
          <div class="carousel-caption modern-caption">
            <h3 class="caption-title">Food Security</h3>
            <p class="caption-text">Ensuring sustainable nutrition for all</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img
              src="/img/carousel/c2.jpg"
              class="d-block w-100 carousel-img"
              alt="img"
          />
          <div class="carousel-caption modern-caption">
            <h3 class="caption-title">Farmer Registration</h3>
            <p class="caption-text">Join our growing community of farmers</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img
              src="/img/carousel/n2.jpeg"
              class="d-block w-100 carousel-img"
              alt="img"
          />
          <div class="carousel-caption modern-caption">
            <h3 class="caption-title">Empowering Communities</h3>
            <p class="caption-text">Building resilient agricultural systems</p>
          </div>
        </div>
      </div>
<!--      <button-->
<!--        class="carousel-control-prev modern-control"-->
<!--        type="button"-->
<!--        data-bs-target="#homeCarousel"-->
<!--        data-bs-slide="prev"-->
<!--      >-->
<!--        <span class="pi pi-chevron-left control-icon" aria-hidden="true"></span>-->
<!--        <span class="visually-hidden">Previous</span>-->
<!--      </button>-->
<!--      <button-->
<!--        class="carousel-control-next modern-control"-->
<!--        type="button"-->
<!--        data-bs-target="#homeCarousel"-->
<!--        data-bs-slide="next"-->
<!--      >-->
<!--        <span class="pi pi-chevron-right control-icon" aria-hidden="true"></span>-->
<!--        <span class="visually-hidden">Next</span>-->
<!--      </button>-->
    </div>
  </div>
  <!--   ./carousel -->


<!--  Stock Feed -->
  <div class="container stock-feed-container"
       data-sal="slide-up"
       data-sal-delay="100"
       data-sal-duration="800">
    <div class="row g-0 stock-feed-wrapper">
      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 hidden-xs">
        <div class="stock-label">
          <span class="stock-title"><i class="pi pi-chart-line"></i> GSE STOCK FEED</span>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <div class="feed-board">
          <iframe src="https://gsestockfeed.com"
                  class="stock-iframe"
                  scrolling="no"
                  marginwidth="0"
                  marginheight="0"
                  frameborder="0"
                  vspace="0"
                  hspace="0">
          </iframe>
        </div>
      </div>
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
          <div class="hb-box d-flex flex-row flex-wrap gap-3">
            <div class="hb-inner feature-card"
                 data-sal="fade"
                 data-sal-delay="100"
                 data-sal-duration="1000">
              <figure class="hb-icon">
                <img
                    src="/img/shield-orange.png" alt=""
                />
              </figure>
              <h5>We are Passionate</h5>
              <p>Improving livelihood to help alleviate poverty.</p>
            </div>
            <div class="hb-inner feature-card"
                 data-sal="fade"
                 data-sal-delay="200"
                 data-sal-duration="1000">
              <figure class="hb-icon">
                <img src="/img/wheat.png" alt="" />
              </figure>
              <h5>Industry Oriented</h5>
              <p>Enabling Ecosystem for Food and Agriculture.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6 spacing-md mb-2"
           data-sal="fade"
           data-sal-delay="200"
           data-sal-duration="1000">
        <figure class="home-about-img">

          <img v-if="store.homeLazy"
               v-lazy="{ src: '/img/gfofficer.jpg',
              loading: '/img/dummy768x1024.svg',
               error: '', delay: 500 }"
               class="img-fluid about-image"
               alt="officer">
          <img
              v-else
              src="/img/gfofficer.jpg"
               alt="officer"
               class="img-fluid about-image">

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
               v-lazy="{ src: '/img/headoffice4.jpeg', loading: '/img/dummy1280x903.svg', error: '', delay: 500 }"
               alt="headoffice" class="img-fluid">
          <img v-else src="/img/headoffice4.jpeg" alt="headoffice" class="img-fluid">
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
              We provide innovative, tailored-made, farmer-centred, and impact driven
              solutions that meet the needs of our farmers and offer them sustainable
              access to quality agro Inputs, training & extension services and micro
              credit to purchase inputs. Our aim is to increase crop yield of smallholder
              farmers, increase their income and improve their livelihood to help reduce
              poverty. We also believe in gender equality and provision of jobs for the
              youth especially women.
            </p>


            <router-link class="btn btn-sm btn-default" :to="{name: 'contact'}" role="button">GET IN TOUCH</router-link>
          </div>
        </div>
      </div>
    </div>



    <!-- EUDR Certification Section -->
    <div class="container mt-5 mb-5 eudr-section px-2 px-lg-1"
        >
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="eudr-text">
            <span class="eudr-badge">NEW ACHIEVEMENT</span>
            <h2>EUDR Certified</h2>
            <h3>EU Deforestation Regulation Compliance</h3>
            <p>
              <b>Greenfield Agricultural Services Limited</b> is proud to be officially certified
              in <strong>EUDR Compliance</strong> by the EUDR Institute — a CPD-accredited
              body. This certification affirms our commitment to deforestation-free supply
              chains and responsible sourcing, ensuring our farmers meet the highest
              European market standards.
            </p>
            <div class="eudr-highlights">
              <div class="eudr-highlight-item">
                <i class="pi pi-verified"></i>
                <span>CPD Certified</span>
              </div>
              <div class="eudr-highlight-item">
                <i class="pi pi-globe"></i>
                <span>EU Market Ready</span>
              </div>
              <div class="eudr-highlight-item">
                <i class="pi pi-shield"></i>
                <span>Deforestation-Free</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="cert-wrapper">
            <div class="cert-glow"></div>
            <img
                src="/img/eudr-certificate.jpeg"
                alt="EUDR Compliance Certificate - Greenfield Agricultural Services Limited"
                class="eudr-cert-img img-fluid"
            />
            <div class="cert-stamp">
              <i class="pi pi-check-circle"></i>
              <span>Verified 4 Jun 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ./EUDR Certification Section -->



      <div class="section-title farmers-counter"
           data-sal="zoom-in"
           data-sal-delay="100"
           data-sal-duration="1000">
        <h2>TOTAL FARMERS ONBOARD</h2>
        <h3>OUR FARMERS</h3>
        <div class="counter-wrapper">
          <h1 class="counter">
            {{ count ? count.toLocaleString() : 0 }}
          </h1>
          <p class="counter-label">Registered Farmers</p>
        </div>
      </div>


          <div class="container-fluid mt-5 mb-5 vegetable-farm"></div>



    <!-- TEAM START -->
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

<style scoped>
@import "sal.js/dist/sal.css";

/* Hero Carousel Styles */
.hero-section {
  position: relative;
  overflow: hidden;
}

.modern-carousel {
  border-radius: 0 0 30px 30px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.carousel-inner {
  height: 85vh;
  min-height: 500px;
}

.carousel-item {
  height: 85vh;
  min-height: 500px;
  position: relative;
}

.carousel-img {

  filter: brightness(80%);
  width: 100%;
  height: 100vh;        /* Full viewport height */
  object-fit: cover;    /* Fills the area, crops if needed */
  object-position: center;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.carousel-item:hover .carousel-img {
  transform: scale(1.05);
  filter: brightness(80%);
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //background: linear-gradient(
  //    135deg,
  //    rgba(25, 144, 139, 0.4) 0%,
  //    rgba(0, 0, 0, 0.6) 100%
  //);
  z-index: 1;
}

.modern-caption {
  z-index: 2;
  bottom: 20%;
  text-align: center;
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.caption-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.caption-text {
  font-size: 1.4rem;
  color: #f0f0f0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  font-weight: 300;
}

.modern-control {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  opacity: 0.7;
}

.modern-control:hover {
  background: rgba(25, 144, 139, 0.8);
  border-color: rgba(255, 255, 255, 0.8);
  opacity: 1;
  transform: scale(1.1);
}

.control-icon {
  font-size: 1.5rem;
  color: #ffffff;
}

.carousel-indicators {
  z-index: 2;
  margin-bottom: 2rem;
}

.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.carousel-indicators button.active {
  background-color: #19908b;
  border-color: #ffffff;
  transform: scale(1.3);
}

@media screen and (max-width: 768px) {
  .carousel-inner,
  .carousel-item {
    height: 60vh;
    min-height: 400px;
  }

  .caption-title {
    font-size: 2rem;
  }

  .caption-text {
    font-size: 1rem;
  }

  .modern-control {
    width: 45px;
    height: 45px;
  }

  .control-icon {
    font-size: 1.2rem;
  }
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

.feature-card {
  background: linear-gradient(135deg, rgba(25, 144, 139, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 15px;
  padding: 20px;
  transition: all 0.4s ease;
  border: 1px solid rgba(25, 144, 139, 0.1);
  flex: 1;
  min-width: 200px;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(25, 144, 139, 0.2);
  border-color: rgba(25, 144, 139, 0.3);
  background: linear-gradient(135deg, rgba(25, 144, 139, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);
}

.hb-icon {
  width: 50px;
  transition: transform 0.3s ease;
}

.feature-card:hover .hb-icon {
  transform: scale(1.2) rotate(5deg);
}

.hb-icon img {
  width: 100%;
}
.hb-inner {
  padding-right: 15px;
}
.hb-box h5 {
  font-size: 18px;
  margin: 15px 0 2px;
  font-weight: 600;
  color: #333;
}
.hb-box p {
  margin: 0;
  font-size: 14px;
  font-style: italic;
  color: #666;
}
.home-about-img .image-badget {
  background-color: #19908b;
  padding: 30px;
  max-width: 300px;
  position: absolute;
  bottom: 15px;
  right: 15px;
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

@media screen and (max-width: 760px) {
  .image-badget {
    right: 2px !important;
    left: auto !important;
    max-width: 200px !important;
    height: 200px;
    outline-offset: -6px !important;
    padding: 15px !important;
  }
  .image-badget img, .ib-icon {
    display: none;
  }
  .image-badget p {
    font-size: 11px;
  }
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

/* Farmers Counter Styling */
.farmers-counter {
  padding: 60px 20px;
  background: linear-gradient(135deg, rgba(25, 144, 139, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%);
  border-radius: 20px;
  margin: 80px auto;
  max-width: 1000px;
}

.counter-wrapper {
  margin-top: 30px;
  padding: 40px;
  background: linear-gradient(135deg, #19908b 0%, #0d6b67 100%);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(25, 144, 139, 0.3);
  position: relative;
  overflow: hidden;
}

.counter-wrapper::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.counter {
  font-size: 4.5rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  margin: 0;
  position: relative;
  z-index: 1;
  letter-spacing: 2px;
}

.counter-label {
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 1.2rem;
  margin-top: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
  z-index: 1;
}

/* Vegetable Farm Parallax Section */
.vegetable-farm {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
              url('../../public/img/home/5.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  height: 600px;
  position: relative;
  border-radius: 15px;

  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);

}

.vegetable-farm:hover {
  transform: scale(1.01);
}

@media screen and (max-width: 800px){
  .vegetable-farm {
    height: 300px !important;
    background-attachment: scroll;
  }

  .counter {
    font-size: 3rem !important;
  }

  .counter-wrapper {
    padding: 25px !important;
  }
}

@media screen and (max-width: 1000px){
  .vegetable-farm {
    height: 450px !important;
  }
}

/* Stock Feed Styling */
.stock-feed-container {
  margin-top: 30px;
  margin-bottom: 30px;
}

.stock-feed-wrapper {
  background: linear-gradient(135deg, rgba(25, 144, 139, 0.03) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 15px;
  padding: 15px 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(25, 144, 139, 0.1);
}

.stock-feed-wrapper:hover {
  box-shadow: 0 8px 30px rgba(25, 144, 139, 0.15);
  transform: translateY(-2px);
}

.stock-label {
  display: flex;
  align-items: center;
  height: 100%;
}

.stock-title {
  font-size: 15px;
  line-height: 24px;
  font-weight: 600;
  color: #19908b;
  display: flex;
  align-items: center;
  gap: 8px;
}

.stock-title i {
  font-size: 18px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.feed-board {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  overflow: hidden;
}

.stock-iframe {
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
}

/* About Image Enhancements */
.about-image {
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
}

.about-image:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
}

.image-badget {
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.image-badget:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Smooth Scroll Behavior */
html {
  scroll-behavior: smooth;
}

/* Global Page Transitions */
.container, .container-fluid {
  transition: all 0.3s ease;
}

/* Button Enhancement */
.btn-default {
  background: linear-gradient(135deg, #19908b 0%, #0d6b67 100%);
  border: none;
  color: white;
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(25, 144, 139, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.btn-default:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(25, 144, 139, 0.5);
  background: linear-gradient(135deg, #0d6b67 0%, #19908b 100%);
  color: white;
}

.btn-default:active {
  transform: translateY(-1px);
}

/* Why Us Section Enhancement */
.why-us-layer {
  position: relative;
  overflow: hidden;
}

.why-us-layer img {
  transition: transform 0.5s ease;
  border-radius: 0;
}

.why-us-layer:hover img {
  transform: scale(1.05);
}

.why-us-left h2 {
  color: #19908b;
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
}

.why-us-left h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #19908b 0%, transparent 100%);
  border-radius: 2px;
}

.why-us-left p {
  line-height: 1.8;
  color: #555;
}

/* EUDR Certification Section */
.eudr-section {
  padding: 20px 0;
}

.eudr-badge {
  display: inline-block;
  background: linear-gradient(135deg, #f5a623 0%, #e8941a 100%);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
  text-transform: uppercase;
  box-shadow: 0 3px 12px rgba(245, 166, 35, 0.35);
}

.eudr-text h2 {
  color: #dae1e6;
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 55px;
  line-height: 60px;
  margin-bottom: 0;
}

.eudr-text h3 {
  font-size: 26px;
  line-height: 34px;
  margin-top: -28px;
  position: relative;
  z-index: 1;
  color: #19908b;
  font-weight: 700;
  margin-bottom: 18px;
}

.eudr-text p {
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 24px;
}

.eudr-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
}

.eudr-highlight-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(25, 144, 139, 0.08) 0%, rgba(25, 144, 139, 0.03) 100%);
  border: 1px solid rgba(25, 144, 139, 0.2);
  border-radius: 25px;
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 600;
  color: #19908b;
  transition: all 0.3s ease;
}

.eudr-highlight-item:hover {
  background: linear-gradient(135deg, rgba(25, 144, 139, 0.15) 0%, rgba(25, 144, 139, 0.08) 100%);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(25, 144, 139, 0.2);
}

.eudr-highlight-item i {
  font-size: 16px;
}

.cert-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.cert-glow {
  position: absolute;
  inset: -15px;
  background: radial-gradient(ellipse at center, rgba(25, 144, 139, 0.15) 0%, transparent 70%);
  border-radius: 25px;
  pointer-events: none;
  z-index: 0;
}

.eudr-cert-img {
  position: relative;
  z-index: 1;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(25, 144, 139, 0.15);
  transition: all 0.4s ease;
}

.eudr-cert-img:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(25, 144, 139, 0.3);
}

.cert-stamp {
  position: absolute;
  bottom: -12px;
  right: 20px;
  z-index: 2;
  background: linear-gradient(135deg, #19908b 0%, #0d6b67 100%);
  color: #fff;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 6px 20px rgba(25, 144, 139, 0.4);
  letter-spacing: 0.3px;
}

.cert-stamp i {
  font-size: 15px;
}

@media screen and (max-width: 768px) {
  .eudr-text h2 {
    font-size: 36px;
    line-height: 44px;
  }

  .eudr-text h3 {
    font-size: 20px;
    margin-top: -20px;
  }

  .eudr-highlights {
    gap: 8px;
  }

  .eudr-highlight-item {
    font-size: 12px;
    padding: 6px 14px;
  }

  .cert-stamp {
    font-size: 11px;
    padding: 7px 14px;
    right: 10px;
  }
}
/* End of EUDR Certification Section */


/* Responsive Improvements */
@media screen and (max-width: 768px) {
  .home-about h2 {
    font-size: 40px;
    line-height: 50px;
  }

  .home-about h3 {
    font-size: 24px;
    line-height: 32px;
  }

  .feature-card {
    min-width: 100%;
  }

  .stock-title {
    font-size: 13px;
  }

  .btn-default {
    padding: 10px 25px;
    font-size: 0.85rem;
  }
}
</style>
