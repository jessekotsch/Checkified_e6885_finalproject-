<template>
  <div class="Candidate">
    <img id="bg" src="../assets/CheckifiedLogo.png" />
    <p>
      Candidate Verification Form: Please fill out the form below. <br />
      Degrees/Certificates can be verified by institutions after you have filled
      out this form.
    </p>
    <p>--------------------------------------------------------------------</p>

    <div v-if="showForm">
      <p>Social Security Number: {{ ssn }}</p>
      <input
        v-model="ssn"
        placeholder="Enter Last 4 of SSN"
        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        maxlength="4"
      />
      <p>First Name: {{ firstName }}</p>
      <input v-model="firstName" placeholder="Enter First Name" />
      <p>Last Name: {{ lastName }}</p>
      <input v-model="lastName" placeholder="Enter Last Name" />
      <p>Home Address: {{ homeAddress }}</p>
      <input v-model="homeAddress" placeholder="Enter Home Address" />
      <p>University: {{ uni }}</p>
      <input v-model="uni" placeholder="Enter University" />
      <p>
        <br />
        <button
          type="button"
          class="btn btn-primary"
          @click="verifyCandidate(ssn, firstName, lastName, homeAddress, uni)"
        >
          Submit
        </button>
      </p>
    </div>

    <div v-if="!showForm">
      <p>
        <strong>
          Please authorize this submission via Ale Wallet extension to store the
          record successfully. <br /> If any of the fields below are blank, your entry will 
          not be saved. 
        </strong>
      </p>
      <p><strong>SSN:</strong> {{ ssn }}</p>
      <p><strong>First Name:</strong> {{ firstName }}</p>
      <p><strong>Last Name:</strong> {{ lastName }}</p>
      <p><strong>Home Address:</strong> {{ homeAddress }}</p>
      <p><strong>University:</strong> {{ uni }}</p>
      <br />
      <br />
    </div>
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
      showForm: true,
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
      this.showForm = false;
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
#bg {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
