<script setup>
import { ref, onMounted } from "vue";
import sal from "sal.js";
import Button from "primevue/button";
import ServiceCard from "@/component/ServiceCard.vue";
import TeamCard from "@/component/TeamCard.vue";
import ContactCard from "@/component/ContactCard.vue";

const count = ref(0);

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

  const intervalId = setInterval(() => {
    if (count.value < 6254) {
      count.value += 2;
    } else {
      clearInterval(intervalId);
    }
  }, 0.1);
});



</script>

<template>
  <div class="mt-5 mt-sm-5 mt-md-4 mt-lg-0">
    <div id="homeCarousel" class="carousel slide ">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="/img/carousel/c1.jpeg"
            class="d-block w-100 carousel-img"
            alt="..."
          />
          <div class="carousel-caption d-block">
            <h3>sustainable cocoa farming</h3>
            <!--            <p>Some representative placeholder content for the first slide.</p>-->
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="/img/carousel/c2.jpg"
            class="d-block w-100 carousel-img"
            alt="..."
          />
          <div class="carousel-caption d-block">
            <h3>Farmer Registration</h3>
            <!--            <p>Some representative placeholder content for the second slide.</p>-->
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="/img/carousel/c3.jpg"
            class="d-block w-100 carousel-img"
            alt="..."
          />
          <div class="carousel-caption d-block">
            <h3>Greenfield Farmer Group</h3>
            <!--            <p>Some representative placeholder content for the second slide.</p>-->
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!--   ./carousel -->
  </div>

  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-lg-6 d-flex justify-content-center align-items-center">
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
                <img src="/img/shield-orange.png" alt="" />
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
      <div class="col-lg-6 spacing-md">
        <figure class="home-about-img">
          <img src="/img/gfofficer.jpg" alt="officer" />
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
          <img src="/img/headoffice.jpeg" alt="headoffice" class="img-fluid">
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
<!--            <p>-->
<!--              Promoting the continuous improvement of human and technological-->
<!--              resources, generating competitive profitability.-->
<!--            </p>-->

            <router-link class="btn btn-sm btn-default" :to="{name: 'contact'}" role="button">GET IN TOUCH</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="section-title">
        <h2>TOTAL FARMERS ONBOARD</h2>
        <h3>OUR FARMERS</h3>
        <h1>{{ count }}</h1>
      </div>
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
  font-size: 60px;
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
