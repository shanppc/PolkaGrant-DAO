require("@nomicfoundation/hardhat-toolbox");
const { vars } = require("hardhat/config");

module.exports = {
  solidity: "0.8.28",

  networks: {
    polkadotTestnet: {
      url: "https://eth-rpc-testnet.polkadot.io",  // Official Parity RPC (reliable, low latency)
      // Alternative/fallback: "https://services.polkadothub-rpc.com/testnet"
      chainId: 420420417,
      accounts: [vars.get("PRIVATE_KEY")],
    },
  },

  etherscan: {
    apiKey: {
      polkadotTestnet: "no-api-key-needed-for-blockscout",  // Dummy value; Blockscout ignores it
    },
    customChains: [
      {
        network: "polkadotTestnet",
        chainId: 420420417,
        urls: {
          apiURL: "https://blockscout-testnet.polkadot.io/api",  // Core API endpoint for verification
          browserURL: "https://blockscout-testnet.polkadot.io",  // Matches your link
        },
      },
    ],
  },

  // Optional: Explicitly enable Blockscout-style verification (newer Hardhat versions support it natively)
  verify: {
    blockscout: {
      enabled: true,
    },
  },
};