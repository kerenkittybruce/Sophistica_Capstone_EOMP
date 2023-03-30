<template>
  <div class="con-form">
    <form action="https://formspree.io/f/xeqwrovd" method="POST">
      <div class="form--card">
        <h2>Contact Us</h2>
        <p>We would love to hear from you !</p>
        <div class="form--input">
          <label for="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="Enter your first name ."
            required="required"
          />
        </div>
        <div class="form--input">
          <label for="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Enter your last name ."
            required="required"
          />
        </div>
        <div class="form--input">
          <label for="email">E-mail</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your primary email address ."
            required="required"
          />
        </div>
        <div class="form--input">
          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="6"
            placeholder="How can we help you ? Tell us and we'll get back to you as soon as possible ."
          ></textarea>
        </div>
        <div class="button send-btn">
          <button>Send</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SophisticaContactForm",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
body {
  margin: 3%;
  padding: 3.6%;
  width: 100%;
  background-image: url("https://i.postimg.cc/DzDZ02ts/pexels-atc-comm-photo-3732383.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.con-form {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 3%;
}

.form--card {
  background-color: #ffcee4;
  color: #1f1021;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  padding: 2%;
  border-radius: 1.5rem;
}

h2 {
  font-family: "Eagle Lake", monospace;
  font-weight: bolder;
  font-size: 3rem;
  margin-bottom: 2%;
}

p {
  font-family: "Work sans", monospace;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 2%;
}

.form--input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2%;
}

label {
  font-family: "Work sans", monospace;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.5%;
}

input,
textarea {
  border: 2px solid #0f1021;
  border-radius: 1.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  padding: 2%;
  font-size: 1rem;
  font-family: "Work sans", monospace;
}

.send-btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  width: 50%;
}
</style>
