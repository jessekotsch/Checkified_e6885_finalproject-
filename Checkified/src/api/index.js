import VerifyContract from "../contract";

import store from "../store";

import Big from "bignumber.js";

export default {
  async candidateHandler(ssn, firstName, lastName, homeAddress, uni) {
    console.log("heree", ssn, firstName, lastName, homeAddress, uni);
    const resCandidate = await VerifyContract.verifyInstance.methods
      .candidateHandler(ssn, firstName, lastName, homeAddress, uni)
      .sendToBlock({
        from: store.state.dapp.account,
        amount: new Big("0").toString(),
      });
    console.log("candidateHandler success:", resCandidate.success);
  },
  async institutionHandler(uni, ssn, degreeName, major, year, gpa) {
    console.log("heree2", uni, ssn, degreeName, major, year, gpa);
    const institutionHandler = await VerifyContract.verifyInstance.methods
      .institutionHandler(uni, ssn, degreeName, major, year, gpa)
      .sendToBlock({
        from: store.state.dapp.account,
        amount: new Big("0").toString(),
      });
    console.log("institutionHandler success:", institutionHandler.success);
  },

  async employerHandler(ssn) {
    console.log("heree3", ssn);
    const result = await VerifyContract.verifyInstance.methods
      .employerHandler(ssn)
      .call();

    console.log("employer returns: ", result);
    return result;
  },
};
