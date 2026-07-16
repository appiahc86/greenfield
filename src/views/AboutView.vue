<script setup>
import PageBanner from "@/component/PageBanner.vue";
import TeamCard from "@/component/TeamCard.vue";
import { useMyStore } from "@/store/home";
import {onBeforeRouteLeave} from "vue-router";

const store = useMyStore();

onBeforeRouteLeave((to, from, next) => {
  store.aboutLazy = false;
  next();
});
</script>

<template>
  <PageBanner title="About Us" subTitle="about" img="/img/banner.jpeg" />
  <!-- OUR MISSION -->
  <div class="container my">
    <div class="row justify-content-center home-about my text-center">
      <div class="col-lg-9">
        <h2 class="fw-bold">About Us</h2>
        <p>
          <b>Greenfield Agricultural Services Ltd</b> is a social impact and value
          addition Agribusiness Company that supports small holder farmers by
          implementing sustainable agricultural value chain programs aimed at
          increasing crop yield, increasing farmers' income, improving their
          livelihood and reducing poverty. The Head Office is located in Kumasi, the
          capital city of the Ashanti Region.
        </p>
        <p>
          Greenfield was first registered as Greenfield Agrochemicals in 2014
          as a sole proprietorship to undertake sale of Agro Inputs, provide training
          and extension services to small holder farmers. It was founded by Dr. Samuel
          Amissah, an Agribusiness Expert with over 19 years working experience in
          Agricultural Financing, Microfinance, Agro Inputs Credit Management, Project
          Development and Management, VSLAs Development, Cocoa Sustainability, Farm
          Management, Farmer Training, Agribusiness Management and Consulting.
          Dr. Amissah is the Chief Executive Officer (CEO) and owner of the business.
          In order to expand its activities and restructure, the company was
          registered again as Greenfield Agricultural Services Limited in 2020.
          bGreenfield currently has 6 outlets in the cocoa growing areas providing
          small holder cocoa farmers with sustainable access to quality Agro inputs
          and training to improve their livelihood. Greenfield started with only 1
          outlet at Sofoline in Kumasi and has expanded to 6 outlets currently.
          These are Sofoline and Kunsu Wiawso in the Ashanti Region, Goaso in the
          Ahafo Region, Twifo Praso, Agona Abrem in the Central Region and
          Daboase Junction in the Western Region.
        </p>
        <p>
          Greenfield implements Agro inputs credit scheme for smallholder cocoa
          farmers and has supported over 25,000 smallholder cocoa farmers so far
          in the cocoa growing areas with quality agro inputs, training & extension
          and microcredit. The company has registered over
          <span class="fw-bold">{{ store.registeredFarmers.toLocaleString() }}</span>
          small holder cocoa farmers to provide them with sustainable access
          to training and
          quality agro inputs.
        </p>
      </div>


    </div>
    <div class="row">
      <div class="col-lg-6 d-flex justify-content-center align-items-center">
        <div class="text">
          <h3>OUR MISSION</h3>
          <p>
            Our mission is to impact the society and improve the well-being of
            small holder farmers through implementation of sustainable
            agricultural value chain programs that seek to increase crop yield,
            increase small holder farmers’ income and improve their livelihood
            to help alleviate poverty.
          </p>
          <p>
            Our goal is to positively impact the society, create value in the
            lives of small holder farmers and improve their well-being to help
            reduce poverty.
          </p>

          <div class="hb-box d-flex flex-row">

          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <div class="hb-inner">
                  <figure class="hb-icon">
                    <img src="/img/shield-orange.png" alt="" />
                  </figure>
                  <h5>We are Passionate</h5>
                  <p>Improving livelihood to help alleviate poverty.</p>
                </div>
              </div>
              <div class="col">
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

          </div>


        </div>
      </div>
      <div class="col-lg-6 spacing-md">
        <figure class="home-about-img">
          <img
              v-if="store.aboutLazy"
               v-lazy="{ src: '/img/farmertraining.jpeg', loading: '/img/dummy749x801.svg', error: '', delay: 500 }"
               alt="training"
               class="img-fluid"
          />
          <img
              v-else
              src="/img/farmertraining.jpeg"
              alt="training"
              class="img-fluid"
          />
        </figure>
      </div>
    </div>
  </div>
  <!-- OUR VISION -->
  <div class="container my">
    <div class="row">
      <div class="col-lg-6 spacing-md">
        <figure class="home-about-img">
          <img
              v-if="store.aboutLazy"
               v-lazy="{ src: '/img/ass.jpeg', loading: '/img/dummy749x801.svg', error: '', delay: 500 }"
               alt="training"
               class="img-fluid"
          />
          <img
              v-else
              src="/img/ass.jpeg"
              alt="training"
              class="img-fluid"
          />
<!--          <div class="image-badget">-->
<!--            <figure class="ib-icon">-->
<!--              <img src="/img/medal.png" alt="" width="100%" />-->
<!--            </figure>-->
<!--            <h4 class="mt-0">Our Values</h4>-->
<!--            <p>-->
<!--              Continuously realize profitability and growth objectives through-->
<!--              the manufacture and distribution of fertilizer.-->
<!--            </p>-->
<!--          </div>-->
        </figure>
      </div>
      <div class="col-lg-6 d-flex justify-content-center align-items-center">
        <div class="home-about">
          <h3 class="mt-3 mt-sm-0">OUR VISION</h3>
          <p>
            Our vision is to become the preferred social impact and value
            addition Agribusiness partner in Ghana and West Africa with
            tailor-made and farmer friendly agribusiness models that work
            effectively for small holder farmers and seek to increase crop
            yield, increase small holder farmers' income, improve their
            livelihood and help alleviate poverty.
          </p>
          <p>
            Our Integrated Soil Fertility Management (ISFM) Policy focuses on
            effective combination of mineral fertilizers, organic inputs and
            improved germplasm combined with knowledge on how to adapt these
            practices to local conditions in order to improve soil conditions,
            optimize agronomic efficiency of the applied nutrients and increase
            crop productivity incomes of smallholder farmers.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="my">
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
</template>

<style scoped></style>
