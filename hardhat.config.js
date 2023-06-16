require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: ["e9efaaea6e204db833c16f1a1f8ec33161c5cd3d1c94b2b97c976bb44d75149c"],
    }
  }
};
