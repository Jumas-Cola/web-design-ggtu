<template>
  <div v-if="display" @click="goUp" class="go-up p-2 pb-3">
    <img src="/img/go_up.png" alt="Up" />
  </div>
</template>

<style scoped>
.go-up {
  position: fixed;
  bottom: 10px;
  right: 10px;
  background: #3d67b0;
  border-radius: 50%;
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      display: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll, true);
  },
  methods: {
    goUp() {
      window.scrollTo(0, 0);
    },
    onScroll(e) {
      if (window.pageYOffset > 1000) {
        this.display = true;
      } else {
        this.display = false;
      }
    },
  },
};
</script>
