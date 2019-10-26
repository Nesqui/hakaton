<template>
  <div class="home">
    <div class="grid-map">
      <sidebar />
      <mdb-row>
        <mdb-col class="d-flex justify-content-center align-items-center flex-column">
          <strong>Зарплатный проект</strong>
          <img
            @click="openZpInfo"
            src="../assets/enterprise.svg"
            alt
            class="img-fluid objective-img my-2"
          />
          <div class="progress-wrapper">
            <mdb-progress
              :height="20"
              :max="currentZpTarget"
              :value="user.employees_amount"
              color="blue"
            ></mdb-progress>

            <img src="../assets/plus.svg" alt class="img-fluid" />
          </div>
          <p>{{user.employees_amount}}/{{currentZpTarget}}</p>
        </mdb-col>
        <mdb-col></mdb-col>
        <mdb-col></mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col></mdb-col>
        <mdb-col></mdb-col>
        <mdb-col></mdb-col>
      </mdb-row>

      <mdb-row>
        <mdb-col></mdb-col>
        <mdb-col></mdb-col>
        <mdb-col></mdb-col>
      </mdb-row>
    </div>
  </div>
</template>

<script>
// mdbBtn,
import {bus} from "../bus";
import { mdbRow, mdbCol, mdbProgress } from "mdbvue";
export default {
  name: "home",
  methods: {
    addUser() {
      this.$store.dispatch(`addUser`);
    },
    openZpInfo() {
      bus.$emit(`openZpInfo`);
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
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
    }
  },
  // mdbBtn,
  components: { mdbRow, mdbCol, mdbProgress }
};
</script>

<style lang="less" scoped>
.grid-map {
  height: 94vh;
  width: 100%;
  background: url(../assets/map.svg) no-repeat 0 0;
  background-size: cover;
  zoom: 0;
  .row {
    height: 33.333%;
  }
  .col {
    height: 100%;
    width: 33%;
    padding: 0 !important;
    margin: 0 !important;
    outline: 1px dashed grey;
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
        width: 5rem;
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
      border-radius: 50%;
      border: 3px solid rgba(141, 141, 245, 0.623);
      box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.192);
      height: 5rem;
      width: 5rem;
      cursor: pointer;
      transition: all 100ms;
      padding: 0.2rem;
      background-color: rgba(255, 255, 255, 0.685);
    }
    .objective-img:hover {
      transform: scale(1.1);
      transition: all 100ms;
    }
  }
}
</style>