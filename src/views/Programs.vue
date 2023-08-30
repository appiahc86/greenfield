<script setup>
import PartnersCard from "@/component/PartnersCard.vue";
import { useMyStore } from "@/store/home";
import {onBeforeRouteLeave} from "vue-router";

const store = useMyStore();

onBeforeRouteLeave((to, from, next) => {
  store.programsLazy = false;
  next();
});
</script>

<template>
  <div class="wrapper">
  <div class="top mt5">
  <h2 class="text-white text-uppercase"
      style="font-size: 7vw; font-family: cursive; opacity: 0.7">
    Our Programs
  </h2>
  </div>

    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>
    <div class="di"><span class="dot"></span></div>


  </div>


  <div class="container mt-5">
    <div class="row justify-content-center text-center">
      <div class="col-md-8">
        <h4 class="text-success text-center text-uppercase">
          Greenfield-Ahantaman Cocoa Inputs Loan Project
        </h4>
        <div class="mx-auto" style="width: 20%;">
          <hr style="border: 3px solid rgba(0,128,0,0.37);">
        </div>
        <br>
        <p>
          Greenfield Agricultural Services Limited and Ahantaman Rural Bank
          PLC entered into partnership in October 2021 to implement cocoa inputs
          loan project to provide small holder cocoa farmer groups sustainable access
          to training, approved quality agro inputs and micro loans.
        </p>
        <img
            v-if="store.programsLazy"
             v-lazy="{ src: '/img/frm.jpg', loading: '/img/dummy800x498.svg', error: '', delay: 500 }"
             alt="farmer registration" class="img-fluid mb-2">
        <img
            v-else
            src="/img/frm.jpg"
            alt="farmer registration" class="img-fluid mb-2">
        <p>
          Under the project Greenfield register and train small holder cocoa farmers, take their
          input request and supply them the inputs. Ahantamna Rural Bank PLC then open both
          individual and group account for the farmers give them loan to pay for the cocoa inputs,
          after meeting the bank’s requirement.
        </p>

        <p>
          The farmers are trained on topics such as Environmental Protection,
          Good Agricultural Practices, Ecosystem Protection, Usage of Agrochemicals,
          Integrated Crop and Pest Management, Record Keeping and Financial Literacy.
          These training focused more on Environmental, Social and Governance (ESG) issues for development.
        </p>
        <p>
          The objectives of the project are to increase crop yield per unit area,
          increase farmers’ income and improve their livelihood. In 2022, about
          GHc 1.5million cocoa inputs loan was disbursed to about 700 small holder
          cocoa farmers under the project across the Central and Western Regions and repayment
          rate of 95% was recorded at the end of December, 2022.
        </p>
        <p>
          Following the excellent repayment performance recorded in year 2022,
          the bank has signed a new 3- year MoU with Greenfield Agricultural Services
          Limited to support over 10,000 small cocoa farmers with cocoa inputs loan to increase
          their yield, their income and improve their livelihood.
        </p>
      </div>
      <hr class="border border-3 my-5">
      <div class="row justify-content-center text-center">
        <div class="col-md-8">
            <h4 class="text-center text-uppercase">
              Greenfield – SunBright Agribusiness Project
            </h4>
            <div class="mx-auto" style="width: 20%;">
              <hr style="border: 3px solid rgba(0,0,0,0.7);">
            </div>

          <br>
            <p>
              On 26th August,2021, GREENFIELD signed partnership agreement
              with SUNBRIGHT to provide small holder farmers access to quality
              agro inputs in the Wassa East District in the Western Region of Ghana and its environs.
            </p>
            <img
                 v-if="store.programsLazy"
                 v-lazy="{ src: '/img/w.jpeg', loading: '/img/dummy800x498.svg', error: '', delay: 500 }"
                 alt="cocoa drying" class="img-fluid mb-2">
          <img
              v-else
              src="/img/w.jpeg"
              alt="cocoa drying" class="img-fluid mb-2">
            <p>
              The project was expected to increase the yield of farmers in the district,
              increase their income and improve their livelihood. Through the project,
              farmers in the district and beyond will also be given training and
              introduced to modern system of farming including climate smart agriculture, agroforestry etc.
            </p>
          </div>
      </div>

    </div>
  </div>

  <PartnersCard />

</template>


<style scoped>
.top {
  height: 22em;
  background-image: url("../../public/img/pbg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: grey;
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
}

/*Animation*/

.wrapper {
  height: 100%;
  width: 100%;
}

.wrapper .di {
  height: 27px;
  width: 27px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 30px;
  position: absolute;
  top: 10%;
  left: 10%;
  animation: 4s linear infinite;
}
div .dot {
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.5);
  top: 20%;
  right: 20%;
}
.wrapper .di:nth-child(1) {
  top: 20%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper .di:nth-child(2) {
  top: 60%;
  left: 80%;
  animation: animate 10s linear infinite;
}
.wrapper .di:nth-child(3) {
  top: 40%;
  left: 40%;
  animation: animate 3s linear infinite;
}
.wrapper .di:nth-child(4) {
  top: 66%;
  left: 30%;
  animation: animate 7s linear infinite;
}
.wrapper .di:nth-child(5) {
  top: 90%;
  left: 10%;
  animation: animate 9s linear infinite;
}
.wrapper .di:nth-child(6) {
  top: 30%;
  left: 60%;
  animation: animate 5s linear infinite;
}
.wrapper .di:nth-child(7) {
  top: 70%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper .di:nth-child(8) {
  top: 75%;
  left: 60%;
  animation: animate 10s linear infinite;
}
.wrapper .di:nth-child(9) {
  top: 50%;
  left: 50%;
  animation: animate 6s linear infinite;
}
.wrapper .di:nth-child(10) {
  top: 45%;
  left: 20%;
  animation: animate 10s linear infinite;
}
.wrapper .di:nth-child(11) {
  top: 10%;
  left: 90%;
  animation: animate 9s linear infinite;
}
.wrapper .di:nth-child(12) {
  top: 20%;
  left: 70%;
  animation: animate 7s linear infinite;
}
.wrapper .di:nth-child(13) {
  top: 20%;
  left: 20%;
  animation: animate 8s linear infinite;
}
.wrapper .di:nth-child(14) {
  top: 60%;
  left: 5%;
  animation: animate 6s linear infinite;
}
.wrapper .di:nth-child(15) {
  top: 90%;
  left: 80%;
  animation: animate 9s linear infinite;
}
@keyframes animate {
  0% {
    transform: scale(0) translateY(0) rotate(70deg);
  }
  100% {
    transform: scale(1.3) translateY(-100px) rotate(360deg);
  }
}

</style>