<template>
  <div class="card d-flex justify-content-center col-md-3">
    <img class="card-img-top" :src="image" :alt="text" />
    <div class="m-2">
      <h5 class="card-title text-center">{{ text }}</h5>
      <p class="card-text text-center">{{ position }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none;
}
.card-title {
  font-weight: 700;
}
.card-text {
  color: #3d67b0;
}
</style>

<script>
export default {
  props: {
    image: String,
    text: String,
    position: String,
  },
};
</script>
