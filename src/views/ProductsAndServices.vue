<script setup>
import {onMounted} from "vue";
import sal from "sal.js";


onMounted(() => {
  sal({
    once: false,
  });

})

</script>

<template>
  <div class="mt-5">
    <div class="py-5 top text-center text-white">
      <h4 class="fw-bold products-services">OUR PRODUCTS & SERVICES</h4>
    </div>
  </div>


  <section class="mt-5">
    <div class="wrapper">
      <h2 class="header1">CROPS</h2>
      <h4 class="list-header ps-3">COCOA</h4>
      <ol>
        <li>Cocoa Inputs Credit Scheme</li>
        <li>Access to Credit (financial inclusion)</li>
        <li>Sale and Distribution of agrochemicals and equipment</li>
        <li>Training of farmers, Advisory and Extension Services</li>
        <li>Certification Services</li>
        <li>Seedling Production and Nursery Management</li>
        <li>Business Plan Development for Cocoa farmer Groups and Cooperatives</li>
        <li>Development and Management of VSLAs</li>
        <li>Farm Management Services and Consultancy</li>
      </ol>

      <h2 class="header1 mt-3">HORTICULTURAL CROPS</h2>
      <h4 class="list-header ps-3">Vegetables (Chili Pepper, Tomato, Cabbage Lettuce etc)</h4>
      <ol>
        <li>Seedling Production and Nursery Management</li>
        <li>Supply of quality seeds</li>
        <li>Access to Credit and Market Linkage</li>
        <li>Farm Management and Mechanization Services </li>
        <li>Sale and Distribution of agrochemicals and equipment</li>
        <li>Training of farmers, Advisory and Extension Services</li>
        <li>Certification Services</li>
        <li>Business Plan Development for Farmer Groups, FBOs and Cooperatives</li>
        <li>Formation and Management of VSLAs</li>
      </ol>

      <h4 class="list-header ps-3">Fruits ( Mango, Pineapple, Papaya, Passion Fruits)</h4>
      <ol>
        <li>Agro Inputs Credit Scheme</li>
        <li>Access to Credit (financial inclusion)</li>
        <li>Sale and Distribution of agrochemicals and equipment</li>
        <li>Training of farmers, Advisory and Extension Services</li>
        <li>Farm Management and Mechanization Services</li>
        <li>Certification Services</li>
        <li>Business Plan Development for Farmer Groups, FBOs and Cooperatives</li>
        <li>Formation and Management of VSLAs</li>
      </ol>

      <h2 class="header1 mt-3">FOOD CROPS (Maize, Rice, Plantain,Cassava,Yam etc)</h2>
      <ol>
        <li>Agro Inputs Credit Scheme</li>
        <li>Access to Credit ( financial inclusion)</li>
        <li>Market Linkage</li>
        <li>Sale and Distribution of agrochemicals and equipment</li>
        <li>Training of farmers, Advisory and Extension Services</li>
        <li>Certification Services</li>
        <li>Farm Management and Mechanization Services</li>
        <li>Business Plan Development for Farmer Groups, FBOs and Cooperatives</li>
        <li>Formation and Management of VSLAs</li>
      </ol>

      <h2 class="header1 mt-3">ANIMALS</h2>
      <h4 class="list-header ps-3">Livestock & Poultry</h4>
      <ol>
        <li>Pen construction</li>
        <li>Access to Credit ( financial inclusion)</li>
        <li>Market Linkage</li>
        <li>Farmer training, Advisory and Extension Services</li>
        <li>Business Plan  Development and Project Proposal</li>
        <li>Supply of Day Old Chicks</li>
        <li>Supply of Feed for both poultry birds and pigs</li>
      </ol>
      <h4 class="list-header ps-3">Fish Farming</h4>
      <ol>
        <li>Construction Ponds ( concrete, tarpaulin, plastic etc)</li>
        <li>Access to Credit ( financial inclusion)</li>
        <li>Supply of fingerlings</li>
        <li>Supply of Feed (starter and mature)</li>
        <li>Farmer training, Advisory and Extension Services</li>
        <li>Development of Business Plan / Project Proposals</li>
      </ol>
      <h4 class="list-header ps-3">Snail and Grasscutter Farming</h4>
      <ol>
        <li>Construction of Pen</li>
        <li>Access to Credit ( financial inclusion)</li>
        <li>Farmer training, Advisory and Extension Services</li>
        <li>Business Plan Development / Project Proposals</li>
        <li>Market linkage</li>
      </ol>

      <h2 class="header1 mt-3">SUPPORT SERVICES</h2>
      <ol>
        <li>Construction of boreholes and other amenities to improve living conditions of smallholder farmers.</li>
      </ol>
    </div>
  </section>



  <div class="container-fluid mt-4">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h6>
          We have inputs sales outlets/shops in designated locations to enable farmers have
          easy access to approved quality agro inputs and competitive price. Agro Inputs are
          also sent to the outlets for onward distribution to farmer groups who patronize our
          agro inputs credit scheme project.
        </h6>
      </div>

    </div>

    <div class="row mt-4 g-0">
      <div class="col-6">
        <img src="/img/shop1.jpg" alt="shop" class="img-fluid h-auto">
      </div>
      <div class="col-6">
        <img src="/img/shop2.jpg" alt="shop" class="img-fluid h-auto">
      </div>
    </div>

    <div class="row mt-5 justify-content-center">
      <div class="col-lg-8">
        <div class="section-title">
          <h2>Inputs Outlets</h2>
          <h3 class="mb-4 fw-bold">
            Our Inputs Outlets/shops are located in the following areas <br><br>
<!--            <span style="font-size: 1.5em">&#11015;</span>-->
            <span style="font-size: 1.5em">&#128071;</span>
          </h3>
        </div>
        <div class="table-responsive">
          <table class="table table-striped table-hover table-bordered">
            <thead>
            <tr class="bg-dark text-white">
              <th>No.</th>
              <th>Outlet</th>
              <th>Location</th>
              <th>District</th>
              <th>Region</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Sofoline</td>
              <td>Sofoline Lorry Terminal, Kumasi</td>
              <td>Kwadaso Municipal</td>
              <td>Ashanti Region</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kunsu Wioso</td>
              <td>Kunsu Wioso</td>
              <td>Ahafo Ano South-West</td>
              <td>Ashanti Region</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Goaso</td>
              <td>Goaso, New Market</td>
              <td>Asunafo North Municipal</td>
              <td>Ahafo Region</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Twifo Praso</td>
              <td>Twifo Praso, Near EcoBank building</td>
              <td>Twifo/Atii/Morkwaa</td>
              <td>Central Region</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Abrem Agona</td>
              <td>Abrem Agona , Near the Chief’s palace</td>
              <td>KEEA</td>
              <td>Central Region</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Daboase Junction</td>
              <td>Daboase Junction, on the Cape Coast-Takoradi main Road</td>
              <td>Shama District</td>
              <td>Western Region</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>


  <div class="container-fluid my-4">
    <div class="row">
      <div class="col">
        <iframe src="https://www.google.com/maps/d/embed?mid=1HoBs3rqh3EG8eprna0bV6RXC6oCBzxk&ehbc=2E312F" width="100%" height="480"></iframe>
      </div>
    </div>
  </div>


</template>

<style scoped>

.top {
  background-image: url("../../public/img/pbg.jpg");
  background-color: grey;
  height: 20em;
  display: flex;
  align-items: center;
  justify-content: center;
}


* {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  margin: 0;
}

section {
  background: url("../../public/img/section-bg.jpg");

  padding: 40px 0;
}
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.header1 {
  text-align: center;
  background: linear-gradient(90deg, #ffffff, #ddedc4, #ffffff);
}
.header1, .list-header {
  font-weight: bold;
}

ol li {
  list-style: square;
  font-size: 1.2em;
}

.products-services {
  position: relative;
  font-family: sans-serif;
  font-size: 4vw;
  text-transform: uppercase;
  letter-spacing: 4px;
  background: linear-gradient(90deg, #ffffff, greenyellow, #ffffff);
  background-repeat: no-repeat;
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

</style>