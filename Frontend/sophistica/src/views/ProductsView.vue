<template>
  <div>
    <div class="product--page">
      <div class="page--title">
        <h2>Our Latest Garments</h2>
      </div>
<<<<<<< HEAD
      <div class="actions">
        <select name="sortBy" id="select" v-model="sortBy">
          <option value="alphabetically">Name</option>
          <option value="numerically">Price</option>
        </select>
        <button v-on:click="ascending = !ascending">
          <i v-if="ascending" class="fa fa-solid fa-sort-up"></i>
          <i v-else class="fa fa-solid fa-sort-down"></i>
        </button>
        <button><i class="fa fa-solid fa-filter"></i></button>
      </div>
=======
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
      <hr class="cart--hr" />
      <div class="product--content">
        <div class="product--cart">
          <div class="cart--section" id="cart">
            <div class="title--main">Your Cart</div>
            <hr class="cart--hr" />
            <div class="title--sub" id="title"></div>
          </div>
        </div>
        <div class="product--cards centerTheDiv">
          <div
            class="product--card"
            width="16rem"
            v-for="product in products"
            :key="product"
          >
            <div class="itemImg">
              <img
                :src="product.imgURL"
                class="card--img"
                alt="product-image"
              />
            </div>
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
              <p class="product--price">R {{ product.price }}</p>
              <br />
<<<<<<< HEAD
              <router-link to="/single" custom v-slot="{ navigate }"
                ><button @click="navigate" role="link">
                  CLOSER LOOK
                </button></router-link
              >
              <br />
=======
              <router-link to="/single"
                ><button>CLOSER LOOK</button></router-link
              >
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
              <button onclick="addToCart(this)">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SophisticaFooterComponent />
</template>

<script>
import SophisticaFooterComponent from "@/components/FooterComponent.vue";
import { addItemId, addToCart, del } from "@/assets/scripts/cartFunctionality";
export default {
  name: "ProductsView",
  components: {
    SophisticaFooterComponent,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
<<<<<<< HEAD
    sortArray() {
      let sortedProducts = this.products;

      // Sort Alphabetically
      sortedProducts = sortedProducts.sort((a, b) => {
        if (this.sortBy == "alphabetically") {
          let sortA = a.title.toLowerCase();
          let sortB = b.title.toLowerCase();
          if (sortA < sortB) {
            return -1;
          }
          if (sortA > sortB) {
            return 1;
          }
          return 0;

          // Sort By Price
        } else if (this.sortBy == "price") {
          return a.price - b.price;
        }
      });

      // Sort In Asccending / Descending Order
      if (!this.ascending) {
        sortedProducts.reverse();
      }
      return sortedProducts;
    },

    filterArray() {
      let filterProducts = this.products;
      filterProducts = filterProducts.filter((product) => {
        return product.price <= this.maxPrice;
      });
      return filterProducts;
    },
=======
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
<<<<<<< HEAD
  data() {
    return {
      ascending: true,
      sortBy: "alphabetically",
      searchValue: "",
      maxPrice: null,
    };
  },
=======
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  mounted() {
    addItemId, addToCart, del;
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.product--page {
  background-color: #fb90b7;
  color: #1f1021;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.page--title {
  margin-top: 12%;
  text-align: center;
}

h2 {
  font-size: 3rem;
  font-weight: bold;
  font-family: "Eagle lake", monospace;
}

.product--content {
  width: 100%;
}

/* ---------- CART ---------- */

.product--cart {
  margin: 2%;
  padding: 2%;
<<<<<<< HEAD
  width: 16rem;
=======
  width: 20rem;
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  height: 50rem;
  float: right;
  border: 2px solid #1f1021;
  overflow-y: scroll;
  background-color: #ffcee4;
  color: #1f1021;
  border-radius: 1.5rem;
}

.title--main {
  font-family: "Eagle Lake", monospace;
  font-weight: bolder;
  font-size: 2.25rem;
  margin-bottom: 2%;
}

.cart--hr {
  background: linear-gradient(to right, transparent, #d01257, transparent);
  padding: 0;
  margin: 2%;
  border: 0;
  height: 3px;
  line-height: 1.5em;
}

/* ---------- PRODUCT CARDS ---------- */
.product--cards {
  display: flex;
<<<<<<< HEAD
  flex-wrap: wrap;
=======
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 43%;
  margin-left: auto;
  margin-right: auto;
}

.product--card {
  padding: 6%;
  height: 58rem;
  background: #d01257;
  color: #1f1021;
  border: 2px solid #1f1021;
  border-radius: 1.5rem;
  margin-bottom: 3%;
}

.itemImg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 55%;
  padding: 0.5%;
<<<<<<< HEAD
  width: 100% /9;
  max-width: 100%;
=======
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  height: auto;
}

.card--img {
  position: relative;
  top: 0;
  overflow: hidden;
}

.product--body {
  font-family: "Work sans", monospace;
}

.product--title {
  font-family: "Eagle lake", monospace;
  font-size: 2.25rem;
  font-weight: bold;
}

.product--type {
  font-size: 1.25rem;
  font-weight: bold;
}

.product-price {
  font-size: 0.925rem;
  font-weight: bold;
}

/* ---------- BUTTON ---------- */

button {
<<<<<<< HEAD
  margin: 1%;
=======
  margin: 3%;
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
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
}

button:hover {
  background-color: #fb90b7;
  color: #0f1021;
  letter-spacing: 8px;
  transition: 0.6s ease-in-out;
}

/* ---------- MEDIA QUERIES ---------- */

@media only screen and (max-width: 880px) {
  .product--content {
    display: flex;
    flex-wrap: wrap;
  }

  .product--cart {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    text-align: center;
  }

  .product--card {
    width: 80%;
  }
}
</style>
