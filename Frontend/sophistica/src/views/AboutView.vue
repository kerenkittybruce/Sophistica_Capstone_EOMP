<template>
  <div id="about">
    <div class="intro">
      <hr class="hr--words" data-content="About Us" />
      <div class="intro--para">
        <div class="intro--quote">
          "You don't have to fly to be able to push your own boundaries ."
          <br />
          <span>— Iris Van Herpen</span>
        </div>
        <br />
        <div class="about--img-01">
          <img
            src="https://i.postimg.cc/Pf0tkL0y/hellogirl.png"
            alt="boutique-shop"
            v-animate-onscroll.repeat="{ down: 'swing', up: 'swing' }"
          />
        </div>
      </div>
      <br />
      <br />
      <hr class="h1--about" />
      <br />
      <br />
      <div class="about--content">
        <div class="about--para">
          <p>
            <i><b>Sophistica</b></i> was established in Cape Town in 1982,
            specialising in exclusive luxury women's clothing . The magnificent
            <i><b>Sophistica</b></i> label has won numerous awards (as well as
            the hearts of women everywhere) while also participating in various
            elite fashion shows .
          </p>
          <br />
          <p>
            We are proud to have launched our very own online store in 2018 .
          </p>
          <br />
          <p>
            The <i><b>Sophistica</b></i> brand continues to offer amazing
            personal service in-store and online, providing quality garments —
            some locally produced and others imported internationally — with a
            fantastic team of people who have years of experience in retail
            under their belts .
          </p>
          <br />
          <p>
            Passionate about improving the state of our economy,
            <i><b>Sophistica</b></i> entered the import/export market in 1997
            with our close friends within the belly of the fashion industry .
          </p>
          <br />
          <p>
            All our collections are tried and tested, practical and makes
            packing for travel easy . All our items compliment any body type
            beautifully as they are designed to flatter all figures . To ensure
            that our items are to your standard, you can have your measurements
            done , or have adjustments done to your specifications . All
            measurements and sizing is done in-store, or you can contact us and
            let us know what you need .
          </p>
          <br />
          <p>
            We are well-known for our range of exclusive designer fashion, with
            new styles and collections being added every season . Feel welcome
            to contact us whenever you're curious about a new collection .
          </p>
          <br />
          <p>
            We maintain a pleasant relationship with our clients and business
            associates to bring you the most authentic and most passionate
            service .
          </p>
          <br />
          <p>
            We work with some of most wonderful well-known designers ranging
            from fast fashion to haute couture . We have even featured magical
            pieces from some of Iris Van Herpen's collections .
          </p>
          <div class="button--link">
            <router-link to="/contact" custom v-slot="{ navigate }"
              ><button @click="navigate" role="link">
                Find Out More
              </button></router-link
            >
          </div>
        </div>
        <div
          class="about--img-02"
          v-animate-onscroll.repeat="{ down: 'swing', up: 'swing' }"
        >
          <img
            src="https://i.postimg.cc/pXynsnzB/pinkshop.jpg"
            alt="pink-boutique"
          />
        </div>
      </div>
    </div>
  </div>
  <SophisticaFooterComponent />
</template>

<script>
import SophisticaFooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "AboutView",
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
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

#about {
  margin-top: 0.2%;
  padding: 3%;
  background-color: #fb90b7;
  text-align: center;
}

.hr--words {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: #0f1021;
  font-family: "Work sans", monospace;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 2%;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
}

.hr--words:before {
  content: "";
  background: linear-gradient(to right, transparent, #0f1021, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}

.hr--words:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: #0f1021;
  padding: 0 0.8em;
  line-height: 1.5em;
  background-color: #ffcee4;
}

.intro--quote {
  font-family: "Eagle Lake", monospace;
  font-size: 3.5rem;
  font-weight: bolder;
}

.intro--para span {
  margin-top: -3%;
  font-size: 1.2rem;
}

.about--img-01 {
  display: block;
  margin-top: 2%;
  margin-bottom: 3%;
  margin-left: auto;
  margin-right: auto;
  width: 76%;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
}

.h1--about {
  background: linear-gradient(to right, transparent, #d01257, transparent);
  padding: 0;
  margin: 1%;
  border: 0;
  height: 3px;
  line-height: 1.5em;
}

.about--content {
  display: flex;
  align-items: center;
  grid-template-columns: 2fr 2fr 2fr;
  column-gap: 6px;
  margin-left: auto;
  margin-right: auto;
  padding: 3.2%;
  background-color: #ffcee4;
  border-radius: 1.5rem;
  width: 100%;
}

.about--para {
  font-family: "Work sans", monospace;
  font-weight: 400;
  text-align: center;
  font-size: 1.2rem;
  margin: 3%;
  padding: 2% 3%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

/* ---------- BUTTON ---------- */

button {
  margin: 3%;
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

.about--img-02 {
  width: 50%;
  height: 20%;
  border-radius: 1.5rem;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.325);
}

/* ---------- MEDIA QUERIES ---------- */

@media only screen and (max-width: 880px) {
  #about {
    margin-top: 0.475%;
  }
  .intro--quote {
    display: flex;
    flex-wrap: wrap;
    font-size: 2.2rem;
  }

  .intro--para span {
    margin-top: 3%;
    font-size: 1rem;
  }
  .about--content {
    display: flex;
    flex-wrap: wrap;
  }

  .about--para {
    width: 80%;
  }

  .about--img-02 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
}
</style>
