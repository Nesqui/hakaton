<template>
  <div class="sidebar">
    <mdb-row class="active-bonuses">
      <mdb-col><h3>Активные бонусы</h3>
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
  </div>
</template>

<script>
import { mdbRow, mdbCol } from "mdbvue";
import historyCard from "@/components/UI/HistoryCard.vue";
export default { components: { mdbRow, mdbCol, historyCard } };
</script>

<style scoped lang="less">
.sidebar {
  background-color: white;
  height: 100vh;
  position: absolute;
  width: 100%;
  right: 0;
.active-bonuses{
  margin: 0;
}
  .history {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
}
</style>
