import { Contract } from 'ethers'
import { ADDRESSES } from './config'


export const erc20ABI = [
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function balanceOf(address) view returns (uint256)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 amount) returns (bool)',
]

export const stakingABI = [
  // Common staking patterns
  'function stake(uint256 amount)',
  'function unstake(uint256 amount)',
  'function stakedBalance(address user) view returns (uint256)',
]

export const daoABI = [
  'function proposalCount() view returns (uint256)',
  'function createProposal(string description, uint256 amount)',
  'function vote(uint256 proposalId, bool support)',
  'function finalizeProposal(uint256 proposalId)',
  'function executeProposal(uint256 proposalId)',
  'function proposals(uint256) view returns (address,string,uint256,uint256,uint256,uint256,uint256,bool,bool,bool)',
]

export const faucetABI = [
  'function requestTokens()',
]

export function getContracts(runner) {
  return {
    token: new Contract(ADDRESSES.token, erc20ABI, runner),
    staking: new Contract(ADDRESSES.staking, stakingABI, runner),
    dao: new Contract(ADDRESSES.dao, daoABI, runner),
    faucet: new Contract(ADDRESSES.faucet, faucetABI, runner),
  }
}

