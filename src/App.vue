<template>
  <div id="app">
    <div v-if="isAuth">
      <div class="row m-0">
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
import sidebar from "./views/SideBar.vue";

export default {
  components: {
    loginPage,
    topMenu,
    sidebar
  },
  beforeMount() {
    this.getTargets();
  },
  methods: {
    getTargets() {
      this.$store.dispatch(`getTargets`);
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
};
</script>

<style>
body{
  background-color: #FAFAFA;
}
</style>
