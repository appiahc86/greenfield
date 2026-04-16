<script setup>
import {onMounted} from "vue";
import sal from "sal.js";
import PartnersCard from "@/component/PartnersCard.vue";


onMounted(() => {
  sal({
    once: false,
  });

})

</script>

<template>
  <div class="mt-5">
    <div class="py-5 top text-center">
      <h4 class="fw-bold">Partners</h4>


      <div class="container-fluid">
        <div class="row mb-3">

          <!--  -->
          <div class="col-md-6 col-xxl-3 mb-3">
            <div class="card shadow hh-100 py-2 border-primary border-4 border-bottom-0 border-top-0 border-end-0">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs fw-bold text-primary mb-1" style="font-size: 1.1em;">INTERNATIONAL ORGANIZATIONS</div>
                    <div class="h6 mb-0 fw-bold">
                      <ul class="custom-list">
                        <li>Kampani (Belgium)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!--  -->
          <div class="col-md-6 col-xxl-3 mb-3">
            <div class="card shadow hh-100 py-2 border-success border-4 border-bottom-0 border-top-0 border-end-0">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs fw-bold text-success mb-1" style="font-size: 1.1em;">OFF-TAKERS</div>
                    <div class="h6 mb-0 fw-bold">
                      <ul class="custom-list">
                        <li>PBC Limited (Licensed Cocoa Buying Company)</li>
                        <li>Agro Partners Ltd</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!--   -->
          <div class="col-md-6 col-xxl-3 mb-3">
            <div class="card shadow hh-100 py-2 border-warning border-4 border-bottom-0 border-top-0 border-end-0">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs fw-bold mb-1" style="font-size: 1.1em; color: darkgoldenrod">
                      FINANCIAL INSTITUTIONS
                    </div>
                    <div class="h6 mb-0 fw-bold">
                      <ul class="custom-list">
                        <li>Fidelity Bank Ltd</li>
                        <li>Sinapi Aba Savings and Loans</li>
                        <li>Pan-African Savings & Loans</li>
                        <li>Ahantaman Rural Bank PLC</li>
                        <li>Amenfiman Rural Bank PLC</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="col-md-6 col-xxl-3 mb-3">
            <div class="card shadow hh-100 py-2 border-danger border-4 border-bottom-0 border-top-0 border-end-0">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs fw-bold text-danger mb-1" style="font-size: 1.1em;">SUPPLIERS</div>
                    <div class="h6 mb-0 fw-bold">
                      <ul class="custom-list">
                        <li>RMG Ghana Limited</li>
                        <li>Valora Exim Ltd</li>
                        <li>Yayra Glover Organic Inputs Ltd</li>
                        <li>K-Gyasi Agro Services</li>
                        <li>Rainbow Agro Ghana</li>
                        <li>Framag Agro / Adam West Africa</li>
                        <li>Kumak Co. Ltd</li>
                        <li>B-Kaakyire Agrochemical Ltd</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>

      </div>

    </div>



  </div>

  <div class="my-5"></div>

  <PartnersCard />

</template>

<style scoped>

.custom-list {
  list-style-type: none;
  padding: 0;
}

.custom-list li {
  padding: 10px 20px;
  background-color: #f0f0f0;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.custom-list li:hover {
  background-color: #e0e0e0;
}

</style>