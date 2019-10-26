<template>
<<<<<<< HEAD
  <div class="history-card">
=======
  <div class="history-card mt-3">
    <div class="row mb-4">
      <div class="col">
        <div class="d-flex justify-content-between align-items-center">
          <div class="bonus-title">
            <h3>Бонусы</h3>
            <p class="m-0">Обновлено вчера</p>
          </div>
          <div class="balance pr-2">
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
            <div class="market-button cursor-pointer">Потратить на привелегии</div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> ce754fe05c1118a0aaaabe1ddfae482d4d1f1128
    <mdb-card>
      <mdb-card-body>
        <mdb-card-text>
          <mdb-row>
            <mdb-col class="mb-3">История начисления бонусов</mdb-col>
          </mdb-row>
          <mdb-row
            class="d-flex history-card-li"
            v-for="(bonus, index) in user.history"
            :key="index"
          >
            <mdb-col class="d-flex flex-column" lg="12">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span>+{{bonus.bonus}} SibCoin {{` `}}</span>
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
                </div>
                <div>27.10.19</div>
              </div>
              <div>В компании теперь {{showDescription(bonus.bonus)}} сотрудников</div>
            </mdb-col>

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
.bonus-title {
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    /* identical to box height */

    letter-spacing: 0.01em;

    color: #6a707e;
  }
}
.history-card-li {
  border-bottom: 1px #ebeff2 solid;
  padding: 0.35rem 0;
  span {
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */
    letter-spacing: 0.01em;
    color: #2ed47a;
  }
}
.balance {
  text-align: end;
  border-bottom: 1px #ebeff2 solid;
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
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  margin-top: 0.55rem;
  padding: 5px;
  font-size: 11px;
  line-height: 1;
  background-color: #2ed47a;
  border-radius: 4px;
  color: white;
}
</style>