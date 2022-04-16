<script setup>
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
</script>

<template>
  <div class="slider mt-3 d-flex justify-content-around">
    <div ref="swiper" class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="card in cards">
          <div class="d-flex justify-content-center">
            <img :src="card?.image" class="card-img-top" :alt="card?.text" />
          </div>
          <div class="card-body d-block">
            <p class="card-text slider-card-text d-flex justify-content-center">
              {{ card?.text }}
            </p>
          </div>
        </div>
      </div>

      <div class="swiper-button-prev d-flex align-items-center"></div>
      <div class="swiper-button-next d-flex align-items-center"></div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  max-width: 11rem;
}

.swiper-button-prev {
  background-image: url("/img/slider/left.png") !important;
  background-size: 100% 100%;
  width: 50px;
  height: 50px;
}

.swiper-button-prev::after {
  content: none;
}

.swiper-button-next {
  background-image: url("/img/slider/right.png") !important;
  background-size: 100% 100%;
  width: 50px;
  height: 50px;
}

.swiper-button-next::after {
  content: none;
}

.slider-card {
  border: none;
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
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 4,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  data() {
    return {
      cards: [
        {
          image: "/img/advantages/4.png",
          text: "Быстрая доставка",
        },
        {
          image: "/img/advantages/3.png",
          text: "Гарантия качества",
        },
        {
          image: "/img/advantages/2.png",
          text: "Онлайн-консультант",
        },
        {
          image: "/img/advantages/1.png",
          text: "Большой ассортимент",
        },
      ],
    };
  },
};
</script>
