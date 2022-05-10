<template>
  <div class="Employer">
    <img id="bg" src="../assets/CheckifiedLogo.png" />
    <p>
      Employer Verification Form: Please enter the social security number of the
      candidate to lookup their information
    </p>
    <p>--------------------------------------------------------------------</p>

    <div v-if="showForm">
      <p>Social Security Number: {{ ssn }}</p>
      <input v-model="ssn" placeholder="Enter Social Security Number" />
      <p>
        <br />
        <button
          type="button"
          class="btn btn-primary"
          @click="employerHandler(ssn)"
        >
          Submit
        </button>
      </p>
    </div>

    <div v-if="!showForm">
      <h5>
        <strong>
          Here's the information we have retrieved with SSN: {{ ssn }}
        </strong>
      </h5>
      <br />
      <p><strong>First Name:</strong> {{ firstName }}</p>
      <p><strong>Last Name:</strong> {{ lastName }}</p>
      <p><strong>University:</strong> {{ university }}</p>
      <p><strong>Major:</strong> {{ major }}</p>
      <p><strong>GPA:</strong> {{ gpa }}</p>
      <p><strong>Degree:</strong> {{ degreeName }}</p>
      <p><strong>Year:</strong> {{ year }}</p>
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
      isConnected: false,
      Success: false,
      res: "",
      firstName: "",
      lastName: "",
      university: "",
      major: "",
      degreeName: "",
      year: "",
      gpa: "",
      showForm: true,
    };
  },
  watch: {
    "$store.state.dapp": {
      handler(val) {
        (this.ssn = val.ssn), (this.isConnected = val.isConnected);
        this.res = val.res;
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    connect() {
      window["aleereum"] && window["aleereum"].connect();
    },
    employerHandler(ssn) {
      let self = this;
      services.employerHandler(ssn).then((res) => {
        this.firstName = res[0];
        this.lastName = res[1];
        this.university = res[2];
        this.major = res[3];
        this.degreeName = res[4];
        this.year = res[5];
        this.gpa = res[6];
        self.res = res;
        this.showForm = false;
      });
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
