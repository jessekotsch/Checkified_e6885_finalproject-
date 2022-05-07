<template>
  <div class="institutionHandler">
    <p>
      Institution Verification Form: Please fill out the form below to verify the
      certificate/degree of the candidate
    </p>
    <p>--------------------------------------------------------------------</p>
    <p>University: {{ uni }}</p>
    <input v-model="uni" placeholder="Enter University" />
    <p>Social Security Number: {{ ssn }}</p>
    <input v-model="ssn" placeholder="Enter Social Security Number" />
    <p>Degree Name: {{ degreeName }}</p>
    <input v-model="degreeName" placeholder="Enter Degree Name" />
    <p>Major: {{ major }}</p>
    <input v-model="major" placeholder="Enter Major" />
    <p>Year: {{ year }}</p>
    <input v-model="year" placeholder="Enter Year" />
    <p>
      <button
        @click="verifyCandidate(ssn, firstName, lastName, homeAddress, uni)"
      >
        Submit
      </button>
    </p>
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
        (this.ssn = val.ssn),
          (this.firstName = val.firstName),
          (this.lastName = val.lastName),
          (this.homeAddress = val.homeAddress),
          (this.uni = val.uni),
          (this.isConnected = val.isConnected);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    connect() {
      window["aleereum"] && window["aleereum"].connect();
    },
    verifyCandidate(ssn, firstName, lastName, homeAddress, uni) {
      services.candidateHandler(ssn, firstName, lastName, homeAddress, uni);
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
