<template>
  <div class="history-card">
    {{this.user }}
    <mdb-card>
      <mdb-card-body>
        <mdb-card-text>
          <mdb-row>
            <mdb-col class="history-card-li" lg="8  ">История начисления бонусов</mdb-col>
            <mdb-col class="balance">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="9" fill="#FFCC6A" />
                <circle cx="9" cy="9" r="7" fill="#FFE073" />
                <path
                  d="M9 4L10.1226 7.45492H13.7553L10.8164 9.59017L11.9389 13.0451L9 10.9098L6.06107 13.0451L7.18364 9.59017L4.24472 7.45492H7.87743L9 4Z"
                  fill="#50B447"
                />
              </svg>
              {{this.user.sibCoins}} SibCoins
              <mdb-btn>Потратить на привелегии</mdb-btn>

            </mdb-col>
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
import { mdbCard, mdbCardBody, mdbCardText, mdbRow, mdbCol,mdbBtn } from "mdbvue";

export default {
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardText,
    mdbRow,
    mdbCol,
    mdbBtn
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