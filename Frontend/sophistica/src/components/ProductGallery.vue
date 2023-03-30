<template>
  <div>
    <div class="gallery--section">
      <div class="galleryImg--sm">
        <img
          id="smallImg"
          src="../assets/images--fashion/sandwinddress-2.jpg"
          alt="dress-2"
          onlick="showSmallImage(this);"
        />
        <img
          id="smallImg"
          src="../assets/images--fashion/sandwinddress-3.jpg"
          alt="dress-3"
          onlick="showSmallImage(this);"
        />
      </div>
      <div class="galleryImg--lg" v-for="product in products" :key="product">
        <img
          id="imageBox"
          :src="product.imgURL"
          alt="dress-1"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",

  methods: {
    showSmallImage(smallImg) {
      var fullImg = document.getElementById("imageBox");
      fullImg.src = smallImg.src;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.gallery--section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.galleryImg--sm {
  float: left;
}

.galleryImg--sm img {
  height: 5.75rem;
  margin: 1.6rem 0;
  cursor: pointer;
  display: block;
  opacity: 0.6;
}

.galleryImg--sm img:hover {
  opacity: 1;
}

.galleryImg--lg {
  height: 10.25rem;
  float: right;
  padding: 1.6rem;
}
</style>
