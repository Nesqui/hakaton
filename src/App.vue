<template>
  <div id="app">
    <div v-if="isAuth">
      <topMenu></topMenu>
      <div class="row m-0">
        <div class="col-md-9 p-0 m-0">
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
    this.getTransactions();
  },
  methods: {
    getTargets() {
      this.$store.dispatch(`getTargets`);
    },
    getTransactions(){
      this.$store.dispatch(`getTransactions`);
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
};
</script>

<style lang="less">
@import (css)
  url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
body {
  background-color: #fafafa;
  overflow: hidden;
}

 .scroll-wrapper {
    max-height: 150px;
  }
  .scroll-navs {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 150px;
  }
  .scroll-navs::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(31, 4, 66, 0.3);
    border-radius: 15px ;
    background-color: #f8f8f8e3;
  }
  .scroll-navs::-webkit-scrollbar {
    width: 8px;
    border-radius: 15px;
    background-color: #2ed47a;
  }
  .scroll-navs::-webkit-scrollbar-thumb {
    background-color: #2ed47a;
    border: 1px solid #f0f0f0e3;
    border-radius: 15px;
  }
  

* {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
}
.cursor-pointer {
  cursor: pointer !important;
}
span.grey {
  background: #eaeaea !important;
  border-radius: 2px;
  font-weight: 300;
  font-size: 13px;
  line-height: 19px;
  padding: 0.25rem 0.75rem;
  text-transform: unset !important;
  z-index: 99;
}
strong {
  font-weight: 500;
}
.green-btn {
  background: #2ed47a;
  border-radius: 4px;
  padding: 3px 5px;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  white-space: nowrap;
  z-index: 99;
  cursor: pointer !important;
}

.toast {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10000;
  max-width: 100%;
  opacity: 0;
  transform: translate(75%, 0);
  border: unset;
  box-shadow: unset;
  background: unset;
  pointer-events: none;
  -webkit-transition: all 0.3s ease,
    transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -moz-transition: all 0.3s ease,
    transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.3s ease,
    transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s ease, transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.toast.displayed {
  opacity: 1;
  transform: translate(0, 0);
}
.toast > .body {
  position: relative;
  font-size: initial;
  margin: 0 1em 1em 1em;
  padding: 0.5em;
  word-wrap: break-word;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.9);
  pointer-events: all;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
.toast > .body.info {
  background: rgba(255, 245, 195, 0.9);
}
.toast > .body.warning {
  background: rgba(255, 183, 99, 0.9);
}
.toast > .body.warning > .icon {
  color: white;
}
.toast > .body.error {
  color: white;
  text-shadow: 0 0 1px black;
  background: rgba(255, 86, 86, 0.9);
}
.toast > .body.done {
  background: rgba(147, 255, 157, 0.9);
}
</style>
