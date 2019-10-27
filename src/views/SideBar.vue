<template>
  <div class="sidebar d-flex justify-content-between flex-column">
    <div>
      <a
        v-if="currentObjective"
        class="full-w-btn d-flex justify-content-center"
        @click="currentObjective = ``"
      >Назад</a>
      <div class="row">
        <div v-if="suggests" class="col animated fadeIn ">
          <div class="suggest aqua-gradient py-2 px-4">
            <h3>Вам скидка на последующие платежи</h3>
            <p>
              Скидка на следущие 3 платежа. Истечет через 3 дня.
              <b>Воспользоваться предложением</b>
            </p>
          </div>
        </div>
      </div>
      <mdb-row class="active-bonuses">
        <mdb-col v-if="!currentObjective">
          <achivments></achivments>
        </mdb-col>
        <mdb-col v-if="currentObjective===`zpInfo`">
          <organizationCard></organizationCard>
        </mdb-col>
      </mdb-row>
      <mdb-row class="history">
        <mdb-col class="m-2">
          <historyCard />
        </mdb-col>
      </mdb-row>
    </div>
    <a class="text-center full-w-btn" @click="logout">Выйти</a>
  </div>
</template>

<script>
import { bus } from "../bus";
import { mdbRow, mdbCol } from "mdbvue";
import organizationCard from "../components/products/Organization";
import achivments from "../views/achivments/achievments";
import historyCard from "@/components/UI/HistoryCard.vue";
export default {
  name: `sidebar`,
  data() {
    return {
      currentObjective: null
    };
  },
  computed: {
    suggests() {
      return this.$store.state.user.suggests;
    }
  },
  components: { mdbRow, mdbCol, historyCard, organizationCard, achivments },
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
  height: 92vh;
  .suggest {
    h3 {
      font-size: 18px;
      color:black;
    }
    p {
      color:rgb(37, 37, 37);
    }
  }
  h3 {
    color: #109cf1;
  }
  .active-bonuses {
    margin: 0;
  }
  .history {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 100%;
    right: 0;
    background: #eafbf2;
  }
  .full-w-btn {
    background-color: rgba(204, 204, 204, 0.349);
    padding: 0.45rem 0;
    cursor: pointer;
  }
}
</style>
