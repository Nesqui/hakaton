<template>
  <div>
    <div class="container">
      <div class="login-wrapper row">
        <div class="col" v-on:keyup.enter="auth">
          <mdb-row>
            <mdb-col>
              <mdb-input label="Логин" v-model="fields.login" required />
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col  >
              <mdb-input type="email" label="Ваш пароль" v-model="fields.password" required />
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col class="d-flex justify-content-center">
              <mdb-btn  @click="auth">Войти</mdb-btn>
            </mdb-col>
          </mdb-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbRow, mdbCol, mdbBtn } from "mdbvue";
export default {
  data() {
    return {
      fields: {
        login: "",
        password: ""
      }
    };
  },
  methods: {
      auth() {
          this.$store.dispatch("auth", this.fields)
      }
  },
  components: {
    mdbInput,
    mdbRow,
    mdbCol,
    mdbBtn
  }
};
</script>

<style lang="less" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
}
</style>