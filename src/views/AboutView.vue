<script setup>
import PageBanner from "@/component/PageBanner.vue";
import TeamCard from "@/component/TeamCard.vue";
</script>

<template>
  <PageBanner title="About Us" subTitle="about" img="/img/banner.jpg" />
  <!-- OUR MISSION -->
  <div class="container my">
    <div class="home-about my text-center">
      <h2>About Us</h2>
      <p>
        GreenField Agricultural Services is a social impact and value addition
        Agribusiness Company that supports small holder farmers by implementing
        sustainable agricultural value chain programs aimed at increasing crop
        yield, increasing farmers' income, improving their livelihood and
        reducing poverty. The Head Office is located in Kumasi, the capital city
        of the Ashanti Region.
      </p>
      <p>
        Greenfield was first registered as Greenfield Agrochemicals in 2014 as a
        sole proprietorship to undertake sale of agro inputs, provide training
        and extension services to small holder farmers. It was founded by Mr.
        Samuel Amissah, an Agribusiness Expert with about 16 years field
        experience in Agricultural Financing, Microfinance, Agro Inputs Credit
        Management, Project Development and Management, VSLAs Development, Cocoa
        Sustainability, Farm Management, Farmer Training, Agribusiness
        Management and Consulting. Mr. Amissah is the Chief Executive Officer
        (CEO) and owner of the business. In order to expand its activities and
        restructure, the company was registered again as Greenfield Agricultural
        Services Limited in 2020. Greenfield currently has 6 outlets in the
        cocoa growing areas providing small holder cocoa farmers with
        sustainable access to quality agro inputs and training to improve their
        livelihood. Greenfield started with only 1 outlet at Sofoline in Kumasi
        and has expanded to 6 outlets currently. These are Sofoline and Kunsu
        Wiawso in the Ashanti Region, Goaso in the Ahafo Region, Twifo Praso,
        Agona Abrem in the Central Region and Daboase Junction in the Western
        Region.
      </p>
      <p>
        Apart from farmer coming to the outlets to buy agro inputs, Greenfield
        implements cocoa inputs credit scheme for small holder cocoa farmers and
        has supported about 2,000 small holder cocoa farmers in the cocoa
        growing areas with the cocoa inputs credit scheme. Currently the company
        has registered over 5,000 small holder cocoa farmers to provide them
        with sustainable able access to training and quality agro inputs. In
        partnership with MFIs, Greenfield has so far supported about 693 cocoa
        farmers.
      </p>
    </div>
    <div class="row">
      <div class="col-lg-6 d-flex justify-content-center align-items-center">
        <div class="text">
          <h3>OUR MISSION</h3>
          <p>
            Our mission is to impact the society and improve the well-being of
            small holder farmers through implementation of sustainable
            agricultural value chain programs that seek to increase crop yield,
            increase small holder farmers’ income and improve their livelihood
            to help alleviate poverty.
          </p>
          <p>
            Our goal is to positively impact the society, create value in the
            lives of small holder farmers and improve their well-being to help
            reduce poverty.
          </p>
          <div class="hb-box d-flex flex-row">
            <div class="hb-inner">
              <figure class="hb-icon">
                <img src="/img/shield-orange.png" alt="" />
              </figure>
              <h5>We are Passionate</h5>
              <p>Latest analysis by the Cadre Harmonisé.</p>
            </div>
            <div class="hb-inner spacing-sm">
              <figure class="hb-icon">
                <img src="/img/wheat.png" alt="" />
              </figure>
              <h5>Industry Oriented</h5>
              <p>Enabling Ecosystem for Food and Agriculture.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 spacing-md">
        <figure class="home-about-img">
          <img src="/img/farmey.jpg" alt="" />
          <div class="image-badget">
            <figure class="ib-icon">
              <img src="/img/medal.png" alt="" width="100%" />
            </figure>
            <h4 class="mt-4">Our Values</h4>
            <p>
              Continuously realize profitability and growth objectives through
              the manufacture and distribution of fertilizer.
            </p>
          </div>
        </figure>
      </div>
    </div>
  </div>
  <!-- OUR VISION -->
  <div class="container my">
    <div class="row">
      <div class="col-lg-6 spacing-md">
        <figure class="home-about-img">
          <img src="/img/farmey.jpg" alt="" />
          <div class="image-badget">
            <figure class="ib-icon">
              <img src="/img/medal.png" alt="" width="100%" />
            </figure>
            <h4 class="mt-4">Our Values</h4>
            <p>
              Continuously realize profitability and growth objectives through
              the manufacture and distribution of fertilizer.
            </p>
          </div>
        </figure>
      </div>
      <div class="col-lg-6 d-flex justify-content-center align-items-center">
        <div class="home-about">
          <h3>OUR VISION</h3>
          <p>
            Our vision is to become the preferred social impact and value
            addition Agribusiness partner in Ghana and West Africa with
            tailor-made and farmer friendly agribusiness models that work
            effectively for small holder farmers and seek to increase crop
            yield, increase small holder farmers' income, improve their
            livelihood and help alleviate poverty.
          </p>
          <p>
            Our Integrated Soil Fertility Management (ISFM) Policy focuses on
            effective combination of mineral fertilizers, organic inputs and
            improved germplasm combined with knowledge on how to adapt these
            practices to local conditions in order to improve soil conditions,
            optimize agronomic efficiency of the applied nutrients and increase
            crop productivity incomes of smallholder farmers.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="my">
    <div class="home-about text-center">
      <h2>Our Team</h2>
    </div>
    <TeamCard />
  </div>
</template>

<style scoped></style>
