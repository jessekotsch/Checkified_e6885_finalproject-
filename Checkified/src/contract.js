import Mcp from "./mcp";

const abi = require("./abi.json");
const abi_verification = require("./abi_verification.json");

const McpFunc = new Mcp();

McpFunc.Contract.setProvider("http://18.182.45.18:8765");

const tokenAddress = "0x56f12EC4980d7bbD0470BEb3E713e61a33a1141C";
const coreAddress = "0x56f12EC4980d7bbD0470BEb3E713e61a33a1141C";
const verifyAddress = "0x761c19f3DC5409585C6443b607C6599c3a35F378";

const Instance = new McpFunc.Contract(
    abi,
    tokenAddress
);

const Contract = {
    tokenAddress,
    Instance,
    coreAddress
};

const verifyInstance = new McpFunc.Contract(
    abi_verification,
    verifyAddress
);

const verifyContract = {
    verifyInstance,
    verifyAddress,
};


export default {Contract, verifyContract};
