<template>
  <div class="the-nav">
    <div class="d-flex flex-start">
      <div class="d-flex px-2">
        <span>
          <strong>{{user.org_name}}</strong>
        </span>
        <span>Ваш логин: {{user.login}}</span>
        <span class="d-flex">
           Текущий счет: {{user.current_cash}} <img src="../assets/ruble.svg" alt class="img-fluid" />
        </span>
        <span class="d-flex">
           SC: {{user.sibCoins}} <img src="../assets/coins.svg" alt class="img-fluid" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style lang="less" scoped>
.the-nav {
  width: 100%;
  height: 6vh;
  box-shadow: 0 2px 10px 3px rgba(128, 128, 128, 0.308);
}
span {
  border-right: 1px solid black;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  align-items: center;
  img {
    max-height: 1rem;
    margin-left: .5rem;
  }
}
span:last-child {
  border: 0;
}
</style>