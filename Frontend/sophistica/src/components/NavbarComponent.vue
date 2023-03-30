<template>
  <nav id="navBar" class="navBar">
    <div class="navBar-link navBar--brand">
      <span>・⋆——————✧◦</span> SOPHISTICA <span>◦✧——————⋆・</span>
    </div>
    <div class="navBar--link navBar--toggle" onclick="toggleButton()">
      <i class="fa fa-ellipses-vertical"></i>
    </div>
    <hr class="navBar--hr" />
    <div class="navBar--links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/products">Our Products</router-link>
      <router-link to="/contact">Contact Us</router-link>
      <router-link to="/admin">Admin</router-link>
      <router-link to="/checkout">Checkout</router-link>
      <div class="links">
<<<<<<< HEAD
        <div class="search--btn">
          <i class="fa fa-search fa-solid"></i>
          <br />
          <input
            type="text"
            id="search-input"
            v-model="searchValue"
            placeholder="Search Products"
          />
        </div>
        <router-link to="/products" class="i"
          ><i class="fa fa-shopping-cart fa-solid"></i
=======
        <router-link to="/search" class="i"
          ><i class="search--btn fa fa-search fa-solid"></i
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
        ></router-link>
        <router-link to="/user" class="i"
          ><i class="fa fa-circle-user fa-solid"></i
        ></router-link>
<<<<<<< HEAD
=======
        <router-link to="/products" class="i"
        ><i class="fa fa-shopping-cart fa-solid"></i
      ></router-link>
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "SophisticaNavbarComponent",
  computed: {},

  methods: {
    navBar() {
      var navBar = document.getElementById("navBar--links");
      if (navBar.style.display === "block") {
        navBar.style.display = "none";
      } else {
        navBar.style.display = "block";
      }
    },

    toggleButton() {
      const nav = document.querySelectorAll(".navBar--links");
      nav.forEach((nav) => nav.classList.toggle("toggle--ShowItems"));
    },
<<<<<<< HEAD

    searchProducts() {},
=======
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  },
};
</script>

<style scoped>
nav {
  background-color: #ffcee4;
  padding: 1.2%;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

nav a {
  padding: 0.3rem 0.3rem;
  font-size: 1.1rem;
  text-decoration: none;
  font-family: "Work Sans", monospace;
  font-weight: bold;
  color: #0f1021;
  margin-right: 1.5%;
}

nav a:hover {
  font-family: "Eagle lake", monospace;
  color: #d01257;
  border-radius: 1.5rem;
  margin-top: 0.5%;
  padding: 1%;
  letter-spacing: 4px;
  transition: 0.4s ease-in-out;
  cursor: pointer;
}

nav a.router-link-exact-active {
  font-family: "Eagle lake", monospace;
  padding: 1%;
  color: #d01257;
  background-color: #ffcee4;
}

.navBar--brand {
  font-family: "Eagle Lake", monospace;
  font-weight: light;
  letter-spacing: 8px;
  margin-bottom: 1.125%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  float: left;
}

.navBar--brand span {
  letter-spacing: none;
}

.navBar--hr {
  background: linear-gradient(to right, transparent, #d01257, transparent);
  padding: 0;
  margin: 2%;
  border: 0;
  height: 3px;
  line-height: 1rem;
}

.links {
<<<<<<< HEAD
  width: 25%;
=======
  width: 10%;
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  margin-right: 5%;
  margin-top: 0.0005%;
  margin-left: -5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  float: right;
}

.links .i i {
  letter-spacing: none;
  transition: none;
<<<<<<< HEAD
  width: 2rem;
}

.search--btn {
  color: #1f1021;
  display: flex;
  width: rem;
}

.search--btn:hover {
  color: #d01257;
}

input[type="text"] {
  font-family: "Work sans", monospace;
  border: 2px solid #1f1021;
  border-radius: 1.5rem;
  width: 8.125rem;
  height: 2rem;
  padding: 1.5%;
  -webkit-transition: width 0.5s ease-in-out;
  transition: width 0.5s ease-in-out;
}

input[type="text"]:focus {
  width: 130rem;
=======
  width: 30px;
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
}

/* ---------- Navbar Button ---------- */

.navBar--link {
  padding-right: 0.5rem;
}

.navBar--toggle {
  display: none;
}

/* ----------- MEDIA QUERIES ----------- */

@media only screen and (max-width: 768px) {
  .navBar--links,
  .navBar {
    flex-direction: column;
  }

  .navBar--links {
    display: none;
  }

  .toggle--ShowItems {
    display: flex;
  }

  .navBar--toggle {
    align-self: flex-end;
    display: initial;
    position: absolute;
    cursor: pointer;
  }
}
</style>
