# 🚀 PolkaGrant DAO

**Decentralized Grant Funding Protocol on Polkadot EVM**

PolkaGrant DAO is a **Staked Governance Grant DAO** built on the Polkadot Testnet that enables communities to collectively fund builders through transparent on-chain governance.

 **Live App:**
https://polka-grant-dao.vercel.app

---

## 🧩 Problem

Web3 ecosystems need funding mechanisms for builders, but current grant systems often suffer from:

* ❌ Centralized decision making
* ❌ Lack of transparency
* ❌ Token holders without real governance power
* ❌ Instant fund execution without safety delay
* ❌ Governance manipulation through unstaked tokens

Builders and communities need a **trustless, transparent, and secure grant allocation system**.

---

## ✅ Solution — PolkaGrant DAO

PolkaGrant DAO introduces a **stake-based governance model** where only committed participants can influence funding decisions.

### Core Ideas

* Governance power comes from **staked tokens**, not wallet balance.
* Community votes decide grant approvals.
* Approved proposals pass through a **timelock** before execution.
* Treasury funds are controlled entirely by DAO logic.

This ensures fairness, accountability, and decentralized decision making.

---

## ⚙️ How It Works

### 1️⃣ Governance Token (PGT)

Users hold and stake PGT(PolkaGrant Token) tokens to gain voting power.

### 2️⃣ Staking

* Users stake tokens.
* Voting power equals staked amount.
* Prevents flash-loan or temporary voting attacks.

### 3️⃣ Grant Proposals

Builders submit proposals containing:

* Description
* Requested funding amount
* Voting deadline

### 4️⃣ Community Voting

Stakers vote:

* ✅ For
* ❌ Against

Only staked tokens count.

### 5️⃣ Timelock Security

If proposal passes:

* Enters **24-hour timelock**
* Community can review before execution.

### 6️⃣ Execution

Anyone can execute approved proposals and release funds from treasury.

---

## 🏗 Smart Contract Architecture

The system uses a modular architecture:

```
PGT Token → Staking → DAO Governance → Treasury
```

### Contracts

| Contract  | Purpose                 |
| --------- | ----------------------- |
| PGT Token | Governance token        |
| Staking   | Voting power management |
| DAO       | Proposal & voting logic |
| Treasury  | Secure fund storage     |

Security practices used:

* Check-Effects-Interactions pattern
* Double voting prevention
* Timelock execution
* Separate treasury contract
* DAO-controlled permissions

---
## 📜 Deployed Smart Contracts (Polkadot Testnet)

| Contract                                                                                                               | Description                                              |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 🔹 [PGT Token](https://blockscout-testnet.polkadot.io/address/0xBd341D0020DfBc983217a95C3973A4C190e4cE4e#code)         | ERC-20 governance token used for staking and voting      |
| 🔹 [Staking Contract](https://blockscout-testnet.polkadot.io/address/0x1b13b80C84e7b8E7Ec0BEF70c76db81c81B06fd0#code)  | Manages token staking and voting power                   |
| 🔹 [Treasury Contract](https://blockscout-testnet.polkadot.io/address/0xb215e6761C2574a6F5A39c0F7278caDf4dcBAb0A#code) | Secure storage and release of grant funds                |
| 🔹 [DAO Governance](https://blockscout-testnet.polkadot.io/address/0x0cA091a19eFb4a00Cb64078544636e7Ad77d325F#code)    | Proposal creation, voting, timelock, and execution logic |
| 🔹 [PGT Faucet](https://blockscout-testnet.polkadot.io/address/0xBe2c07996378Db780a946bb202dFcED99D28206C#code)        | Distributes test tokens for participation                |

---

## 🖥 Frontend

Features:

* MetaMask wallet connection
* Stake / Unstake tokens
* Create grant proposals
* Vote on proposals
* Proposal status tracking
* Treasury funding
* Execute approved grants

---

##  Key Governance Protections

* ✅ No double voting
* ✅ Execution only after deadline
* ✅ Timelock before fund release
* ✅ Treasury isolated from governance logic
* ✅ Only staked tokens grant voting power

---

## 🛠 Tech Stack

**Smart Contracts**

* Solidity
* OpenZeppelin
* Hardhat

**Frontend**

* React (Vite)
* ethers.js
* TailwindCSS

**Network**

* Polkadot EVM Testnet
* Currency: PAS

---

##  Hackathon Goals

This project demonstrates:

* DAO governance architecture
* Secure treasury design
* Stake-based voting
* Full-stack Web3 integration
* Polkadot EVM ecosystem usage

---

##  Future Improvements

* Delegated voting
* Quadratic voting
* Governance analytics dashboard
* Multi-sig treasury upgrades
* Cross-chain grant funding

---

##  Author

** Zeeshan**

Blockchain Developer | Solidity Learner | Web3 Builder

---
