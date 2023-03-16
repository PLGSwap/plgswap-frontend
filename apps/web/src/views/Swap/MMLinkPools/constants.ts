import { ChainId } from '@plgswap/sdk'
import contract from 'config/constants/contracts'
import { getAddress } from '@ethersproject/address'

export const NATIVE_CURRENCY_ADDRESS = getAddress('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE')

export const MM_SUPPORT_CHAIN = {
  1: true,
  5: true,
  56: true,
}

export const MM_SWAP_CONTRACT_ADDRESS = contract.mmLinkedPool

export const MM_STABLE_TOKENS_WHITE_LIST: Record<number, Record<string, string>> = {
  [ChainId.ETHEREUM]: {
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 'USDC',
    '0xdAC17F958D2ee523a2206206994597C13D831ec7': 'USDT',
    '0x6B175474E89094C44Da98b954EedeAC495271d0F': 'DAI',
    '0x4Fabb145d64652a948d72533023f6E7A623C7C53': 'BUSD',
  },
  [ChainId.BSC]: {
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56': 'BUSD',
    '0x55d398326f99059fF775485246999027B3197955': 'USDT',
    '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d': 'USDC',
  },
  [ChainId.POLYGOMIC]: {
    '0xFF03b0d2d8924df3A353c907F00AAB884E27fA07': 'CRUSD',
    '0x7282845198A0ea8eC69cB550B2a08F96E07E880a': 'BUSD',
    '0x03c3E6a2c6601113A6D33A2F2A75A496e63E2864': 'USDC',
    '0x32Ca507d155a211aDBBFeb2b133E05d6Cd1f7796': 'DAI',
    '0x392F90d1db428265F0e48e3d750bDCD834B6F9f7': 'USDT',
  },
  [ChainId.GOERLI]: {},
}

export const MM_SIGNER = {
  [ChainId.BSC]: '0x945BCF562085De2D5875b9E2012ed5Fd5cfaB927',
  [ChainId.ETHEREUM]: '0x945BCF562085De2D5875b9E2012ed5Fd5cfaB927',
  [ChainId.GOERLI]: '0x13414B047539298D5aeD429722211681eAAb43B7',
}

export const SAFE_MM_QUOTE_EXPIRY_SEC = 25
export const IS_SUPPORT_NATIVE_TOKEN = true
