import { ChainId, ERC20Token } from '@plgswap/sdk'

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CAKE_POLYGOMIC = new ERC20Token(
  ChainId.POLYGOMIC,
  '0xb731F0Cd467a4A514d1212120599aE5eDB6F031c',
  18,
  'WCAKE',
  'Wrapped PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CAKE_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xFa60D973F7642B748046464e165A65B7323b0DEE',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const USDC_BSC = new ERC20Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_POLYGOMIC = new ERC20Token(
  ChainId.POLYGOMIC,
  '0x03c3E6a2c6601113A6D33A2F2A75A496e63E2864',
  18,
  'WUSDC',
  'Wrapped Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD Coin',
)

export const USDC_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BSC = new ERC20Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_POLYGOMIC = new ERC20Token(
  ChainId.POLYGOMIC,
  '0x392F90d1db428265F0e48e3d750bDCD834B6F9f7',
  18,
  'WUSDT',
  'Wrapped Tether USD',
  'https://tether.to/',
)

export const USDT_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new ERC20Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_POLYGOMIC = new ERC20Token(
  ChainId.BSC,
  '0x7282845198A0ea8eC69cB550B2a08F96E07E880a',
  18,
  'WBUSD',
  'Wrapped Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, ERC20Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.POLYGOMIC]: BUSD_POLYGOMIC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
}

export const CAKE = {
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.POLYGOMIC]: CAKE_POLYGOMIC,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.POLYGOMIC]: USDC_POLYGOMIC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.POLYGOMIC]: USDT_POLYGOMIC,
  [ChainId.ETHEREUM]: USDT_ETH,
}

export const WBTC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)

export const WBTC_POLYGOMIC = new ERC20Token(
  ChainId.POLYGOMIC,
  '0xAe1e5f002Bac567cAEFEc09FEa754D7226138fF8',
  8,
  'WBTC',
  'Wrapped BTC',
)

export const WETH_POLYGOMIC = new ERC20Token(
  ChainId.POLYGOMIC,
  '0x7a619E86E4c87594d45c0Cb6a35904a9131537f2',
  8,
  'WETH',
  'Wrapped Ethereum',
)

export const WDAI_POLYGOMIC = new ERC20Token(
  ChainId.POLYGOMIC,
  '0x32Ca507d155a211aDBBFeb2b133E05d6Cd1f7796',
  8,
  'WDAI',
  'Wrapped DAI',
)

export const WDOGE_POLYGOMIC = new ERC20Token(
  ChainId.POLYGOMIC,
  '0xe280186678aAe4374FbbF90D7A784F149C7546D8',
  8,
  'WDOGE',
  'Wrapped Dogecoin',
)

export const WADA_POLYGOMIC = new ERC20Token(
  ChainId.POLYGOMIC,
  '0xACD6FC61fECF8168CDe7Dc99cBA5Ab4E6FAC8F87',
  8,
  'WADA',
  'Wrapped Cardano',
)

export const WBNB_POLYGOMIC = new ERC20Token(
  ChainId.POLYGOMIC,
  '0x3ec88addee3f531AdD2CA706a01AaC0fe6F727e0',
  8,
  'WBNB',
  'Wrapped BNB',
)
