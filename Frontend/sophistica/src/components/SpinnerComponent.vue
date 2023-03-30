<template>
  <div class="inline">
    <!-- <font-awesome-icon icon=" fa-spinner" spin-pulse size="sm" style="--fa-primary-color: #d01257; --fa-primary-opacity: 4; --fa-secondary-color: #fb90b7; --fa-secondary-opacity: 0.3;" /> -->

    <p class="spinner" id="spinner">
      <i
        class="fa fa-duotone fa-spinner fa-5x"
        spin-pulse
        size="sm"
        style="
          --fa-primary-color: #d01257;
          --fa-primary-opacity: 4;
          --fa-secondary-color: #fb90b7;
          --fa-secondary-opacity: 0.3;
        "
      ></i>
    </p>
  </div>
</template>

<script>
document.onreadystatechange = loader() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#spinner").style.visibility = "visible";
    } else {
        document.querySelector("#spinner").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};
export default {
  name: "SpinnerComponent",
};
</script>

<style scoped>
#spinner {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.inline {
  display: flex;
}

.spinner i {
  margin-top: 10px;
  margin-left: 50px;
}
</style>
