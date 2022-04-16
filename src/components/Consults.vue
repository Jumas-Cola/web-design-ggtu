<script setup>
import ConsultCard from "./ConsultCard.vue";
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="content d-flex justify-content-around row w-75">
      <ConsultCard
        v-for="consult in consults"
        :image="consult.image"
        :text="consult.text"
        :position="consult.position"
      />
    </div>
  </div>
</template>

<style scoped></style>

<script>
export default {
  components: {
    ConsultCard,
  },
  data() {
    return {
      consults: [
        {
          image: "/img/consultants/1.png",
          text: "Галина Петрова",
          position: "менеджер по продажам",
        },
        {
          image: "/img/consultants/2.png",
          text: "Галина Петрова",
          position: "менеджер по продажам",
        },
        {
          image: "/img/consultants/3.png",
          text: "Галина Петрова",
          position: "менеджер по продажам",
        },
      ],
    };
  },
};
</script>
