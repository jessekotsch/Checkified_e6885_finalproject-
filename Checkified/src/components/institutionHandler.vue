<template>
  <form class="Institution">
    <img id="bg" src="../assets/CheckifiedLogo.png" />
    <p>
      Institution Verification Form: Please fill out the form below to verify
      the certificate/degree of the candidate
    </p>
    <p>--------------------------------------------------------------------</p>

    <div v-if="showForm">
      <p>University: {{ uni }}</p>
      <input v-model="uni" placeholder="Enter University" />
      <p>Social Security Number: {{ ssn }}</p>
      <input
        v-model="ssn"
        placeholder="Enter Last 4 of SSN"
        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        maxlength="4"
      />
      <p>Degree Name: {{ degreeName }}</p>
      <input v-model="degreeName" placeholder="Enter Degree Name" />
      <p>Major: {{ major }}</p>
      <input v-model="major" placeholder="Enter Major" />
      <p>Year: {{ year }}</p>
      <input
        v-model="year"
        placeholder="Enter Year"
        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
        maxlength="4"
      />
      <p>GPA: {{ gpa }}</p>
      <input v-model="gpa" placeholder="Enter GPA" />
      <p>
        <br />
        <button
          type="button"
          class="btn btn-primary"
          @click="institutionHandler(uni, ssn, degreeName, major, year, gpa)"
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
      <p><strong>University:</strong> {{ uni }}</p>
      <p><strong>SSN:</strong> {{ ssn }}</p>
      <p><strong>Degree Name:</strong> {{ degreeName }}</p>
      <p><strong>Major:</strong> {{ major }}</p>
      <p><strong>Graduation Year:</strong> {{ year }}</p>     
      <p><strong>GPA:</strong> {{ gpa }}</p>
      <br />
      <br />
    </div>
  </form>
</template>

<script>
import services from "@/api";

export default {
  data() {
    return {
      ssn: "",
      degreeName: "",
      major: "",
      year: "",
      uni: "",
      gpa: "",
      isConnected: false,
      Success: false,
      showForm: true,
    };
  },
  watch: {
    "$store.state.dapp": {
      handler(val) {
        (this.ssn = val.ssn),
          (this.degreeName = val.degreeName),
          (this.major = val.major),
          (this.year = val.year),
          (this.uni = val.uni),
          (this.gpa = val.gpa),
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
    institutionHandler(uni, ssn, degreeName, major, year, gpa) {
      services.institutionHandler(uni, ssn, degreeName, major, year, gpa);
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
