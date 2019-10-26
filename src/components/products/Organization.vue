<template>
  <div>
    <h3>Зараплатный проект</h3>
    <p>
      Всего сотрудников:
      <span>{{user.employees_amount}}</span>
    </p>
    <p>
      До получения бонуса осталось:
      <span>{{currentZpTarget - user.employees_amount}}</span>
    </p>
    <p>
      Получено бонусов:
      <span>
    {{bounsesSumm}}</span>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    targets() {
      return this.$store.state.targets;
    },
    bounsesSumm() {
      let summ = 0;
      for (let i = 0; i < this.user.history.length; i++) {
        const element = this.user.history[i];
        summ += element.bonus;
      }
      return summ;
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
  }
};
</script>

<style>
</style>