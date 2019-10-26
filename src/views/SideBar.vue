<template>
  <div class="sidebar d-flex flex-column justify-content-between">
    <ul>
      <li>1</li>
    </ul>
    <a @click="logout">
      <div class="logout-btn">Выйти</div>
    </a>
  </div>
</template>

<script>
import {bus} from "../bus"
export default {
  name: `sidebar`,
  data() {
    return {
      
    }
  },
  methods: {
    logout() {
      this.$store.dispatch(`logout`);
    },
    showZpInfo() {

    }
  },
  beforeMount() {
    bus.$on(`openZpInfo`, this.showZpInfo)
  },
};
</script>

<style scoped lang="less">
.sidebar {
  background-color: #0e3263;
  color: white;
  height: 100vh;
  position: absolute;
  width: 25vw;
  right: 0;
  .logout-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(204, 204, 204, 0.349);
    padding: 0.75rem 0;
    cursor: pointer;
  }
}
</style>
