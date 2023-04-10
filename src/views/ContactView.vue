<script setup>
import ContactCard from "@/component/ContactCard.vue";
import PageBanner from "../component/PageBanner.vue";
</script>
<template>
  <PageBanner title="Contact Us" img="/img/banner.jpg" subTitle="Contact" />
<ContactCard />
</template>
<style>
 .mx-auto{
    margin: 0 auto;
 }
 .contact-form-layer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
 }
</style>
