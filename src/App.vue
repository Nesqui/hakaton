<template>
  <div id="app">
    <div v-if="isAuth">
      <div class="row">
        <div class="col-lg-9">
          <topMenu></topMenu>
          <router-view />
        </div>
        <div class="col-lg-3">
        </div>
      </div>
    </div>
    <loginPage v-else></loginPage>
  </div>
</template>

<script>
import loginPage from "./views/Login";
import topMenu from "./views/TopMenu";
export default {
  components: {
    loginPage,
    topMenu
  },

  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
};
</script>

<style>
</style>
