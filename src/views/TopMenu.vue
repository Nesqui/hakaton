<template>
  <div class="the-nav d-flex mb-1 py-2 justify-content-center justify-content-around">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <a @click="logout">Выйти</a>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch(`logout`);
    }
  }
};
</script>

<style scoped>
.the-nav {
  border-bottom: 1px solid black;
}
</style>