<template>
  <div>
    <div class="container">
      <div class="login-wrapper row">
        <div class="col">
          <mdb-row>
            <mdb-col>
              <mdb-input label="Логин" v-model="fields.name" required />
            </mdb-col>
          </mdb-row>
          <mdb-row>
            <mdb-col>
              <mdb-input type="email" label="Ваш пароль" v-model="fields.password" required />
            </mdb-col>
          </mdb-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbRow, mdbCol } from "mdbvue";
export default {
  data() {
    return {
      fields: {
        login: "",
        password: ""
      }
    };
  },
  components: {
    mdbInput,
    mdbRow,
    mdbCol
  }
};
</script>

<style lang="less" scoped>
.login-wrapper{
    display:flex;
    justify-content: center;
    height: 100vh;
    align-items:center;
}
</style>