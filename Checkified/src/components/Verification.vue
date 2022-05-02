<template>
  <div class="verification">
    <p>Social Security Number: {{ ssn }}</p>
    <input v-model="ssn" placeholder="Enter Social Security Number" />
    <p>First Name: {{ firstName }}</p>
    <input v-model="firstName" placeholder="Enter First Name" />
    <p>Last Name: {{ lastName }}</p>
    <input v-model="lastName" placeholder="Enter Last Name" />
    <p>Home Address: {{ homeAddress }}</p>
    <input v-model="homeAddress" placeholder="Enter Home Address" />
    <p>University: {{ uni }}</p>
    <input v-model="uni" placeholder="Enter University" />
    <p><button @click="verifyCandidate">Submit</button></p>
  </div>
</template>

<script>

import services from "@/api";

export default {
  data() {
    return {
      account: "",
      isConnected: false,
    };
  },
  watch: {
    "$store.state.dapp": {
      handler(val) {
        this.account = val.account;
        this.isConnected = val.isConnected;
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    connect() {
      window["aleereum"] && window["aleereum"].connect();
    },
    verifyCandidate() {
      services.candidateHandler().then(res => {
        console.log(res);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
