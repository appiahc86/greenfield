<script setup>
import TeamCard from "@/component/TeamCard.vue";

</script>

<template>

  <div class="my-5 top">
    <div class="py-5 text-white">
      <h4 style="font-size: 7vw; font-family: fantasy, SansSerif; opacity: 0.7">MANAGEMENT TEAM</h4>
    </div>
  </div>

  <div class="container mt-4">
    <div class="row">
      <div class="col-md-5 p-3 text-center">
        <div class="card">
          <img src="/img/team/ceo.jpg" alt="ceo" class="img-fluid w-100">
        </div>

      </div>
      <div class="col-md-7 p-3">
        <h4>Mr. Samuel Amissah</h4>
        <h5 class="text-success">Founder & CEO</h5>
        <p class="mt-2">
          <b>Mr. Samuel Amissah</b> is the Founder & CEO of Greenfield Agricultural Services Limited.
          He is a qualified Agriculturist, Agribusiness Expert and Consultant with about 17
          years working experience in Agricultural Financing, Microfinance, Agro Inputs Scheme Management,
          Farm Management and Farmer Training, Project Management, Cocoa sustainability and Consultancy
          Services. He holds a BSc Agriculture degree from the University of Cape Coast, Ghana and
          a Master’s degree in Business Administration (Strategic Management & Consulting) from
          the Kwame Nkrumah University of Science and Technology, Ghana. He also has a Certificate
          in Finance for Non-Finance Management from Genesis Institute, Dubai (UAE).
        </p>
        <p>
          He worked for PBC Limited as Project Development Manager where he designed and
          implemented Cocoa Inputs Credit Scheme of about USD 2million for 20,000 cocoa farmers
          with 98% repayment. He also worked as Project Manager at ECOM Ghana where he designed
          and implemented Cocoa Inputs Credit Scheme of about USD 5million for about 7,000 small
          holder farmers with 100% repayment. He also worked as Agricultural Finance Specialist at
          Opportunity International Savings and Loans, Ghana (OISL) where he managed Agric finance
          portfolio and the distribution of agro inputs to over 5,000 small holder farmers with about
          95% repayment. Again, he worked for ProCredit Savings and Loans Company as Agro Loans Coordinator,
          and prior to that he had worked as a Farm Manager for 2K Farms where he managed over 200 hectares
          of Pineapple, Papaya and Passion Fruits. While at Opportunity International,
          Mr. Amissah managed several Agric finance projects whiles at OISL in partnership with
          Technoserve Ghana, Agro Eco, Millennium Villages Project (MVP), ACDIVOCA and Concern Universal
        </p>
        <p>
          He was also a member of a team of Consultants (TSP) contracted by Millennium Development
          Authority (MiDA) under the Ghana Compact (Millennium Challenge Account) to implement
          Commercial Development of Farmer Based Organizations (CDFO) program, under the
          Development of Agricultural Productivity project, which was a principal component
          of the Compact. On the MiDA Agric program, he trained over 2,000 small holder
          farmers who produced maize and vegetables. Mr. Amissah was also a Lead Consultant
          for team of consultants contracted by USAID under USAID/Ghana Feed the Future
          Agriculture Policy Support Project to train Licensed Buying Companies (Maize Aggregators).
          In 2010, Mr Amissah participated in an international conference on Agricultural
          Financing in Malawi where he made a presentation on Ghana’s Agricultural Credit.
          In October, 2019 Mr. Amissah participated in the World cocoa Foundation partnership
          meeting in Berlin, Germany.
        </p>
      </div>
    </div>
  </div>


  <div class="container mt-3 mb-5">
    <div class="section-title">
      <h2>MEET</h2>
      <h3>Our Team</h3>
      <p>
        We have a team of professionals, dedicated to providing excellent
        service.
      </p>
    </div>
    <TeamCard />

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
.user-profile {
  display: block !important;
}
</style>
