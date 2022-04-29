import Mcp from "./mcp";

const abi = require("./abi.json");

const McpFunc = new Mcp();

McpFunc.Contract.setProvider("http://18.182.45.18:8765");

const tokenAddress = "0x56f12EC4980d7bbD0470BEb3E713e61a33a1141C";
const coreAddress = "0x56f12EC4980d7bbD0470BEb3E713e61a33a1141C";
const verifyAddress = "0xA2605fAe388ae790aD4e6D31c43aDf7F2929a82A"

const Instance = new McpFunc.Contract(
    abi,
    tokenAddress
);

const Contract = {
    tokenAddress,
    Instance,
    coreAddress
};

const verifyContract = {
    Instance,
    verifyAddress,
};


export default {Contract, verifyContract};