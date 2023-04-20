<script setup>
import {ref} from "vue";
import {onBeforeRouteLeave, useRouter} from "vue-router";

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
            src="/img/team/samuel.jpg"
            alt="samuel"
            width="150"
            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Mr. Samuel Amissah</h5>
          <span class="small text-uppercase text-muted">Founder & CEO</span><br>
          <a class="btn btn-sm btn-secondary mt-2" style="cursor: pointer;" @click="router.push({name: 'management'})">View Profile</a>
        </div>
      </div>
      <!-- End -->

      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
            src="/img/team/sebe.jpg"
            alt="Sebe"
            width="150"
            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Mr. Kofi Sebe</h5>
          <span class="small text-uppercase text-muted">General Manager</span><br>
          <a class="btn btn-sm btn-secondary mt-2" style="cursor: pointer;" @click="openModal('sebe')">View Profile</a>
        </div>
      </div>
      <!-- End -->

      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
            src="/img/team/ellen.jpg"
            alt="Ellen"
            width="150"
            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Ms Ellen Addai</h5>
          <span class="small text-uppercase text-muted">Project Administration Officer</span><br>
          <a class="btn btn-sm btn-secondary mt-2" style="cursor: pointer;" @click="openModal('ellen')">View Profile</a>
        </div>
      </div>
      <!-- End -->

      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
            src="/img/team/benjamin.jpg"
            alt="Benjamin"
            width="150"
            class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Mr. Benjamin Dadzie</h5>
          <span class="small text-uppercase text-muted">Operations Manager</span><br>
          <a class="btn btn-sm btn-secondary mt-2" style="cursor: pointer;" @click="openModal('benjamin')">View Profile</a>

        </div>
      </div>
      <!-- End -->
      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
              src="/img/team/asante.jpg"
              alt="Asante"
              width="150"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Mr. Collins Asante</h5>
          <span class="small text-uppercase text-muted">Project Coordinator</span><br>
          <a class="btn btn-sm btn-secondary mt-2" style="cursor: pointer;" @click="openModal('asante')">View Profile</a>

        </div>
      </div>
      <!-- End -->
      <!-- Team item -->
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-3 px-3">
          <img
              src="/img/team/constance.jpeg"
              alt="Sebe"
              width="150"
              class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 class="mb-0">Ms Constance Opoku</h5>
          <span class="small text-uppercase text-muted">Project Officer – Sales & Marketing</span><br>
          <a class="btn btn-sm btn-secondary mt-2" style="cursor: pointer;" @click="openModal('constance')">View Profile</a>

        </div>
      </div>
      <!-- End -->
    </div>
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
          <small class="text-muted">General Manager</small>
        </p>

      </div>
      <div class="col-md-8">
        <p>
          Mr. Kofi Sebe is the General Manager of Greenfield Agricultural Services Limited.
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
          <small class="text-muted">Project Administration Officer</small>
        </p>

      </div>
      <div class="col-md-8">
        <p>
          Ms Ellen Addai is the Project Administration Officer of Greenfield Agricultural
          Services Limited. She handles all project admin issues and as well office management.
        </p>
        <p>
          She holds BSc Natural Resource Management (Social Forestry option) and a Diploma in Natural Resource
          Management from University of Energy and Natural Resources, Ghana. She has about 4
          years working experience. She worked with the Forest Division
          and Amandi Investment Construction Company Limited a Secretary.
        </p>
      </div>
    </div>
  </template>



  <!--  Benjamin -->
  <template id="benjamin">
    <div  class="row">
      <div class="col-md-4">
        <img src="/img/team/benjamin.jpg" alt="Benjamin" class="img-fluid">
        <p class="text-center mt-2">
          <b>Mr. Benjamin Dadzie</b><br>
          <small class="text-muted">OPERATIONS MANAGER</small>
        </p>

      </div>
      <div class="col-md-8">
        <p>
          Mr. Ben Dadzie is the Operations Manager for the Greenfield Agricultural Services Limited.
          Mr Dadzie worked for Cocoa Abrabopa for about 4 years where he supervised cocoa farms
          and provided farm management services.
        </p>
        <p>
          He also worked for BestLink Cocoa Company
          for 1 year as cocoa operations officer. He also worked for Sunshine Commodities
          as Operations and Port Officer for 1 year. He holds a BSc Degree in Development Studies from UDS.
        </p>
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
          <small class="text-muted">PROJECT COORDINATOR</small>
        </p>

      </div>
      <div class="col-md-8">
        <p>
          Mr. Collins Asante is Project Coordinator for Greenfield Agricultural
          Services Limited in charge of Farmer Training and Registration.
        </p>
        <p>
          He holds Diploma Business Studies (Accounting) from Kumasi Technical University with
          9 years experience in training of cocoa farmers and farm mapping. He worked for ECOM Ghana
          and Nyonkopa Cocoa as Field Officer and Mapper
        </p>
      </div>
    </div>
  </template>

  <!--  Constance -->
  <template id="constance">
    <div  class="row">
      <div class="col-md-4">
        <img src="/img/team/constance.jpeg" alt="Constance" class="img-fluid">
        <p class="text-center mt-2">
          <b>Ms Constance Opoku</b><br>
          <small class="text-muted">PROJECT OFFICER – SALES & MARKETING</small>
        </p>

      </div>
      <div class="col-md-8">
        <p>
          Ms Constance Opoku is Project Officer in charge of Sales and Marketing for
          Greenfield Agricultural Services Limited. She has
          worked for Nokia Company Ltd as Sales Consultant and Truamen
          Travel & Tour as Sales and Ticketing Officer.
        </p>
        <p>
          She has also worked for UT Life Insurance as Sales Personnel.
          She holds a Diploma in Travel & Tourism from Global Institute of Aviation with
          6 working experience in Sales and Marketing.
        </p>
      </div>
    </div>
  </template>


</template>
<style scoped>

</style>
