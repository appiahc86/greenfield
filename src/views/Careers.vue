<script setup>
import {onMounted} from "vue";
import sal from "sal.js";


onMounted(() => {
  sal({
    once: false,
  });

});
</script>


<template>
  <div class="mt-5 top">
    <div class="container">
      <div class="row py-5">
        <div class="col-md-6 pt-5">
          <h1 class="my-auto text-center" style="margin-top: 50px;">
            <span style="border-bottom: 3px solid black; padding-bottom: 15px;">Care</span>ers</h1>
          <br>
        </div>
        <div class="col-md-6 text-center">
            <img src="/img/cocoa.jpg" alt="cocoa" class="img-fluid rounded-circle">

        </div>
      </div>
    </div>
  </div>

  <div class="my-5">
    <div class="section-title">
      <h2>CAREERS</h2>
      <div class="anim">
        <h3 class="typed">Job Opportunities</h3>
      </div>

    </div>

    <h2 class="text-center text-danger">No vacancy at this time, please check again later</h2>

<!--    <div class="container">-->
<!--      <div class="row">-->
<!--        <div class="col-md-4 mb-3">-->
<!--          <div class="card shadow p-4">-->
<!--            <h6 class="text-danger mb-2" style="opacity: 0.7">Fulltime, Onsite</h6>-->
<!--            <h4>Project Administrator</h4>-->
<!--            <p class="text-muted">-->
<!--              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos-->
<!--              dolores eaque eius eum exercitationem id illum impedit itaque, maxime mollitia,-->
<!--              nisi placeat praesentium quisquam!-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-4 mb-3">-->
<!--          <div class="card shadow p-4">-->
<!--            <h6 class="text-danger mb-2" style="opacity: 0.7">Part time, Remote</h6>-->
<!--            <h4>Marketing Strategies</h4>-->
<!--            <p class="text-muted">-->
<!--              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos-->
<!--              dolores eaque eius eum exercitationem id illum impedit itaque, maxime mollitia,-->
<!--              nisi placeat praesentium quisquam!-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-md-4 mb-3">-->
<!--          <div class="card shadow p-4">-->
<!--            <h6 class="text-danger mb-2" style="opacity: 0.7">Fulltime, Onsite</h6>-->
<!--            <h4>Customer Services</h4>-->
<!--            <p class="text-muted">-->
<!--              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos-->
<!--              dolores eaque eius eum exercitationem id illum impedit itaque, maxime mollitia,-->
<!--              nisi placeat praesentium quisquam!-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

  </div>


<!--  Why work with us -->
<div class="mb-5" style="background: rgba(239,246,239,0.47)">
  <div class="container py-4">
    <h1
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-duration="2000"
        style="--sal-duration: 1s; --sal-delay: 1s;"
        data-sal-easing="ease-out-back"
    >Why work with us?</h1>

    <!-- timeline item 1 -->
    <div
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="2000"
        style="--sal-duration: 1s; --sal-delay: 1s;"
        data-sal-easing="ease-out-back"
        class="row no-gutters">
      <div class="col-sm"> <!--spacer--> </div>
      <!-- timeline item 1 center dot -->
      <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
        <h3 class="m-2">
          <span class="badge rounded-pill bg-secondary text-white border text-dark">1</span>
        </h3>
        <div class="row h-50">
          <div class="col border-end">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
      </div>
      <!-- timeline item 1 event content -->
      <div class="col-sm py-2">
        <div class="card shadow">
          <div class="card-body">
            <!--            <div class="float-end text-muted small">Jan 9th 2021 7:00 AM</div>-->
            <h4 class="card-title text-muted">Career Progression</h4>
            <p class="card-text">
              We know how important your career is to you. It’s important to us too! That’s why we
              have a clear and transparent career path with international opportunities,
              supported by our industry-renowned training and development.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--/row-->

    <!-- timeline item 2 -->
    <div class="row no-gutters">
      <div class="col-sm py-2">
        <div class="card shadow">
          <div class="card-body">
            <h4 class="card-title text-success">Wellbeing</h4>
            <p class="card-text">
              We never forget the importance of health and wellbeing.
              It’s vitally important for our employees to take the time
              to focus on their physical, financial and mental wellbeing.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col border-end">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
        <h3 class="m-2">
          <span class="badge rounded-pill bg-success">2</span>
        </h3>
        <div class="row h-50">
          <div class="col border-end">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
      </div>
      <div class="col-sm"> <!--spacer--> </div>
    </div>
    <!--/row-->

    <!-- timeline item 3 -->
    <div class="row no-gutters">
      <div class="col-sm"> <!--spacer--> </div>
      <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col border-end">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
        <h3 class="m-2">
          <span class="badge rounded-pill bg-warning border text-dark">3</span>
        </h3>
        <div class="row h-50">
          <div class="col border-end">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
      </div>
      <div class="col-sm py-2">
        <div class="card">
          <div class="card-body">
<!--            <div class="float-end text-muted small">8:30 AM</div>-->
            <h4 class="card-title">Social Impact</h4>
            <p>
              Our goal is to positively impact the society, create value in the lives of small holder farmers
              and improve their livelihood to help reduce poverty.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--/row-->

    <!-- timeline item 4 -->
    <div
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-duration="2000"
        style="--sal-duration: 1s; --sal-delay: 1s;"
        data-sal-easing="ease-out-back"
        class="row no-gutters">
      <div class="col-sm py-2">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Rewards</h4>
            <p>
              At Greenfield Agricultural Services, rewards are more than just cash incentives.
              But our competitive basic salaries, personal and team-based bonuses
              and additional incentives are a great start.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
        <div class="row h-50">
          <div class="col border-end">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
        <h3 class="m-2">
          <span class="badge rounded-pill bg-info border">4</span>
        </h3>
        <div class="row h-50">
          <div class="col">&nbsp;</div>
          <div class="col">&nbsp;</div>
        </div>
      </div>
      <div class="col-sm"> <!--spacer--> </div>
    </div>
    <!--/row-->

  </div>
</div>


</template>


<style scoped>
.top {
  background: linear-gradient(40deg, rgba(143, 231, 64, 0.56), rgba(173, 255, 47, 0.67));
}
.card h4{
  font-weight: 400;
}

.anim{
  display: inline-block;
}

.typed {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing;
  animation-duration: 2s;
  animation-timing-function: steps(30, end);
  animation-fill-mode: forwards;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

</style>