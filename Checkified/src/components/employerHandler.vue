<template>
  <div class="employerHandler">
    <p>
      Employer Verification Form: Please enter the social security number of the
      candidate to lookup their information
    </p>
    <p>--------------------------------------------------------------------</p>
    <p>Social Security Number: {{ ssn }}</p>
    <input v-model="ssn" placeholder="Enter Social Security Number" />
    <p>
      <button @click="employerHandler(ssn)">Submit</button>
    </p>
    <p>{{ res }}</p>
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
        self.res = res;
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
</style>
