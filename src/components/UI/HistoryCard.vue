<template>
  <div class="history-card">
    <mdb-card>
      <mdb-card-body>
        <mdb-card-text>
          <mdb-row>
            <mdb-col class="history-card-li">История начисления бонусов</mdb-col>
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
              <div class="market-button">Потратить на привелегии</div>
            </mdb-col>
          </mdb-row>
          <mdb-row
            class="d-flex history-card-li"
            v-for="(bonus, index) in user.history"
            :key="index"
          >
            <mdb-col
              class="d-flex"
              lg="8"
            >+ {{bonus.bonus}} SibCoin В компании теперь {{showDescription(bonus.bonus)}} сотрудников</mdb-col>
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
    targets() {
      return this.$store.state.targets;
    },
    currentZpTarget() {
      return this.user.employees_amount <= 5
        ? this.targets[`zp`][0]["max"]
        : this.user.employees_amount <= 10
        ? this.targets[`zp`][1]["max"]
        : this.user.employees_amount <= 25
        ? this.targets[`zp`][2]["max"]
        : this.user.employees_amount <= 50
        ? this.targets[`zp`][3]["max"]
        : this.user.employees_amount <= 99
        ? this.targets[`zp`][4]["max"]
        : this.user.employees_amount <= 100
        ? this.targets[`zp`][5]["max"]
        : `max`;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    showDescription(bonus) {
      for (let index = 0; index < this.targets["zp"].length; index++) {
        const element = this.targets["zp"][index];
        if (+element.bonus === +bonus) {
          return element.max;
        }
      }
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
.market-button {
  text-align: left;
  margin: 1rem;
  padding: 5px;
  font-size: 11px;
  line-height: 1;
  background-color: #2ed47a;
  border-radius: 4px;
  color: white;
}
</style>