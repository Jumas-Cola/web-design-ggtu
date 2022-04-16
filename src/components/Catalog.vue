<script setup>
import ProductCard from "./ProductCard.vue";
import Select from "./Select.vue";
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="content d-flex">
      <Select :items="filterItems" @change="typeHandler" />
    </div>
  </div>
  <div class="mt-4 d-flex justify-content-center">
    <div class="content d-flex justify-content-around row">
      <ProductCard
        v-for="card in displayCards"
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
  methods: {
    typeHandler(event) {
      if (event.target.value === "all") {
        this.displayCards = this.cards;
      } else {
        this.displayCards = this.cards.filter(
          (card) => card.type == event.target.value
        );
      }
    },
  },
  mounted() {
    this.displayCards = this.cards;
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
          value: "segway",
        },
      ],
      displayCards: [],
      cards: [
        {
          type: "scooter",
          image: "/img/catalog/electric_scooters/1.jpg",
          text: "Xiaomi Mijia Electric Scooter m187 Black черный",
          price: "20 480",
        },
        {
          type: "gyro",
          image: "/img/catalog/giroscooters/1.jpg",
          text: "Гироскутер Smart Balance 10 красный",
          price: "6 500",
        },
        {
          type: "segway",
          image: "/img/catalog/segways/1.jpg",
          text: "Сигвей Xiaomi Ninebot mini Pro Black черный",
          price: "31 480",
        },
        {
          type: "segway",
          image: "/img/catalog/segways/2.jpg",
          text: "Сигвей Xiaomi Ninebot mini Pro White белый",
          price: "31 480",
        },
        {
          type: "scooter",
          image: "/img/catalog/electric_scooters/2.jpg",
          text: "Электросамокат KUGOO S4 (8800mAh)",
          price: "13 480",
        },
        {
          type: "gyro",
          image: "/img/catalog/giroscooters/2.jpg",
          text: "Гироскутер Smart Balance Premium 10 цветные молнии",
          price: "10 990",
        },
      ],
    };
  },
};
</script>
