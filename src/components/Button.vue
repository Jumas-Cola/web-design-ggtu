<template>
  <button>{{ text }}</button>
</template>

<style scoped>
button {
  background: #3d67b0;
  border-radius: 50px;
  padding: 7px 40px 7px 40px;
  color: #ffffff;
}
</style>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
