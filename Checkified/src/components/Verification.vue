<template>
  <div class="verification">
    <p>Candidate Verification Form: Please fill out the form below to verify the certificate/degree of the candidate</p>
    <p>--------------------------------------------------------------------</p>
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
    <p><button @click="verifyCandidate(snn, firstName, lastName, homeAddress, uni)">Submit</button></p>
    <h1 v-show="!Success">{{ "NOPE!" }}</h1>
    <h1 v-show="Success">{{ "YUP!" }}</h1>
    <p>--------------------------------------------------------------------</p>
    <p>Candidate Verification Search: Enter the name </p>
    <p>--------------------------------------------------------------------</p>
  </div>
</template>

<script>

import services from "@/api";

export default {
  data() {
    return {
      ssn: "", 
      firstName: "", 
      lastName: "", 
      homeAddress: "", 
      uni: "",
      isConnected: false,
      Success: false,
    };
  },
  watch: {
    "$store.state.dapp": {
      handler(val) {
        this.ssn = val.ssn, 
        this.firstName = val.firstName, 
        this.lastName = val.lastName, 
        this.homeAddress = val.homeAddress, 
        this.uni = val.uni,
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
    verifyCandidate(snn, firstName, lastName, homeAddress, uni) {
      services.candidateHandler(snn, firstName, lastName, homeAddress, uni);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border-5 {
    border-width: 5px !important;
  }
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
