// ---------- CONTROLLER ---------- //

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const route = express.Router();
const { User, Products } = require("../model/model");

// User Instance

const user = new User();

//  Product Instance

const product = new Products();

// GET Sophistica

route.get("^/$|/sophistica", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../view/index.html"));
});

// ---------- USER LOGIN ---------- //

// Login

route.post("/login", bodyParser.json(), (req, res) => {
  user.login(req, res);
});

// Retrieve all users

route.get("/users", (req, res) => {
  user.fetchUsers(req, res);
});

// Retrieve single user

route.get("/users/:id", (req, res) => {
  user.fetchUser(req, res);
});

// To update user

route.put("/users/:id", bodyParser.json(), (req, res) => {
  user.updateUser(req, res);
});

// To register user

route.post("/register", bodyParser.json(), (req, res) => {
  user.createUser(req, res);
});

// To delete user

route.delete("/users/:id", (req, res) => {
  user.deleteUser(req, res);
});

// ---------- PRODUCTS ----------- //

// GET all products

route.get("/products", (req, res) => {
  product.fetchProducts(req, res);
});

// Fetch a single product

route.get("/products/:id", (req, res) => {
  product.fetchProduct(req, res);
});

// Add a new product

route.post("/products", bodyParser.json(), (req, res) => {
  product.addProduct(req, res);
});

// Update a product

route.put("/products/:id", bodyParser.json(), (req, res) => {
  product.updateProduct(req, res);
});

// Delete a product

route.delete("/products/:id", (req, res) => {
  product.deleteProduct(req, res);
});

// ----------- CART ---------- //

// For user to fetch all products in cart

route.get("/user/:id/carts", (req, res) => {
  product.fetchCartProducts(req, res);
});

// For user to add a single product

route.post("/user/:id/cart", bodyParser.json(), (req, res) => {
  product.addCartProduct(req, res);
});

// For user to update a product

route.put("/user/:id/cart/:id", bodyParser.json(), (req, res) => {
  product.updateCartProduct(req, res);
});

// For a user to delete multiple products

route.delete("/user/:id/cart/:id", (req, res) => {
  product.deleteCartProducts(req, res);
});

// For a user to delete a single product

route.delete("/user/:id/cart/:id", (req, res) => {
  product.deleteCartProduct(req, res);
});

module.exports = route;
