<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>
            123
            <mdb-btn>123</mdb-btn>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";

export default {
  name: "home",
  methods: {
    addUser() {
      this.$store.dispatch(`addUser`);
    }
  },
  components: { mdbBtn }
}
</script>
