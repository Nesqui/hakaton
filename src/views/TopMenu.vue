<template>
  <div class="the-nav">
    <div class="d-flex w-100 justify-content-between pl-4 pr-2">
      <div class="d-flex align-items-center">
        <img
          v-if="user.avatar===`useravatar.jpg`"
          src="../assets/useravatar.jpg"
          class="img-fluid"
          alt
        />
        <img v-else src="../assets/useravatar.jpg" class="img-fluid" alt />
        <span>
          {{user.activity_type}}
          <strong>{{user.org_name}}</strong>
          <p>{{user.name}}</p>
        </span>
      </div>

      <!-- <span>Ваш логин: {{user.login}}</span> -->
      <span class="d-flex">
        Текущий счет: {{user.current_cash}}
        <img
          @click="addMoney"
          src="../assets/ruble.svg"
          alt
          class="img-fluid"
        />
      </span>
      <!-- <span class="d-flex">
          SC: {{user.sibCoins}}
          <img src="../assets/coins.svg" alt class="img-fluid" />
      </span>-->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },

    transactions() {
      return this.$store.state.transactions;
    }
  },
  methods: {
    addMoney() {
      this.$store.dispatch(`addMoney`).then(() => {
        for (let i = 0; i < this.transactions.length; i++) {
          const element = this.transactions[i];
          if (
            this.user.current_cash - 60000 < element.target &&
            this.user.current_cash > element.target
          ) {
            this.$store.dispatch(`createSuggest`);
            console.log(`DA`);
            
            break;
          }
        }
        this.$store.dispatch(`getUsers`);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.the-nav {
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  background: white;
  box-shadow: 0 2px 10px 3px rgba(128, 128, 128, 0.308);
  img {
    width: 46px;
    height: 46px;
  }
  span {
    font-style: normal;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
  }
  p {
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
}
span {
  border-right: 1px solid black;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  align-items: center;
  img {
    max-height: 1rem;
  }
}
span:last-child {
  border: 0;
}
</style>