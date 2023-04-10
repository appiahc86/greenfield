<script setup>
const servicesData = [{
    image: "/img/wheat-f.png",
    title: "Natural Wheats",
    description: "Wheat as well as livestock updates on cattle rops and livestock from Black producers."
},{
    image: "/img/carrot.png",
    title: "Fresh Vegetables",
    description: " Crop and white farmers got most of the acreage allotments, which were seemed."
},{
    image: "/img/fruits.png",
    title: ">Fresh Fruits",
    description: "Agriculture becomes more digitized, cybersecurity and data  privacy remain."
},{
    image: "/img/cow.png",
    title: "Healthy Cattle",
    description: "Farmer’s data is managed is a journey all of agriculture is a part of beef up our efforts."
},{
    image: "/img/tractor.png",
    title: "Modern Truck",
    description: "We have a security checkpoint that asks if all procedures back for further development."
},{
    image: "/img/barn.png",
    title: "Farm Plans",
    description: "  Grass widely cultivated for its seed, a cereal grain which is a worldwide."
}];
</script>
<template>
  <!-- SERVICES START -->
  <div
    class="services-layer mb-5"
    :style="{ backgroundImage: `url(/img/section-bg.jpg)` }"
  >
    <div class="container">
      <div class="section-title">
        <h2>Services</h2>
        <h3>What Farmey Offer</h3>
        <p>
          We have a wide variety of services so that our clients have good
          options.
        </p>
      </div>
      <div class="col-row">
        <div class="col-md-12 col-lg-10 mx-auto">
          <div class="row">
            <div
              class="col-md-6 col-lg-6"
              v-for="data in servicesData"
            >
              <div class="service-box">
                <div class="media">
                  <img :src="data.image" class="mr-3 sb-icon" alt="..." />
                  <div class="media-body sb-caption">
                    <h4>{{ data.title  }}</h4>
                    <p>{{ data.description }} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- SERVICES END -->
</template>
