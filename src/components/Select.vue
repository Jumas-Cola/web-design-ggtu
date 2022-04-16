<template>
  <select>
    <option v-for="item in items" value="item.value">{{ item.key }}</option>
  </select>
</template>

<style scoped>
select {
  background: #3d67b0;
  border-radius: 50px;
  padding: 8px 20px 8px 20px;
  color: #ffffff;
  text-align: center;
}
</style>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>
