<template>
  <div class="admin--page">
    <div class="admin--title">
      <h1>Admin</h1>
    </div>
    <div class="admin--products">
      <div>
        <h2 class="products--table">Our Products</h2>
        <table class="table">
          <thead>
            <tr>
              <th class="column--01">Product ID</th>
              <th class="column--02">Product Name</th>
              <th class="column--03">Product Price</th>
              <th class="column--04">Category</th>
              <th class="column--05 btns">Edit/Remove</th>
            </tr>
          </thead>
          <tbody v-for="product in products" :key="product">
            <tr>
              <td>{{ product.id }}</td>
              <td>{{ product.productName }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.category }}</td>
              <button class="edit">Edit</button>
              <button class="remove">Remove</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="admin--users">
      <div>
        <h2 class="users--table">Users</h2>
        <table class="table">
          <thead>
            <tr>
              <th class="column--01">User ID</th>
              <th class="column--02">First Name</th>
              <th class="column--03">Last Name</th>
              <th class="column--04">Cell Number</th>
              <th class="column--05">Email</th>
              <th class="column--06">Role</th>
              <th class="column--07 btns">Edit/Remove</th>
            </tr>
          </thead>
          <tbody v-for="user in users" :key="user">
            <tr>
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.cellNumber }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.userRole }}</td>
              <button class="edit">Edit</button>
              <button class="remove">Remove</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "AdminView",

  setup() {
    const store = useStore();
    store.dispatch("fetchUsers");
    let users = computed(() => {
      store.state.users;
    });
    store.dispatch("fetchProducts");
    let products = computed(() => {
      store.state.products;
    });
    return {
      users,
      products,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
* {
<<<<<<< HEAD
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.admin--page {
  background-color: #ffcee4;
  color: #1f1021;
  width: 100%;
  height: 100vh;
  font-family: "Work sans", monospace;
  text-align: center;
}

.admin--title {
  font-family: "Eagle lake", monospace;
  font-weight: bolder;
  font-size: 1.5rem;
}

.admin--products {
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.admin--users {
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.products--table {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 2%;
}

.users--table {
  font-size: 1.2rem;
  font-weight: 600;
  padding: 2%;
}

table {
  border: 2px solid #fb90b7;
  border-radius: 1.5rem;
}

th {
  border-right: 2px solid #fb90b7;
}

.btns {
  border-right: none;
}

.column--01 {
  width: 5%;
}
.column--02 {
  width: 15%;
}

.column--03 {
  width: 15%;
}

.column--04 {
  width: 20%;
}

.column--05 {
  width: 20%;
}

.column--06 {
  width: 20%;
}

.column--07 {
  width: 20%;
}
</style>
=======
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: #ffcee4;
}
</style>
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
