<template>
  <div class="home--page">
    <div class="block--gif"></div>
    <div class="block--01"></div>
    <div class="block--02"></div>
    <div class="block--03"></div>
    <div class="homepage--content">
      <div class="heading">
        <br />
        <h1 class="heading--title">Sophistica Boutique</h1>
        <h6 class="heading--para">Be Unique . Be Sophisticated .</h6>
      </div>
      <div class="logo">
        <routerlink to="/"
          >・⋆——————✧◦
          <span>♚</span>
          ◦✧——————⋆・
        </routerlink>
      </div>
      <div class="description">
        <p>
          This boutique offers exclusive high quality designer fashion at a
          reasonable price .
        </p>
      </div>
      <div class="button--link">
        <router-link to="/products" custom v-slot="{ navigate }"
          ><button @click="navigate" role="link" class="home--btn">
            Visit Now
          </button></router-link
        >
        <router-link to="/login" custom v-slot="{ navigate }"
          ><button @click="navigate" role="link" class="home--btn">
            Log In
          </button></router-link
        >
        <router-link to="/register" custom v-slot="{ navigate }"
          ><button @click="navigate" role="link" class="home--btn">
            Sign Up
          </button></router-link
        >
      </div>
    </div>
  </div>
  <SophisticaFooterComponent />
</template>

<script>
import SophisticaFooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "HomeView",
  components: {
    SophisticaFooterComponent,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

.home--page {
  background-color: #ffcee4;
  z-index: 2;
}

.block--gif {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #ffcee4;
  background: url("../assets/images--fashion/Can-You-Wear-Haute-Couture-IRL-H.gif")
    no-repeat 50% 50%;
  background-size: cover;
  animation: fadeOut 1200s linear forwards;
  opacity: 1;
}

@keyframes fadeOut {
  0% {
    oacity: 0;
  }

  40% {
    opacity: 0;
  }

  41% {
    opacity: 1;
  }

  91% {
    opacity: 1;
  }

  92% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

/* ---------- BLOCK 01 ---------- */

.block--01 {
  position: absolute;
  width: 0%;
  height: 100vh;
  background-color: #fb90b7;
  animation: slideLeft 3s cubic-bezier(0.78, 0.86, 0.4, 0.92) forwards;
  left: 0;
  opacity: 0.75;
}

@keyframes slideLeft {
  0% {
    left: 0;
    width: 0%;
  }

  50% {
    left: 0;
    width: 100%;
  }

  100% {
    left: 100%;
    width: 0%;
  }
}

/* ---------- BLOCK 02 ---------- */

.block--02 {
  position: absolute;
  width: 0%;
  height: 100vh;
  background-color: #d01257;
  animation: slideLeft 4.6s cubic-bezier(0.74, 0.86, 0.4, 0.92) forwards;
  animation-delay: 3s;
  opacity: 0.75;
}

/* ---------- BLOCK 03 ---------- */

.block--03 {
  position: absolute;
  width: 0%;
  height: 100vh;
  background-color: #ffcee4;
  animation: expand 3.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 14.6s;
  opacity: 0.75;
}

@keyframes expand {
  0% {
    width: 0%;
  }

  100% {
    width: 60%;
  }
}

/* ---------- HOME PAGE CONTENT BLOCK ---------- */

.homepage--content {
  position: absolute;
  width: 50%;
  top: 46%;
  left: 28%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: #0f1021;
  padding: 4%;
  margin-top: 8.2%;
}

/* ---------- CONTENT BLOCK ---------- */

.heading--title {
  font-family: "Eagle Lake", monospace;
  font-weight: bolder;
  font-size: 4.5rem;
  margin-top: 5%;
  margin-bottom: 2%;
}

.heading--para {
  font-family: "Eagle Lake", monospace;
  font-size: 1.8rem;
  margin-top: -3%;
}

.homepage--content h6 {
  margin-top: 3%;
  margin-bottom: 3%;
}

.logo {
  font-size: 2rem;
  color: #1f1021;
  font-weight: light;
}

.logo span {
  color: #d01257;
}

.description {
  font-family: "Work sans", monospace;
  font-weight: lighter;
}

.description p {
  margin-top: 3%;
  margin-bottom: 2%;
  font-weight: bold;
}

/* ---------- BUTTON ---------- */

.button--link {
  margin-top: 3%;
  margin-bottom: 3%;
}

button {
  font-family: "Work sans", monospace;
  font-weight: bolder;
  width: 80%;
  border: none;
  border-radius: none;
  padding: 14px 38px;
  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: #0f1021;
  color: #fb90b7;
  cursor: pointer;
}

button:hover {
  background-color: #fb90b7;
  color: #0f1021;
  letter-spacing: 8px;
  transition: 0.6s ease-in-out;
}

.home--btn {
  opacity: 0.8;
}

/* ---------- MEDIA QUERIES ---------- */

@media only screen and (max-width: 720px) {
  .home--content {
    margin: 6rem;
  }

  .heading--title {
    font-size: 4.5rem;
  }

  .logo {
    font-size: 1.3rem;
  }

  .button--link {
    margin-top: 2rem;
  }

  button {
    width: 100%;
  }
}
</style>
