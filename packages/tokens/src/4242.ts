import { ChainId, WPOLYG, ERC20Token } from '@plgswap/sdk'
import {
  BUSD_POLYGOMIC, CAKE_POLYGOMIC, USDT_POLYGOMIC, USDC_POLYGOMIC, WDAI_POLYGOMIC,
  WETH_POLYGOMIC, WBTC_POLYGOMIC, WDOGE_POLYGOMIC, WADA_POLYGOMIC, WBNB_POLYGOMIC, PLGSWAP_POLYGOMIC, CRUSD_POLYGOMIC
} from './common'

export const plgTokens = {
  wpolyg: WPOLYG[ChainId.POLYGOMIC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  polyg: new ERC20Token(
    ChainId.BSC,
    '0x01cf9b10fC19eEAF93D5F7846A4e96609310a73C',
    18,
    'POLYG',
    'POLYG',
    'https://www.polygomic.com/coins/polyg',
  ),
  cake: CAKE_POLYGOMIC,
  plgswap: PLGSWAP_POLYGOMIC,
  nft: new ERC20Token(
    ChainId.POLYGOMIC,
    '0x991aD6abdAcc40F3FB5ec929769DD842A172eBE7',
    18,
    'NFT',
    'NFT',
    'https://www.polygomic.com/tokens/nft',
  ),
  crusd: CRUSD_POLYGOMIC,
  busd: BUSD_POLYGOMIC,
  dai: WDAI_POLYGOMIC,
  usdt: USDT_POLYGOMIC,
  eth: WETH_POLYGOMIC,
  usdc: USDC_POLYGOMIC,
  btc: WBTC_POLYGOMIC,
  doge: WDOGE_POLYGOMIC,
  ada: WADA_POLYGOMIC,
  bnb: WBNB_POLYGOMIC,
  metaplus: new ERC20Token(
    ChainId.POLYGOMIC,
    '0x6e7fb1C52039D68CbB755798f123A2B4Ca238FdF',
    18,
    'META+',
    'Metaverse',
    'https://www.polygomic.com/tokens/metaplus',
  ),
  imagestudio: new ERC20Token(
    ChainId.POLYGOMIC,
    '0x3C146Fcca5Ec3372348C045430FFeD3837F93DC8',
    18,
    'Image',
    'Image Studio',
    'https://www.polygomic.com/tokens/imagestudio',
  ),
}
