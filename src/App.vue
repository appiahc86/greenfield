<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";

const navbarCollapse = ref(null);
const route = useRoute();
const router = useRouter();

const togglerElement = ref(null);

const togglerFunction = (e) => {
  if (e.delegateTarget.classList.contains("collapsed")) {
    e.delegateTarget.children[0].style.display = "block";
    e.delegateTarget.children[1].style.display = "none";
  } else {
    e.delegateTarget.children[0].style.display = "none";
    e.delegateTarget.children[1].style.display = "block";
  }
};


const goHome = () => {
  router.push({ name: "home" });
};

onMounted(() => {
  watch(
    () => route.name,
    () => {
      navbarCollapse.value.classList.remove("show");
      togglerElement.value.children[0].style.display = "block";
      togglerElement.value.children[1].style.display = "none";
    }
  );

});
const aboutHover = ref(false);
const programHover = ref(false);
</script>

<template>
  <div class="">
    <nav
      class="navbar navbar-expand-lg fixed-top p-0 shadow shadow-sm"
      id="mainNav"
    >
      <div class="container-fluid">
        <a class="navbar-brand" style="cursor: pointer" @click="goHome">
          <img
            src="/img/logo.jpg"
            class="logo"
            height="50"
            width="80"
            alt="logo"
          />
        </a>

        <a
          class="navbar-toggler text-decoration-none"
          @click="togglerFunction($event)"
          ref="togglerElement"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style="cursor: pointer"
        >
          <span class="pi pi-bars ms-1"></span>
          <span class="pi pi-times ms-1" style="display: none"></span>
        </a>
        <div
          class="collapse navbar-collapse text-white"
          id="navbarResponsive"
          ref="navbarCollapse"
        >
          <ul class="navbar-nav text-uppercase ms-auto py-lg-0 fw-bold">
            <li class="nav-item text-center">
              <router-link
                :to="{ name: 'home' }"
                class="nav-link text-decoration-none"
                >home</router-link
              >
            </li>

            <li class="nav-item text-center">
              <router-link
                  :to="{ name: 'products' }"
                  class="nav-link text-decoration-none"
              >products & services</router-link
              >

            </li>

            <li class="nav-item text-center">
              <router-link
                  :to="{ name: 'social-impact' }"
                  class="nav-link text-decoration-none"
              >Social impact</router-link>
            </li>

            <li class="nav-item text-center">
              <router-link
                  :to="{ name: 'gallery' }"
                  class="nav-link text-decoration-none"
              >gallery</router-link>
            </li>

<!--            Show only on large screens -->
            <li class="nav-item dropdown d-none d-lg-block"
                @mouseover="programHover = true"
                @mouseleave="programHover = false"
            >
              <div
                class="nav-link dropdown-toggle text-center"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"


              >
                <span class="d-lg-none">&nbsp; &nbsp; &nbsp;</span>our projects
              </div>
              <ul
                class="dropdown-menu text-center"
                :class="{ show: programHover }"
                @mouseleave="programHover = false"
              >
                <li>
                  <router-link
                      :to="{ name: 'projects' }"
                      class="dropdown-item mb-3"
                      @click="programHover = false"
                  >projects</router-link>
                </li>

              </ul>
            </li>

<!--            Show only on smaller screens -->
            <li class="nav-item dropdown d-lg-none"
            >
              <div
                  class="nav-link dropdown-toggle text-center"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                <span class="d-lg-none">&nbsp; &nbsp; &nbsp;</span>our projects
              </div>
              <ul
                  class="dropdown-menu text-center"
              >

                <li>
                  <router-link
                      :to="{ name: 'projects' }"
                      class="dropdown-item mb-3"
                  >projects</router-link>
                </li>

              </ul>
            </li>


            <li class="nav-item text-center">
              <router-link
                  :to="{ name: 'careers' }"
                  class="nav-link text-decoration-none"
              >careers</router-link
              >
            </li>

      <!--    Show only on large screens        -->
            <li class="nav-item dropdown d-none d-lg-block"
                @mouseover="aboutHover = true"
                @mouseleave="aboutHover = false"
            >
              <div
                  class="nav-link dropdown-toggle text-center"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                <span class="d-lg-none">&nbsp; &nbsp; &nbsp;</span>About
              </div>
              <ul class="dropdown-menu text-center" :class="{ show: aboutHover }">
                <router-link
                    :to="{ name: 'about' }"
                    class="dropdown-item mb-3"
                    @click="aboutHover = false"
                >About Us</router-link>
                <router-link
                    :to="{ name: 'management' }"
                    class="dropdown-item mb-3"
                    @click="aboutHover = false"
                >Management</router-link
                >
                <router-link
                    :to="{ name: 'news' }"
                    class="dropdown-item mb-3"
                    @click="aboutHover = false"
                >News</router-link>
              </ul>
            </li>

<!--            Show only on smaller screens-->
            <li class="nav-item dropdown d-lg-none">
              <div
                  class="nav-link dropdown-toggle text-center"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                <span class="d-lg-none">&nbsp; &nbsp; &nbsp;</span>About
              </div>
              <ul class="dropdown-menu text-center">
                <router-link
                    :to="{ name: 'about' }"
                    class="dropdown-item mb-3"
                >About Us</router-link>
                <router-link
                    :to="{ name: 'management' }"
                    class="dropdown-item mb-3"
                >Management</router-link
                >
                <router-link
                    :to="{ name: 'news' }"
                    class="dropdown-item mb-3"
                >News</router-link>
              </ul>
            </li>

            <li class="nav-item text-center">
              <router-link
                  :to="{ name: 'contact' }"
                  class="nav-link text-decoration-none"
              >contact</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

    <footer class="bg-success text-white">
      <div class="container-fluid py-5">
        <div class="row text-center">
          <div class="col-md-6 col-lg-4 mb-4">
            <h4>Company</h4>
            <p>
              <router-link :to="{name: 'home'}" class="text-decoration-none text-white">Home</router-link>
            </p>
            <p>
              <router-link :to="{name: 'about'}" class="text-decoration-none text-white">About Us</router-link>
            </p>
            <p>
              <router-link :to="{name: 'management'}" class="text-decoration-none text-white">Management</router-link>
            </p>
            <p>
              <router-link :to="{name: 'gallery'}" class="text-decoration-none text-white">Gallery</router-link>
            </p>
            <p>
              <router-link :to="{name: 'contact'}" class="text-decoration-none text-white">Contact Us</router-link>
            </p>
          </div>

          <div class="col-md-6 col-lg-4 mb-4 text-center">
            <h4>Contact</h4>
            <p>
              <b>Phone: </b>
              <a href="tel:+233248714806" class="text-decoration-none text-white">0248714806</a> /
              <a href="tel:+233245276032" class="text-decoration-none text-white">0245276032</a>
            </p>
            <p class="text-center">
              <b>Email: </b>
              <a href="mailto:greenfieldagriculturalservices@gmail.com"
                 class="text-decoration-none text-white"
              >greenfieldagriculturalservices@gmail.com</a>
            </p>
            <p>
              <b>Location: </b>
              <a class="text-decoration-none text-white"
              >Plt 52 Blk C,Agric Nzema, Kumasi</a>
            </p>

          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <h4>Connect</h4>
            <div class="d-flex text-center">
              <div class="mx-auto">
                <a
                  ><span class="pi pi-facebook" style="font-size: 1.6em"></span
                ></a>
                <a href="https://www.linkedin.com/in/greenfield-agricultural-services-limited-418b59228"
                   class="text-decoration-none text-white" target="_blank"
                  ><span
                    class="pi pi-linkedin mx-4"
                    style="font-size: 1.6em"
                  ></span
                ></a>
                  <a
                  ><span class="pi pi-youtube" style="font-size: 1.6em"></span
                  ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt-4">
          <div class="col text-center">
            <h6 style="font-size: 1em;">Copyright &copy; 2024 <b>Greenfield Agricultural Services</b></h6>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: gold;
}
.navbar-expand-lg {
  background: linear-gradient(45deg, white, white, #eafcea);
}
.dropdown-item {
  font-size: 0.8rem;
}
</style>
