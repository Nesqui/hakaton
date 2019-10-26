<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>
            123
<<<<<<< HEAD
            <mdb-btn>123</mdb-btn><sidebar/>
=======
            <mdb-btn @click="addUser">123</mdb-btn>
>>>>>>> c0dbe8d669157e23f531d1a870bcd27a0d70e08b
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";
import sidebar from '@/components/UI/SideBar.vue'
export default {
  name: "home",
  methods: {
    addUser() {
      this.$store.dispatch(`addUser`);
    }
  },
  components: { mdbBtn, sidebar }
}
</script>
