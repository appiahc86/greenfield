<script setup>
import {onMounted, ref} from "vue";

</script>

<template>
<div class="mt-5 py-5 top">
  <div class="container">
    <div class="row">
      <div class="col-md-6 pt-5">

        <div class="anim">
        <h2 class="mt-4 typed text-success fw-bold">Social Impact</h2>
        </div>
          <h5 class="">Improving livelihood to help alleviate poverty.</h5>

<!--        <h5 class="my-4 line-1 anim-typewriter text-danger" ref="anim">-->
<!--          Improving livelihood to help alleviate poverty.</h5>-->
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur
          corporis deserunt dolor dolores ducimus est id impedit inventore labore,
          libero magnam quidem quisquam quod ratione recusandae tempore vero voluptatem?
        </p>
      </div>
      <div class="col-md-6">
        <img src="/img/undraw.svg" alt="image" class="img-fluid">
      </div>
    </div>
  </div>
</div>

  <h1 class="text-center text-muted py-4">Soci<span style="border-bottom: 5px Solid gold; padding-bottom: 15px;">al I</span>mpact </h1>
  <div style="" class="py-5">
    <div class="container">

      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card shadow h-100">
            <div class="card-img-top">
                <img src="/img/impact/1.jpeg" alt="" class="img-fluid">
            </div>
            <div class="card-body">
              <p>
                Continuously support smallholder farmers on sustainable basis to increase their crop yield,
                increase their income, and improve their livelihood
                to help reduce poverty while meeting the expectations of our shareholders
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card shadow h-100">
            <div class="card-img-top">
              <img src="/img/impact/2.jpeg" alt="" class="img-fluid">
            </div>
            <div class="card-body">
              <p>
                We support small holder farmers by implementing sustainable agricultural
                value chain programs aimed at increasing crop yield, increasing farmers'
                income, improving their livelihood and reducing poverty.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card shadow h-100">
            <div class="card-img-top">
              <img src="/img/impact/3.jpeg" alt="" class="img-fluid">
            </div>
            <div class="card-body">
              <p>
                Currently the company has registered over 5,000 small
                holder cocoa farmers to provide them with sustainable
                able access to training and quality agro inputs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.anim{
  display: inline-block;
  font-family: "arial",serif;
  font-size: 1.6em;
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