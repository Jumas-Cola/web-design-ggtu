<script setup>
import Button from "./Button.vue";
</script>

<template>
  <form class="p-5 pt-3 pb-3 w-100 text-white">
    <h5 class="text-center">Подпишитесь на наши новости</h5>
    <div class="mb-3">
      <div class="mb-3">
        <label for="newsFormName" class="form-label">Имя</label>
        <input
          type="text"
          class="form-control"
          id="newsFormName"
          placeholder="Введите имя"
        />
      </div>
      <label for="newsFormEmail" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="newsFormEmail"
        placeholder="Введите email"
      />
    </div>

    <div class="d-flex justify-content-center">
      <Button type="submit" class="btn btn-primary" text="Подписаться" />
    </div>
  </form>
</template>

<style scoped>
form {
  background: #6e95d8;
}
</style>

<script>
export default {
  components: {
    Button,
  },
  props: {
    text: String,
  },
};
</script>
