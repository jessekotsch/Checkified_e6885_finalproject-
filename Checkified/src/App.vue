<template>
  <div class="demo">
    <b>I am a(n): </b>
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="currentTab" class="tab"></component>
  </div>
</template>

<script>
import Candidate from "./components/candidateHandler.vue";
import Institution from "./components/institutionHandler.vue";
import Employer from "./components/employerHandler.vue";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Candidate,
    Institution,
    Employer,
  },
  data() {
    return {
      currentTab: "Candidate",
      tabs: ["Candidate", "Institution", "Employer"],
    };
  },
  computed: {
    ...mapGetters(["usingAle"]),
  },
  watch: {
    usingAle(val) {
      if (val) {
        this.listenDataChange();
      }
    },
  },
  methods: {
    handleNetworkChange(networkID) {
      this.$store.commit("M_SET_DAPP_NETWORK", networkID);
    },
    handleLockChange(status) {
      this.$store.commit("IS_ALE_ENABLED", !status);
    },
    handleConnectChange(status) {
      this.$store.commit("M_SET_DAPP_CONNECT", status);
    },
    handleAccountChange(account) {
      this.$store.commit("M_SET_DAPP_ACCOUNT", account);
    },
    listenDataChange() {
      window.aleereum.on("on_networkId_change", this.handleNetworkChange);
      window.aleereum.on("on_islocked_change", this.handleLockChange);
      window.aleereum.on("on_isConnected_change", this.handleConnectChange);
      window.aleereum.on("on_account_change", this.handleAccountChange);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a0d11;
  background-color: rgb(94, 117, 139);
  margin-top: 60px;
}
</style>
