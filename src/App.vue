<template>
  <div id="app">
    <div v-if="isAuth">
      <div class="row">
        <div class="col-md-9 p-0 m-0">
          <topMenu></topMenu>
          <router-view />
        </div>
        <div class="col-md-3 p-0 m-0">
          <sidebar></sidebar>
        </div>
      </div>
    </div>
    <loginPage v-else></loginPage>
  </div>
</template>

<script>
import loginPage from "./views/Login";
import topMenu from "./views/TopMenu";
import sidebar from "@/views/SideBar.vue";

export default {
  components: {
    loginPage,
    topMenu,
    sidebar
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
