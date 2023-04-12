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
      <br><h4 class="fw-bold">OUR PRODUCTS & SERVICES</h4><br>
    </div>
  </div>


  <section class="mt-5">
    <div class="wrapper">
      <ol role="list">
        <li
            data-sal="slide-right"
            data-sal-delay="300"
            style="--sal-duration: 2s; --sal-delay: 1s;"
            data-sal-easing="ease-out-back"
        >Agro Inputs Credit Scheme for Small Holder Farmers(Cocoa, cereals, vegetables etc).</li>
        <li
            data-sal="slide-left"
            data-sal-delay="300"
            style="--sal-duration: 2s; --sal-delay: 1s;"
            data-sal-easing="ease-out-back"
        >Sale and distribution of Agrochemicals and Agro-equipment.</li>
        <li
            data-sal="slide-right"
            data-sal-delay="300"
            style="--sal-duration: 2s; --sal-delay: 1s;"
            data-sal-easing="ease-out-back"
        >Farm Management and Mechanization Services.</li>
        <li
            data-sal="slide-left"
            data-sal-delay="300"
            style="--sal-duration: 2s; --sal-delay: 1s;"
            data-sal-easing="ease-out-back"
        >Farmer Training and Extension Services. </li>
        <li
            data-sal="slide-right"
            data-sal-delay="300"
            style="--sal-duration: 2s; --sal-delay: 1s;"
            data-sal-easing="ease-out-back"
        >Value Chain Linkage and Financial Inclusion.</li>
        <li
            data-sal="slide-left"
            data-sal-delay="300"
            style="--sal-duration: 2s; --sal-delay: 1s;"
            data-sal-easing="ease-out-back"
        >Business Plan Development for Small Holder Farmer Groups, Cooperatives and FBOs.</li>
        <li
            data-sal="slide-right"
            data-sal-delay="300"
            style="--sal-duration: 2s; --sal-delay: 1s;"
            data-sal-easing="ease-out-back"
        >Development and Management of VSLAs</li>
        <li
            data-sal="slide-up"
            data-sal-delay="300"
            style="--sal-duration: 2s; --sal-delay: 1s;"
            data-sal-easing="ease-out-back"
        >Agribusiness Management and Consultancy Services.</li>
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
        <img src="/img/shop1.jpg" alt="shop" class="img-fluid h-100">
      </div>
      <div class="col-6">
        <img src="/img/shop2.jpg" alt="shop" class="img-fluid h-100">
      </div>
    </div>

    <div class="row mt-5 justify-content-center">
      <div class="col-lg-8">
        <div class="section-title">
          <h2>Inputs Outlets</h2>
          <h3 class="mb-4 fw-bold">
            Our Inputs Outlets/shops are located in the following areas <br>
            <span class="pi pi-arrow-circle-down" style="font-size: 1.5em"></span>

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
  background: url("../../public/img/pbg.jpg");
}

* {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  margin: 0;
}

section {
  background: url("../../public/img/section-bg.jpg");
  background-position: center;
}
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}

ol {
  list-style: none;
  padding: 0;
}

li + li {
  margin-top: 1rem;
}

li {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: aliceblue;
  padding: 0.6rem;
  border-radius: 1rem;
  width: calc(100% - 2rem);
  box-shadow: 0.25rem 0.25rem 0.75rem rgb(0 0 0 / 0.1);
}

li::before {
  counter-increment: list-item;
  content: counter(list-item);
  font-size: 2rem;
  font-weight: 700;
  width: 2em;
  height: 2em;
  background: black;
  flex: 0 0 auto;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

li:nth-child(even) {
  flex-direction: row-reverse;
  background: lavender;
  margin-right: -2rem;
  margin-left: 2rem;
}
</style>