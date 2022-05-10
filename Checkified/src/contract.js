// import Mcp from "./mcp";

// const abi = require("./abi.json");

// const McpFunc = new Mcp();

// McpFunc.Contract.setProvider("http://18.182.45.18:8765");

// const tokenAddress = "0x56f12EC4980d7bbD0470BEb3E713e61a33a1141C";
// const coreAddress = "0x56f12EC4980d7bbD0470BEb3E713e61a33a1141C";

// const Instance = new McpFunc.Contract(
//     abi,
//     tokenAddress
// );

// const Contract = {
//     tokenAddress,
//     Instance,
//     coreAddress
// };

// export default Contract;

import Mcp from "./mcp";

const abi = require("./abi.json");
const abi_verification = require("./abi_verification.json");

const McpFunc = new Mcp();

McpFunc.Contract.setProvider("http://13.212.177.203:8765");

const tokenAddress = "0x56f12EC4980d7bbD0470BEb3E713e61a33a1141C";
const coreAddress = "0x56f12EC4980d7bbD0470BEb3E713e61a33a1141C";

// const verifyAddress = "0x225949Ff742Ea5E73f05E1F834e8e625FCa73061"; // VERIFICATION CONTRACT
const verifyAddress = "0x28f5Fa56D1C0c1378D747688992d0D2780507D89";

const Instance = new McpFunc.Contract(abi, tokenAddress);

const Contract = {
  tokenAddress,
  Instance,
  coreAddress,
};

const verifyInstance = new McpFunc.Contract(abi_verification, verifyAddress);

const VerifyContract = {
  verifyInstance,
  verifyAddress,
};

console.log(Contract);

export default VerifyContract;
