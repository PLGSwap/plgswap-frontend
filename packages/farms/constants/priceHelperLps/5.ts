import { goerliTestnetTokens } from '@plgswap/tokens'
import { SerializedFarmConfig } from '@plgswap/farms'

const priceHelperLps: SerializedFarmConfig[] = [
  {
    pid: null,
    lpSymbol: 'WETH-USDC LP',
    lpAddress: '0xf5bf0C34d3c428A74Ceb98d27d38d0036C587200',
    quoteToken: goerliTestnetTokens.usdc,
    token: goerliTestnetTokens.weth,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps
