<template>
<<<<<<< HEAD
  <div class="singleView--content" v-for="product in products" :key="product">
    <div class="singleView--img">
      <img :src="product.imgURL" class="card--img" alt="product-image" />
    </div>
    <br />
    <div class="product--card">
      <div class="product--body">
        <h5 class="product--title">
          {{ product.productName }}
        </h5>
        <br />
        <p class="product--type">
          {{ product.category }}
        </p>
        <br />
        <p class="product--price">
          {{ product.price }}
        </p>
        <br />
        <button onclick="addToCart(this)">ADD TO CART</button>
      </div>
    </div>
=======
  <div/>
    <div class="single--view"/>
      <div class="gallery">
        <ProductGallery />
      </div>
      <div class="singleView--content">
        <div
        class="product--card"
        width="16rem"
        v-for="product in products"
        :key="product"
      >
        <img :src="product.imgURL" class="card--img" alt="product-image" />
        <br />
        <div class="product--body">
          <h5 class="product--title">
            {{ product.productName }}
          </h5>
          <br />
          <p class="product--type">
            {{ product.category }}
          </p>
          <br />
          <p class="product--price">
            {{ product.price }}
          </p>
          <br />
          <button onclick="addToCart(this)">ADD TO CART</button>
      </div>
    </div>
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  </div>
</template>

<script>
<<<<<<< HEAD
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "SingleProductView",
  components: {},
  setup() {
    const store = useStore();
    store.dispatch("fetchProduct");
    let products = computed(() => {
      store.state.products;
    });
    return {
      products,
    };
=======
import ProductGallery from "@/components/ProductGallery.vue";
export default {
  name: "SingleProductView",
  components: {
    ProductGallery,
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Work sans", monospace;
}

<<<<<<< HEAD
.singleView--content {
=======
body {
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  background-color: #ffcee4;
  color: #1f1021;
  padding: 4%;
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
=======
  justify-content:center;
  align-items: center;
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
}
</style>
