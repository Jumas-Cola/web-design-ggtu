<script setup>
import ProductCard from "./ProductCard.vue";
import Select from "./Select.vue";
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="content d-flex">
      <Select :items="filterItems" />
    </div>
  </div>
  <div class="mt-4 d-flex justify-content-center">
    <div class="content d-flex justify-content-around row">
      <ProductCard
        v-for="card in cards"
        :image="card.image"
        :text="card.text"
        :price="card.price"
      />
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 75%;
}
</style>

<script>
export default {
  components: {
    ProductCard,
    Select,
  },
  data() {
    return {
      filterItems: [
        {
          key: "Все",
          value: "all",
        },
        {
          key: "Самокаты",
          value: "scooter",
        },
        {
          key: "Гироскутеры",
          value: "gyro",
        },
        {
          key: "Сигвеи",
          value: "segways",
        },
      ],
      cards: [
        {
          type: "scooter",
          image: "/img/catalog/electric_scooters/1.jpg",
          text: "Xiaomi Mijia Electric Scooter m187 Black черный",
          price: "20 480",
        },
        {
          type: "scooter",
          image: "/img/catalog/electric_scooters/1.jpg",
          text: "Xiaomi Mijia Electric Scooter m187 Black черный",
          price: "20 480",
        },
        {
          type: "scooter",
          image: "/img/catalog/electric_scooters/1.jpg",
          text: "Xiaomi Mijia Electric Scooter m187 Black черный",
          price: "20 480",
        },
        {
          type: "scooter",
          image: "/img/catalog/electric_scooters/1.jpg",
          text: "Xiaomi Mijia Electric Scooter m187 Black черный",
          price: "20 480",
        },
        {
          type: "scooter",
          image: "/img/catalog/electric_scooters/1.jpg",
          text: "Xiaomi Mijia Electric Scooter m187 Black черный",
          price: "20 480",
        },
        {
          type: "scooter",
          image: "/img/catalog/electric_scooters/1.jpg",
          text: "Xiaomi Mijia Electric Scooter m187 Black черный",
          price: "20 480",
        },
      ],
    };
  },
};
</script>
