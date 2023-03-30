<template>
  <div>
    <SophisticaContactForm />
  </div>
  <SophisticaFooterComponent />
</template>

<script>
import SophisticaContactForm from "@/components/ContactForm.vue";
import SophisticaFooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "SophisticaContactUsView",
  components: {
    SophisticaContactForm,
    SophisticaFooterComponent,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

div {
  width: 100%;
  background-color: #fb90b7;
}
</style>
