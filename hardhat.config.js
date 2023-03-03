require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
const dotenv = require("dotenv")
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  gasReporter: {
    currency: 'USD',
    token: 'MATIC',
    gasPriceApi: 'https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice',
    coinmarketcap: process.env.CMC,
    enabled: true
  },
};
