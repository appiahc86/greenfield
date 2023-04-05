<script setup>
import { ref, onMounted } from "vue";


onMounted(() => {

  const myCarouselElement = document.querySelector('#homeCarousel')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    pause: false,
    wrap: true
  })
  carousel.cycle();
})
</script>

<template>
  <div class="mt-5 mt-sm-5 mt-md-4 mt-lg-0">

    <div id="homeCarousel" class="carousel slide carousel-fade">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/img/carousel/c1.jpeg" class="d-block w-100 carousel-img" alt="...">
          <div class="carousel-caption d-block">
            <h3>sustainable cocoa farming</h3>
<!--            <p>Some representative placeholder content for the first slide.</p>-->
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/carousel/c2.jpg" class="d-block w-100 carousel-img" alt="...">
          <div class="carousel-caption d-block">
            <h3>Farmer Registration</h3>
<!--            <p>Some representative placeholder content for the second slide.</p>-->
          </div>
        </div>
        <div class="carousel-item">
          <img src="/img/carousel/c3.jpg" class="d-block w-100 carousel-img" alt="...">
          <div class="carousel-caption d-block">
            <h3>Greenfield Farmer Group</h3>
<!--            <p>Some representative placeholder content for the second slide.</p>-->
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>


  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-7 px-3">
        <h3>Welcome to Greenfield</h3>
        <p>
          GreenField Agricultural Services is a social impact and value addition
          Agribusiness Company that supports small holder farmers by implementing sustainable agricultural value
          chain programs aimed at increasing crop yield, increasing farmers' income, improving their livelihood and
          reducing poverty. The Head Office is located in Kumasi, the capital city of the Ashanti Region.

        </p>

        <p>
          Greenfield was first registered as Greenfield Agrochemicals in 2014 as a sole proprietorship to undertake sale of agro
          inputs, provide training and extension services to small holder farmers. It was founded by Mr. Samuel Amissah,
          an Agribusiness Expert with about 16 years field experience in Agricultural Financing, Microfinance,
          Agro Inputs Credit Management, Project Development and Management, VSLAs Development, Cocoa Sustainability,
          Farm Management, Farmer Training, Agribusiness Management and Consulting. Mr. Amissah is the Chief
          Executive Officer (CEO) and owner of the business. In order to expand its activities and restructure,
          the company was registered again as Greenfield Agricultural Services Limited in 2020. Greenfield
          currently has 6 outlets in the cocoa growing areas providing small holder cocoa farmers with
          sustainable access to quality agro inputs and training to improve their livelihood. Greenfield
          started with only 1 outlet at Sofoline in Kumasi and has expanded to 6 outlets currently.
          These are Sofoline and Kunsu Wiawso in the Ashanti Region, Goaso in the Ahafo Region,
          Twifo Praso, Agona Abrem in the Central Region and Daboase Junction in the Western Region.
          <br>  <button class="btn btn-sm btn-success">Read more</button>
        </p>


      </div>
      <div class="col-md-5">
        <h3>Head Office</h3>
        <img src="/img/headoffice.jpg" alt="head office" class="img-fluid">
        <h4 class="mt-2">Vision</h4>
        <p>
          Our vision is to become the preferred social
          impact and value addition Agribusiness partner in Ghana and West Africa with
          tailor-made and farmer friendly agribusiness models that work effectively for small
          holder farmers and seek to increase crop yield, increase small holder farmers' income,
          improve their livelihood and help alleviate poverty.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-img{
  filter: brightness(80%);
}
</style>
