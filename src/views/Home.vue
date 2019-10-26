<template>
  <div class="home">
    <mdb-container>
      <sidebar />
      <mdb-row>
        <mdb-col>
          <h1>
            123
            <mdb-btn @click="addUser">123</mdb-btn>
          </h1>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbBtn, mdbContainer, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "home",
  methods: {
    addUser() {
      this.$store.dispatch(`addUser`);
    }
  },
  components: { mdbBtn, mdbContainer, mdbRow, mdbCol }
};
</script>
