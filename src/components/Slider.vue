<template>
  <div class="slider mt-3 d-flex justify-content-around">
    <div class="d-flex align-items-center">
      <img src="src/assets/img/slider/left.png" alt="" class="slider-arrow" />
    </div>

    <div class="card slider-card" style="width: 10rem" v-for="card in cards">
      <img :src="card?.image" class="card-img-top" :alt="card?.text" />
      <div class="card-body">
        <p class="card-text slider-card-text d-flex justify-content-center">
          {{ card?.text }}
        </p>
      </div>
    </div>

    <div class="d-flex align-items-center">
      <img src="src/assets/img/slider/right.png" alt="" class="slider-arrow" />
    </div>
  </div>
</template>

<style scoped>
.slider-card {
  border: none;
}

.slider-arrow {
  height: 50px;
}

.slider-card-text {
  text-transform: uppercase;
  color: #3d67b0;
  font-weight: 700;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "/src/assets/img/advantages/4.png",
          text: "Быстрая доставка",
        },
        {
          image: "/src/assets/img/advantages/3.png",
          text: "Гарантия качества",
        },
        {
          image: "/src/assets/img/advantages/2.png",
          text: "Онлайн-консультант",
        },
        {
          image: "/src/assets/img/advantages/1.png",
          text: "Большой ассортимент",
        },
      ],
    };
  },
};
</script>
