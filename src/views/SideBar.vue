<template>
  <div class="sidebar">
    <mdb-row class="active-bonuses">
      <mdb-col>
        <h3>Активные бонусы</h3>
      </mdb-col>
    </mdb-row>
    <mdb-row class="history">
      <mdb-col>
        <h3>История бонусов</h3>
      </mdb-col>
      <mdb-col class="m-2">
        <historyCard />
      </mdb-col>
    </mdb-row>
    <div class="sidebar d-flex flex-column justify-content-between">
      <ul>
        <li>1</li>
      </ul>
      <a @click="logout">
        <div class="logout-btn">Выйти</div>
      </a>
    </div>
  </div>
</template>

<script>
import {bus} from "../bus"
import { mdbRow, mdbCol } from "mdbvue";
import historyCard from "@/components/UI/HistoryCard.vue";
export default {
  name: `sidebar`,
  data() {
    return {
      
    }
  },
  components: { mdbRow, mdbCol, historyCard },
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
  background-color: white;
  height: 100vh;
  position: absolute;
  .active-bonuses {
    margin: 0;
  }
  .history {
    display: flex;
    flex-direction: column;
    margin: 0;
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
}
</style>
