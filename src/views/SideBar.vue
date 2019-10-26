<template>
  <div class="sidebar">
    <mdb-row>
      <mdb-col>
        <ul>
          <li>1</li>
        </ul>
      </mdb-col>
    </mdb-row>
    <mdb-row>
      <mdb-col>
        <h2>История</h2>
      </mdb-col>
      <mdb-col>
        <historyCard />
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import { mdbRow, mdbCol } from "mdbvue";
import historyCard from "@/components/UI/HistoryCard.vue";
export default { components: mdbRow, mdbCol, historyCard };
</script>

<style scoped lang="less">
.sidebar {
  background-color: #0e3263;
  color: white;
  height: 100vh;
  position: absolute;
  width: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
}
</style>
