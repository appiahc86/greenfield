<script setup>

</script>

<template>
<div class="mt-5">
  <div class="my-5 top">
    <div class="py-5 text-center text-white">
      <h4>OUR PRODUCTS & SERVICES</h4>
    </div>
  </div>

  <div class="wrapper">
    <ol role="list">
      <li>Agro Inputs Credit Scheme for Small Holder Farmers(Cocoa, cereals, vegetables etc).</li>
      <li>Sale and distribution of Agrochemicals and Agro-equipment.</li>
      <li>Farm Management and Mechanization Services.</li>
      <li>Farmer Training and Extension Services. </li>
      <li>Value Chain Linkage and Financial Inclusion.</li>
      <li>Business Plan Development for Small Holder Farmer Groups, Cooperatives and FBOs.</li>
      <li>Development and Management of VSLAs</li>
      <li>Agribusiness Management and Consultancy Services.</li>
 </ol>
  </div>
</div>
</template>

<style scoped>
.top {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.55), black, #012801);
}

* {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  margin: 0;
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