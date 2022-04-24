var HelloWorld = artifacts.require("HelloWorld");
var Verification = artifacts.require("Verification");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(Verification);
};
