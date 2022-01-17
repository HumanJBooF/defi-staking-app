/* eslint-disable no-undef */
const Tether = artifacts.require("Tether");
const RWD = artifacts.require("RWD");
const DecentralBank = artifacts.require("DecentralBank");

module.exports = async function(deployer, network, accounts) {
  // Deploy mock tether contract
  await deployer.deploy(Tether);
  const tether = await Tether.deployed();

  // Deploy reward token contract
  await deployer.deploy(RWD);
  const rwd = await RWD.deployed();

  // Deploy decentral bank contract
  await deployer.deploy(DecentralBank, rwd.address, tether.address);
  const decentralBank = await DecentralBank.deployed();

  // Transfer all RWD tokens to DecentralBank (1 million)
  await rwd.transfer(decentralBank.address, "1000000000000000000000000");

  // Distribute 100 Tether tokens to "investor"
  // since this is a test app, we don't have a real bank end so we are
  // using the second account in our test network
  await tether.transfer(accounts[1], "100000000000000000000");
};
