<template>
  <div class="card d-flex justify-content-center col-sm-4 col-md-3 m-2">
    <img class="card-img-top mt-3" :src="image" :alt="text" />
    <div class="m-2">
      <h5 class="card-title">{{ text }}</h5>
      <p class="card-text">{{ price }} р.</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #c4c4c4;
}
.card-img-top {
  width: 95%;
  align-self: center;
}
.card-title {
  text-align: center;
}
.card-text {
  color: #ffffff;
  font-weight: 700;
  text-align: center;
}
</style>

<script>
export default {
  props: {
    type: String,
    image: String,
    text: String,
    price: String,
  },
};
</script>
