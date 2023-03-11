import { defaultChain } from '@plgswap/awgmi'
import { mainnet, testnet, Chain } from '@plgswap/awgmi/core'

export { defaultChain }

export const chains = [mainnet, testnet].filter(Boolean) as Chain[]
