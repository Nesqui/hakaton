<template>
  <div id="app">
    <div v-if="isAuth">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
    <loginPage v-else></loginPage>
  </div>
</template>

<script>
import loginPage from "./views/Login";
export default {
  components: {
    loginPage
  },
  computed: {
    isAuth() {return this.$store.getters.isAuth}
  }
};
</script>

<style>
</style>
