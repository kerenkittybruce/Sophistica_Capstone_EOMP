<template>
  <div>
    <div class="forget--page">
      <div class="forget--img">
        <img
          class="img"
<<<<<<< HEAD
          src="https://i.postimg.cc/wjkmM1q6/undraw-With-love-re-1q3m.png"
=======
          src="https://i.postimg.cc/QNkm1wnp/undraw-Woman-ffrd.png"
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
          alt="pretty-in-pink"
        />
      </div>
      <div class="forget--container">
<<<<<<< HEAD
        <form action="https://formspree.io/f/xgebnvrj" method="POST">
=======
        <form action="https://formspree.io/f/xjvderll" method="POST">
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
          <img
            class="user-img"
            src="https://i.postimg.cc/s2jw2rr6/undraw-Female-avatar-efig.png"
            alt="avatar-img"
          />
          <h2>Forgot Your Password ?</h2>
<<<<<<< HEAD
          <p>
            Please enter your new password twice to confirm that you are sure of
            your decision .
          </p>
          <small
            >We suggest choosing a strong password (using only numbers and
            letters) which you are sure to remember clearly .</small
          >
          <div class="input--container one focus">
            <div class="icons">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="fa">
              <h5>First Name</h5>
              <input
                type="name"
                name="firstName"
                class="input"
                required="required"
              />
            </div>
          </div>
          <div class="input--container two focus">
            <div class="icons">
              <i class="fa-solid fa-lock"></i>
            </div>
            <div class="fa">
              <h5>New Password</h5>
=======
          <p>Please enter your new password twice to confirm that you are sure of your decision .</p>
          <small>We suggest choosing a strong password (using only numbers and letters) which you are sure to remember clearly .</small>
          <div class="input--container one focus">
            <div class="icons">
              <i class="fa-solid fa-lock"></i>
            </div>
            <div class="fa">
              <h5>Current Password</h5>
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
              <input
                type="password"
                name="password"
                class="input"
<<<<<<< HEAD
=======
                autocomplete="current-password"
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
                required="required"
              />
            </div>
          </div>
          <div class="input--container three focus">
            <div class="icons">
              <i class="fa-solid fa-lock"></i>
            </div>
            <div class="fa">
              <h5>New Password</h5>
              <input
                type="password"
                name="password"
                class="input"
                required="required"
              />
            </div>
          </div>
<<<<<<< HEAD
          <input
            type="submit"
            class="btn"
            value="Submit"
            onsubmit="updateUser()"
          />
=======
          <input type="submit" class="btn" value="Submit" />
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
        </form>
      </div>
    </div>
  </div>
  <SophisticaFooterComponent />
</template>

<script>
import SophisticaFooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "ForgotPasswordView",
  components: {
    SophisticaFooterComponent,
  },
<<<<<<< HEAD
  computed: {
    products() {
      return this.$store.state.users;
    },
  },
  created() {
    this.$store.dispatch("updateUser");
  },
  data() {
    return {};
  },
  mounted() {},
=======

  data() {
    return {};
  },

  mounted() {},

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  methods: {},
};
</script>

<style scoped>
* {
  margin: o;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #d01257;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
body {
  font-family: "Work sans", monospace;
  width: 100%;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.forget--page {
  width: 96%;
  border-radius: 1.5rem;
  height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.forget--img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  margin-left: 4%;
  border-radius: 1.5rem;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.user-img {
  width: 50%;
  border-radius: 50%;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
form {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.forget--container {
  text-align: center;
  display: flex;
  align-items: center;
}
<<<<<<< HEAD
.forget--container h2 {
  font-size: 2rem;
}
.forget--container p,
small {
=======

.forget--container h2 {
  font-size: 2rem;
}

.forget--container p, small{
>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
  font-family: "Work sans", monospace;
  font-weight: 600;
  color: #1f1021;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
form h2 {
  font-family: "Eagle lake", monospace;
  font-size: 2.9rem;
  text-transform: uppercase;
  margin: 2%;
  color: #1f1021;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.input--container {
  position: relative;
  display: grid;
  grid-template-columns: 6% 94%;
  margin: 2%;
  padding: 2%;
  border-bottom: 2px solid #1f1021;
}
<<<<<<< HEAD
.input--container.one {
  margin-top: 0;
}
=======

.input--container.one {
  margin-top: 0;
}

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.fa {
  display: flex;
  justify-content: center;
  align-items: center;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.input--container.two,
.input--container.three {
  margin-bottom: 1%;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.input--container > div h5 {
  position: absolute;
  left: 1%;
  top: 50%;
  transform: translateY(-50%);
  color: #1f1021;
  font-size: 1rem;
  transition: 0.4s;
  font-family: "Work sans", monospace;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.input--container > div {
  position: relative;
  height: 2.1rem;
}
<<<<<<< HEAD
.input--container.focus .fa i {
  color: #d01257;
}
=======

.input--container.focus .fa i {
  color: #d01257;
}

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.input--container.focus div h5 {
  top: -50%;
  font-size: 0.9rem;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.input {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  outline: none;
  background-color: #fb90b7;
  color: #1f1021;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Work sans", monospace;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
a {
  display: block;
  text-align: right;
  text-decoration: none;
  color: #1f1021;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Work sans", monospace;
  transition: 0.4s;
}
<<<<<<< HEAD
a:hover {
  color: #ffcee4;
}
=======

a:hover {
  color: #ffcee4;
}

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.btn {
  display: block;
  margin: 1rem;
  background-size: 200px;
  transition: 0.5s;
  font-family: "Work sans", monospace;
  font-weight: bolder;
  font-size: 1rem;
  width: 100%;
  border: none;
  border-radius: none;
  padding: 14px 38px;
  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: #0f1021;
  color: #fb90b7;
  cursor: pointer;
  outline: none;
  border: none;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
.btn:hover {
  background-color: #fb90b7;
  color: #0f1021;
  letter-spacing: 8px;
  transition: 0.6s ease-in-out;
}
<<<<<<< HEAD
=======

>>>>>>> b28efc8f765ae85591e44130f76f40eab786ffc5
@media only screen and (max-width: 720px) {
  .forget--page {
    flex-wrap: wrap;
  }
}
</style>
