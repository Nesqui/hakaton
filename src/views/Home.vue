<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>123</h1>
          <button @click="addUser">test</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    addUser() {
      this.$store.dispatch(`addUser`);
    }
  }
};
</script>
