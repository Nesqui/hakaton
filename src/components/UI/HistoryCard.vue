<template>
  <div class="history-card">
    <mdb-card>
      <mdb-card-body>
        <mdb-card-title>
          <h4>История бонусов</h4>
        </mdb-card-title>
        <mdb-card-text><mdb-row>
            <mdb-col lg="8" class="d-flex">
              <img src="@/assets/img/achievement.jpg" alt class="achievement-img" />
              <p>Бонус скидка на обслуживание счёта</p>
            </mdb-col>
            <mdb-col lg="4" class="date">26.10.19</mdb-col>
            <mdb-row><mdb-col>Вы совершили 50 транзакий</mdb-col></mdb-row>
          </mdb-row></mdb-card-text>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
import {
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbRow,
  mdbCol
} from "mdbvue";

export default {
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbRow,
    mdbCol
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