import VerifyContract from "../contract";

// import store from '../store'

// import Big from 'bignumber.js'

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
  async candidateHandler() {
    console.log("heree");
    await VerifyContract.verifyInstance.methods
      .candidateHandler("1234", "monirul", "islam", "1234STREET", "1234UNI")
      .call();
    await VerifyContract.verifyInstance.methods
      .institutionHandler(
        "Columbia University",
        "1234",
        "Bachelor of Science",
        "Computer Science",
        "2020"
      )
      .call();
    const result = await VerifyContract.verifyInstance.methods
      .employerHandler("1234")
      .call();
    console.log(result);
  },
};
