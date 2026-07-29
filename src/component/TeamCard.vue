<script setup>
import {ref} from "vue";
import {onBeforeRouteLeave, useRouter} from "vue-router";
import { useMyStore } from "@/store/home";


const store = useMyStore();
const openModalBtn = ref();
const closeModalBtn = ref();
const profileContainer = ref();
const router = useRouter();

const openModal = (name) => {
  const content = document.querySelector(`#${name}`);
  if (content){
    profileContainer.value.innerHTML = content.innerHTML;
    openModalBtn.value.click();
  }

}

onBeforeRouteLeave((to, from, next) => {
 closeModalBtn.value.click();
  next();
})

</script>

<template>
  <div class="container">
    <div class="row text-center">
      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
            v-if="store.homeLazy"
            v-lazy="{ src: '/img/team/samuel1.jpeg', loading: '/img/dummy266x266.svg', error: '', delay: 500 }"
            alt="CEO"
            width="180"
            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <img
             v-else
              src="/img/team/samuel1.jpeg"
              alt="CEO"
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Dr. Samuel Amissah</h5>
          <span class="small text-uppercase text-muted">Founder & CEO</span><br>
          <a class="btn btn-sm btn-default mt-2" style="cursor: pointer;" @click="router.push({name: 'management'})">View Profile</a>
        </div>
      </div>
      <!-- End -->

      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
            v-if="store.homeLazy"
            v-lazy="{ src: '/img/team/sebe.jpg', loading: '/img/dummy266x266.svg', error: '', delay: 500 }"
            alt="Sebe"
            width="180"
            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <img
              v-else
              src="/img/team/sebe.jpg"
              alt="Sebe"
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Mr. Kofi Sebe</h5>
          <span class="small text-uppercase text-muted">General Manager</span><br>
          <a class="btn btn-sm btn-default mt-2" style="cursor: pointer;" @click="openModal('sebe')">View Profile</a>
        </div>
      </div>
      <!-- End -->


      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
            v-if="store.homeLazy"
            v-lazy="{ src: '/img/team/ben1.jpeg', loading: '/img/dummy266x266.svg', error: '', delay: 500 }"
            alt="Benjamin"
            width="180"
            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <img
              v-else
              src="/img/team/ben1.jpeg"
              alt="Benjamin"
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Mr. Benjamin Dadzie</h5>
          <span class="small text-uppercase text-muted">Operations Manager</span><br>
          <a class="btn btn-sm btn-default mt-2" style="cursor: pointer;" @click="openModal('benjamin')">View Profile</a>

        </div>
      </div>
      <!-- End -->


      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
              v-if="store.homeLazy"
              v-lazy="{ src: '/img/team/william.jpeg', loading: '/img/dummy266x266.svg', error: '', delay: 500 }"
              alt="William"
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <img
              v-else
              src="/img/team/william.jpeg"
              alt="William"
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Dr. William Tawiah Baidoo</h5>
          <span class="small text-uppercase text-muted">Director of Finance</span><br>
          <a class="btn btn-sm btn-default mt-2" style="cursor: pointer;" @click="openModal('william')">View Profile</a>
        </div>
      </div>
      <!-- End -->


      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
              v-if="store.homeLazy"
              v-lazy="{ src: '/img/team/asante.jpg', loading: '/img/dummy266x266.svg', error: '', delay: 500 }"
              alt="Asante"
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <img
              v-else
              src="/img/team/asante.jpg"
              alt="Asante"
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Mr. Collins Asante</h5>
          <span class="small text-uppercase text-muted">Project Coordinator</span><br>
          <a class="btn btn-sm btn-default mt-2" style="cursor: pointer;" @click="openModal('asante')">View Profile</a>

        </div>
      </div>
      <!-- End -->

      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
              v-if="store.homeLazy"
              v-lazy="{ src: '/img/team/ellen.jpg', loading: '/img/dummy266x266.svg', error: '', delay: 500 }"
              alt="Ellen"
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <img
              v-else
              src="/img/team/ellen.jpg"
              alt="Ellen"
              width="180"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Ms Ellen Addai</h5>
          <span class="small text-uppercase text-muted">Administrative Officer</span><br>
          <a class="btn btn-sm btn-default mt-2" style="cursor: pointer;" @click="openModal('ellen')">View Profile</a>
        </div>
      </div>
      <!-- End -->

    </div>

<!--  Second Row  -->
<!--    <div class="row text-center justify-content-center">-->
<!--      &lt;!&ndash; Team item &ndash;&gt;-->
<!--      <div class="col-xl-4 mb-5">-->
<!--        <div class="bg-white rounded shadow-sm py-3 px-3">-->
<!--          <img-->
<!--              v-if="store.homeLazy"-->
<!--              v-lazy="{ src: '/img/team/constance.jpeg', loading: '/img/dummy266x266.svg', error: '', delay: 500 }"-->
<!--              alt="constance"-->
<!--              width="180"-->
<!--              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"-->
<!--          />-->
<!--          <img-->
<!--              v-else-->
<!--              src="/img/team/constance.jpeg"-->
<!--              alt="constance"-->
<!--              width="180"-->
<!--              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"-->
<!--          />-->
<!--          <h5 class="mb-0">Mrs Constance Opoku</h5>-->
<!--          <span class="small text-uppercase text-muted">Project Officer – Sales & Marketing</span><br>-->
<!--          <a class="btn btn-sm btn-default mt-2" style="cursor: pointer;" @click="openModal('constance')">View Profile</a>-->

<!--        </div>-->
<!--      </div>-->
<!--      &lt;!&ndash; End &ndash;&gt;-->
<!--    </div>-->

  </div>


<!-- Modal -->
  <!-- Button trigger modal -->
  <button type="button" ref="openModalBtn" class="d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">

  </button>

  <!-- Modal -->
  <div class="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" ref="closeModalBtn" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid" ref="profileContainer">



          </div>
        </div>
      </div>
    </div>
  </div>



                      <!-- ....................... Profile..................... -->
<!--  Sebe -->
  <template id="sebe">
    <div class="row">
      <div class="col-md-4">
        <img src="/img/team/sebe.jpg" alt="Sebe" class="img-fluid">
        <p class="text-center mt-2">
          <b>Mr. Kofi Sebe</b><br>
          <small class="text-muted text-uppercase">General Manager</small>
        </p>

      </div>
      <div class="col-md-8">
        <p>
          <b>Mr. Kofi Sebe</b> is the General Manager of Greenfield Agricultural Services Limited.
          He is in charge of the entire business activities of the company and acts in the
          absence of the CEO. He supervises all field activities including farmer training on GAP,
          farmer group formation and registration, distribution of Inputs to farmer groups,
          and repayment collection. Mr. Sebe holds BSc Forest Technology from Kwame Nkrumah
          University of Science and Technology.
        </p>
        <p>
          He has about 10 years working experience in the cocoa certification, cocoa operation,
          agro inputs business and forestry management. He worked for Best Link Global a Licensed
          Cocoa Buying as Area Manager where he managed about 10 Cocoa Districts.
          He worked with ECOM Ghana as a Commercial Officer where he trained
          small holder cocoa farmers under the company’s cocoa certification program.
          He also worked for Forestry Services Division as Assistant District Manager.
          He also worked for Golden Star Resource as Environmental Officer.
        </p>
      </div>
    </div>
  </template>



<!--  Ellen -->
  <template id="ellen">
    <div class="row">
      <div class="col-md-4">
        <img src="/img/team/ellen.jpg" alt="Ellen" class="img-fluid">
        <p class="text-center mt-2">
          <b>Ms Ellen Addai</b><br>
          <small class="text-muted text-uppercase">Administrative Officer</small>
        </p>

      </div>
      <div class="col-md-8">
        <p>
          <b>Ms Ellen Addai</b>
          is the Administrative Officer for Greenfield Agricultural Services Limited.
          She handles all admin issues and office management. She holds
          BSc Natural Resource Management (Social Forestry option) and a
          Diploma in Natural Resource Management from University of Energy
          and Natural Resources, Ghana.
        </p>
        <p>
          She is also pursuing Master’s degree
          program in Organizational Development at KNUST.
          Prior to joining Greenfield, Ellen worked for the Forest
          Division and Amandi Investment Construction Company Limited as a Secretary.
        </p>
      </div>
    </div>
  </template>



  <!--  Benjamin -->
  <template id="benjamin">
    <div  class="row">
      <div class="col-md-4">
        <img src="/img/team/ben1.jpeg" alt="Benjamin" class="img-fluid">
        <p class="text-center mt-2">
          <b>Mr. Benjamin Dadzie</b><br>
          <small class="text-muted text-uppercase">OPERATIONS MANAGER</small>
        </p>

      </div>
      <div class="col-md-8">
        <p>
          <b>Mr. Ben Dadzie</b>
          is the Operations Manager for Greenfield Agricultural Services Limited.
          He holds MSc Project Management from KNUST and BSc Development Studies
          from UDS. He has great experience in Cocoa Inputs Credit Scheme, Cocoa
          Operations and Farmer Training.
        </p>
        <p>
          He is also an expert in repair and
          maintenance of spraying machines, and training of farmers. Before Joining
          Greenfield, he Worked for Wienco Ghana Cocoa Abrabopa, BestLink Ghana
          Ltd and Sunshine Commodities (cocoa buying companies).
        </p>
      </div>
    </div>
  </template>


  <!--  William -->
  <template id="william">
    <div class="row">
      <div class="col-md-4">
        <img src="/img/team/william.jpeg" alt="William" class="img-fluid">
        <p class="text-center mt-2">
          <b>Dr. William Tawiah Baidoo</b><br>
          <small class="text-muted text-uppercase">Director of Finance</small>
        </p>

      </div>
      <div class="col-md-8">
        <div class="" style="max-height: 400px; overflow: auto;">
        <p>
          <b>Dr. William Tawiah Baidoo</b> is a dynamic and self-motivated professional based
          in Kumasi, Ashanti. With a robust background in teaching, research,
          and administration, he possesses excellent communication skills
          that foster a constructive and effective administrative environment.
        </p>
        <p>
          Since January 2020, Dr. Baidoo has served as the Director of Finance
          at Greenfield Agricultural Services Limited, where he provides consultancy
          in management and finance, focusing on business development, management
          restructuring, and financial engineering. He also holds a consultancy
          position at Emperor Limited, contributing his expertise in similar areas.
          Additionally, as a consultant and director at WT Management & Financial
          Consult since 2017, he has further solidified his reputation as a
          knowledgeable advisor in the financial sector.
        </p>
        <p>
          Before his current roles, Dr. Baidoo was a freelance consultant with RN
          Advisory, where he conducted financial audits and provided management
          financial reports and tax consultancy services. His career began in
          the education sector, where he served as a Finance Officer at Christ
          the Teacher College of Education from July 2014 to January 2017.
          In this role, he was instrumental in overseeing the college's financial
          affairs, advising the principal, and managing the acquisition of capital assets.
        </p>
        <p>
          Dr. Baidoo's journey in education also includes teaching positions at
          Armed Forces Senior High Technical School and Abesim R/C Junior High School,
          where he inspired students in business management and information technology.
          His dedication to public service is evidenced by his national service at
          the Denyase Traditional Council, where he gained valuable administrative
          experience.
        </p>
        <p>
          Academically, Dr. Baidoo is a PhD candidate in Business Administration
          at AIT (OUM) and holds a Doctorate in Management Studies
          (Financial Management) from ISBM. His educational credentials include
          a Master of Financial Management and an MBA in Accounting and Finance
          from Amity University, India, alongside a Bachelor of Education in
          Accounting from the University of Education, Winneba.
        </p>
        <p>
          In addition to his formal education, Dr. Baidoo has pursued professional
          development through certifications in Advanced Excel and life skills
          from Amity University. He is also a member of the Chartered Institute
          of Financial and Investment Analysts in Ghana.
        </p>
        <p>
          Dr. Baidoo has contributed to academic discourse through various
          publications presented at international conferences, exploring
          topics such as the influence of earnings per share on investment
          decisions and the performance of banks in Ghana.
        </p>
        <p>
          He is well-respected in his field, with references available
          from notable professionals, including Richard Nixon Oppong Pepprah,
          Director at RN Advisory, and Mr. Samuel Amissah, Director at Greenfield
          Agricultural Services Limited.
        </p>
        <p>
          Dr. William Tawiah Baidoo continues to impact the fields of finance
          and education, driven by a commitment to excellence and a passion
          for helping others succeed.
        </p>
        </div>
      </div>
    </div>
  </template>


  <!--  Asante -->
  <template id="asante">
    <div  class="row">
      <div class="col-md-4">
        <img src="/img/team/asante.jpg" alt="Asante" class="img-fluid">
        <p class="text-center mt-2">
          <b>Mr. Collins Asante</b><br>
          <small class="text-muted text-uppercase">PROJECT COORDINATOR</small>
        </p>

      </div>
      <div class="col-md-8">
        <p>
          <b>Mr. Collins Asante</b> is Project Coordinator for Greenfield Agricultural
          Services Limited in charge of Farmer Training and Registration.
        </p>
        <p>
          He holds Diploma Business Studies (Accounting) from Kumasi Technical University with
          9 years experience in training of cocoa farmers and farm mapping. He worked for ECOM Ghana
          and Nyonkopa Cocoa as Field Officer and Mapper.
        </p>
      </div>
    </div>
  </template>


</template>
