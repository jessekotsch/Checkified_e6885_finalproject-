# e6885_finalproject
* jak2302@columbia.edu * jp4131@columbia.edu  * fk2421@columbia.edu  * im2594@columbia.edu  * jk4271@cumc.columbia.edu  * la2876@columbia.edu  *

Requirements:
Node.js v12+ LTS and npm (comes with Node)
Genache
MetaMask

CHECKIFIED:
contracts/: Directory for Solidity contracts
migrations/: Directory for scriptable deployment files
        https://trufflesuite.com/docs/truffle/getting-started/running-migrations/#migration-files
test/: Directory for test files for testing your application and contracts
truffle-config.js: Truffle configuration file
        https://trufflesuite.com/docs/truffle/reference/configuration/


How to Run:
1. truffle compile
2. truffle migrate
3. ganache-cli -p 8545 (in new terminal)
4. Take private key from printout and run Metamast. Import account using that private key
5.  truffle migrate -network development (in original termianl)
6. truffle deploy
7. live-server (from src folder)



How to get ABI for contract:
1. solcjs contract.sol --abi

LOGIN:
First, you need to sign up for Moralis and click ‘Create a new Server’. 
Create a testnet server, give your instance a name, select your region, and then select the Eth Kovan chain. 
Click ‘Add instance’ to create the server.
 Then you will be presented with the Application ID and Server URL that you’ll need later.