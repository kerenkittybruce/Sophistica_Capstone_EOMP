<template>
  <div id="myDiv" class="animate-bottom" onload="mySpinner()" style="margin: 0">
    <div class="register--page">
      <div class="register--img">
        <img
          class="img"
          src="https://i.postimg.cc/TPmCpr2t/undraw-Balloons-re-8ymj.png"
          alt="pretty-in-pink"
        />
      </div>
      <div class="register--container">
        <form action="https://formspree.io/f/xwkjrpyp" method="POST">
          <img
            class="user-img"
            src="https://i.postimg.cc/s2jw2rr6/undraw-Female-avatar-efig.png"
            alt="avatar-img"
          />
          <h2>Register Here 💕 :</h2>
          <div class="input--container one focus">
            <div class="icons">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="fa">
              <h5>Username</h5>
              <input type="text" class="input" required="required" />
            </div>
          </div>
          <div class="input--container two focus">
            <div class="icons">
              <i class="fa-solid fa-at"></i>
            </div>
            <div class="fa">
              <h5>Email Address</h5>
              <input type="email" class="input" required="required" />
            </div>
          </div>
          <div class="input--container three focus">
            <div class="icons">
              <i class="fa-solid fa-lock"></i>
            </div>
            <div class="fa">
              <h5>Password</h5>
              <input type="password" class="input" required="required" />
            </div>
          </div>
          <input type="submit" class="btn" value="Register" />
        </form>
      </div>
    </div>
  </div>
  <SophisticaFooterComponent />
</template>

<script>
import SophisticaFooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "RegisterView",
  components: {
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
  margin: o;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: #ffcee4;
}

body {
  font-family: "Work sans", monospace;
  width: 80%;
}

.register--page {
  width: 96%;
  border-radius: 1.5rem;
  height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register--img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  margin-left: 4%;
  border-radius: 1.5rem;
}

.user-img {
  width: 50%;
  border-radius: 50%;
}

form {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.register--container {
  text-align: center;
  display: flex;
  align-items: center;
}

form h2 {
  font-family: "Eagle lake", monospace;
  font-size: 2.9rem;
  text-transform: uppercase;
  margin: 2%;
  color: #1f1021;
}

.input--container {
  position: relative;
  display: grid;
  grid-template-columns: 6% 94%;
  margin: 2%;
  padding: 2%;
  border-bottom: 2px solid #1f1021;
}

.input--container.one {
  margin-top: 0;
}

.fa {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input--container.two,
.input--container.three {
  margin-bottom: 1%;
}

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

.input--container > div {
  position: relative;
  height: 2.1rem;
}

.input--container.focus .fa i {
  color: #d01257;
}

.input--container.focus div h5 {
  top: -50%;
  font-size: 0.9rem;
}

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

.btn:hover {
  background-color: #fb90b7;
  color: #0f1021;
  letter-spacing: 8px;
  transition: 0.6s ease-in-out;
}

@media only screen and (max-width: 720px) {
  .login--page {
    flex-wrap: wrap;
  }
}
</style>
