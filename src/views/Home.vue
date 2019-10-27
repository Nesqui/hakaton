<template>
  <div class="home">
    <div class="grid-map">
      <sidebar />
      <mdb-row>
        <mdb-col class="d-flex justify-content-center align-items-center flex-colimn animated slow fadeInDown">
          <div class="pl-5 pt-5">
            <div class="d-flex">
              <img src="../assets/ekvairing.svg" alt class="img-fluid objective-img ml-5 my-2" />
            </div>
            <div class="card-objective ml-5">
              <h4>Экваиринг</h4>
              <mdb-progress :height="2" :value="13" color="blue"></mdb-progress>
            </div>
          </div>
        </mdb-col>
        <mdb-col></mdb-col>
        <mdb-col class="d-flex justify-content-center align-items-center flex-colimn animated slow fadeInDown">
          <div class="pl-5 pt-5">
            <div class="d-flex">
              <img src="../assets/invest.svg" alt class="img-fluid objective-img ml-5 my-2" />
            </div>
            <div class="card-objective ml-5">
              <h4>Инвестиции</h4>
              <mdb-progress :height="2" :value="55" color="blue"></mdb-progress>
            </div>
          </div>
        </mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col class="d-flex justify-content-center align-items-center flex-colimn animated slow fadeInDown">
          <div class="pt-5 mt-5 mr-5">
            <div class="d-flex">
              <img src="../assets/inkasaciya.svg" alt class="img-fluid objective-img mr-5" />
            </div>
            <div class="card-objective mr-5">
              <h4>Инкасация</h4>
              <mdb-progress :height="2" :value="13" color="blue"></mdb-progress>
            </div>
          </div>
        </mdb-col>
        <mdb-col class="d-flex justify-content-center align-items-center flex-colimn animated slow fadeInDown">
          <div class="d-flex">
            <img
              @click="openZpInfo"
              src="../assets/team.svg"
              alt
              class="img-fluid objective-img my-2"
            />
            <mdb-card>
              <mdb-card-body class="pt-3 px-3 pb-3">
                <mdb-card-title>Зарплатный проект</mdb-card-title>
                <div class="progress-wrapper">
                  0
                  <mdb-progress
                    :height="2"
                    :max="currentZpTarget"
                    :value="user.employees_amount"
                    color="blue"
                    class="mx-1"
                  ></mdb-progress>
                  {{currentZpTarget}}
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between">
                  <div>
                    <span class="grey">{{user.employees_amount}}</span> Количество сотрудников
                  </div>
                  <mdb-btn
                    @click.native="addStaff"
                    class="green-btn cursor-pointer"
                    :disabled="disabledButton"
                  >Добавить</mdb-btn>
                </div>
              </mdb-card-body>
            </mdb-card>
          </div>
        </mdb-col>
        <mdb-col></mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col></mdb-col>
        <mdb-col class="d-flex justify-content-center align-items-center flex-column animated slow fadeInDown">
          <div class="d-flex">
            <img src="../assets/bank.svg" alt class="img-fluid objective-img" />
          </div>
          <div class="card-objective">
              <h4>Банк. гарантия</h4>
              <mdb-progress :height="2" :value="13" color="blue"></mdb-progress>
            </div>
        </mdb-col>
        <mdb-col class="d-flex justify-content-center align-items-center flex-column">
          <div class="d-flex">
            <img src="../assets/lising.svg" alt class="img-fluid objective-img" />
          </div>
          <div class="d-flex align-items-center">
            <mdb-btn class="green-btn">Подключить лизинг</mdb-btn>
            
          </div>
        </mdb-col>
      </mdb-row>
    </div>
  </div>
</template>

<script>
// mdbBtn,
import { bus } from "../bus";
import {
  mdbRow,
  mdbCol,
  mdbProgress,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbBtn
} from "mdbvue";
export default {
  name: "home",
  data() {
    return {
      disabledButton: false
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch(`addUser`);
    },
    openZpInfo() {
      bus.$emit(`openZpInfo`, `zpInfo`);
    },
    addStaff() {
      this.disabledButton=true
      this.$store.dispatch(`addStaff`).then(() => {
        this.$store.dispatch(`getUsers`).then(() => {
          for (let i = 0; i < this.targets[`zp`].length; i++) {
            const element = this.targets[`zp`][i];
            if (+element.max === +this.user[`employees_amount`]) {
              this.$store.dispatch(`addZpHistory`, element.bonus);
              break;
            }
          }
        });
      });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    targets() {
      return this.$store.state.targets;
    },
    transactions(){
      return this.$store.state.transactions
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
    }
  },
  // mdbBtn,
  components: {
    mdbRow,
    mdbCol,
    mdbProgress,
    mdbCard,
    mdbCardBody,
    mdbCardTitle,
    mdbBtn
  },
  beforeMount() {
    bus.$on("recieved", () =>
    {
      this.disabledButton = false
    })
  }
};
</script>

<style lang="less" scoped>
.grid-map {
  height: 92vh;
  width: 75vw;
  background: url(../assets/map.svg) no-repeat 0 0;
  background-size: cover;
  zoom: 0;
  .card {
    white-space: nowrap;
    position: absolute;
    z-index: 98;
    left: 21rem;
    top: 7.5rem;
    h4 {
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
    }
  }
  .row {
    height: 33.333%;
    margin: 0;
    padding: 0;
  }
  .col {
    height: 100%;
    width: 33%;
    padding: 0 !important;
    margin: 0 !important;
    p {
      color: black;
      font-weight: 500;
      text-align: center;
      margin-bottom: 0;
    }
    .progress-wrapper {
      display: flex;
      align-items: center;

      .progress {
        width: 100%;
        border-radius: 0.25rem 0 0 0.25rem;
        box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.192);
      }
      img {
        margin-left: -2px;
        height: 20px;
        width: 20px;
        box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.192);
        cursor: pointer;
      }
    }
    .objective-img {
      height: 11rem;
      width: 11rem;
      cursor: pointer;
      transition: all 100ms;
      padding: 0.2rem;
    }
    .objective-img:hover {
      transform: scale(1.1);
      transition: all 100ms;
    }
  }
  .card-objective {
    background: #ffffff;
    border-radius: 3px;
    padding: 0.4rem 1rem 0.6rem 1rem;
    width: 11rem;
    h4 {
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      letter-spacing: 0.01em;
    }
  }
}
</style>