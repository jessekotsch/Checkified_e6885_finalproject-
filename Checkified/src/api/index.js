import VerifyContract from "../contract";

import store from '../store'

import Big from 'bignumber.js'

export default {
  // async getName() {
  //     return await contract.Instance.methods.name().call();
  // },
  // async getSymbol() {
  //     return await contract.Instance.methods.symbol().call();
  // },
  // async approve(limit) {
  //     const approveAmount = new Big(limit).times('1e18').toString();
  //     const response = await contract.Instance.methods.approve(contract.coreAddress, approveAmount).sendToBlock({
  //         from: store.state.dapp.account,
  //         amount: new Big('0').toString()
  //     });

  //     if (response.success) {
  //         console.log('transaction success: ', response);
  //     } else {
  //         console.log('transaction failed: ', response);
  //     }

  //     return response;
  // }
  async candidateHandler(ssn, firstName, lastName, homeAddress, uni) {
    console.log("heree", ssn, firstName, lastName, homeAddress, uni);
    const resCandidate = await VerifyContract.verifyInstance.methods
      .candidateHandler("1234", "monirul", "islam", "1234STREET", "1234UNI").sendToBlock({
        from: store.state.dapp.account,
        amount: new Big('0').toString()
      })
    console.log("candidateHandler success:", resCandidate.success);

    const institutionHandler = await VerifyContract.verifyInstance.methods
      .institutionHandler(
        "Columbia University",
        "1234",
        "Bachelor of Science",
        "Computer Science",
        "2020"
      )
      .sendToBlock({
        from: store.state.dapp.account,
        amount: new Big('0').toString()
      })
      console.log("institutionHandler success:", institutionHandler.success);

    const result = await VerifyContract.verifyInstance.methods
      .employerHandler("1234")
      .call();

    console.log("employer returns: ", result);
  },
};
