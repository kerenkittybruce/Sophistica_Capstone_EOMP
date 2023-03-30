<template>
  <SophisticaNavbarComponent />
  <div></div>
</template>

<script>
import SophisticaNavbarComponent from "@/components/NavbarComponent.vue";
export default {
  name: "app",
  components: {
    SophisticaNavbarComponent,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Eagle+Lake&family=Work+Sans:wght@300&display=swap");
#app {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  text-decoration: none;
  transition: 0.2s linear;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  z-index: 1;
  scroll-behaviour: smooth;
  scroll-padding-top: 6rem;
}
</style>
