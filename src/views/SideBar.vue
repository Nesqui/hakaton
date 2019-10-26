<template>
  <div class="sidebar d-flex justify-content-between flex-column">
    <div>
      <a
        v-if="currentObjective"
        class="full-w-btn d-flex justify-content-center"
        @click="currentObjective = ``"
      >Назад</a>
      <mdb-row class="active-bonuses">
        <mdb-col v-if="false">
          <h3>Активные бонусы</h3>
        </mdb-col>
        <mdb-col v-if="currentObjective===`zpInfo`">
          <organizationCard></organizationCard>
        </mdb-col>
      </mdb-row>
      <mdb-row class="history">
        <mdb-col>
          <h3>Бонусы</h3>
        </mdb-col>
        <mdb-col class="m-2">
          <historyCard />
        </mdb-col>
      </mdb-row>
    </div>
    <div class="d-flex justify-content-center full-w-btn">
      <a @click="logout">Выйти</a>
    </div>
  </div>
</template>

<script>
import { bus } from "../bus";
import { mdbRow, mdbCol } from "mdbvue";
import organizationCard from "../components/products/Organization";
import historyCard from "@/components/UI/HistoryCard.vue";
export default {
  name: `sidebar`,
  data() {
    return {
      currentObjective: {}
    };
  },
  components: { mdbRow, mdbCol, historyCard, organizationCard },
  methods: {
    logout() {
      this.$store.dispatch(`logout`);
    },
    showZpInfo() {}
  },

  beforeMount() {
    bus.$on(`openZpInfo`, payload => {
      this.currentObjective = payload;
    });
  }
};
</script>

<style scoped lang="less">
.sidebar {
  background-color: white;
  height: 100vh;
  h3{
    color: #109CF1;
  }
  .active-bonuses {
    margin: 0;
  }
  .history {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 25vw;
    right: 0;
    background: #eafbf2;
  }
  .full-w-btn {
    width: 100%;
    display: block;
    justify-content: center;
    background-color: rgba(204, 204, 204, 0.349);
    padding: 0.45rem 0;
    cursor: pointer;
  }
}
</style>
