<template>
  <div>
    <CheckoutForm/>
  </div>
</template>

<script>
import CheckoutForm from "@/components/CheckoutForm.vue";
export default {
  name: "CheckoutView",
  components: {
    CheckoutForm,
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
