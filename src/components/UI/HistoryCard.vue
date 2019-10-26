<template>
  <div class="history-card">
      {{this.user   }}
    <mdb-card>
      <mdb-card-body>
        <mdb-card-text>
          <mdb-row>
            <mdb-col class="history-card-li" lg="8  ">История начисления бонусов</mdb-col>
            <mdb-col class="balance">{{this.user.sibCoins}}</mdb-col>
          </mdb-row>
          <mdb-row
            class="d-flex history-card-li"
            v-for="(bonus, index) in user.history"
            :key="index"
          >
            <mdb-col class="d-flex" lg="8">Вы получили {{bonus.bonus}} бонусов</mdb-col>
            <mdb-col class="date" lg="4">27.10.19</mdb-col>
           
            <mdb-col></mdb-col>
          </mdb-row>
        </mdb-card-text>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import { mdbCard, mdbCardBody, mdbCardText, mdbRow, mdbCol } from "mdbvue";

export default {
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardText,
    mdbRow,
    mdbCol
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped lang="less">
h4 {
  margin: 5px;
  font-size: 15px;
}
.history-card {
  margin: 0;
  p {
    color: #0e3263;
    font-size: 13px;
  }
}
.history-card-li {
  border-bottom: 1px;
  border-block-end-style: solid;
}
.balance {
  text-align: end;
  border-bottom: 1px;
  border-block-end-style: solid;
}
.achievement-img {
  border-radius: 50%;
  height: 25px;
  width: 25px;
}
.date {
  font-size: 13px;
  color: #4c5862;
}
</style>