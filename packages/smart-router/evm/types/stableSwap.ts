import { Currency, CurrencyAmount, ERC20Token, Pair as V2Pair, Percent, Price, TradeType } from '@plgswap/sdk'

import { RouteType } from './bestTrade'
import { BasePair } from './pair'
import { BaseRoute } from './route'

export interface StableSwapPair extends BasePair {
  stableSwapAddress: string
  lpAddress: string
  infoStableSwapAddress: string
  price: Price<Currency, Currency>
  fee: Percent
  adminFee: Percent
  liquidityToken: ERC20Token
  stableLpFee: number
  stableLpFeeRateOfTotalFee: number
}

export type Pair = V2Pair | StableSwapPair

export interface RouteWithStableSwap<TInput extends Currency, TOutput extends Currency>
  extends BaseRoute<TInput, TOutput, Pair> {
  routeType: RouteType
}

export interface TradeWithStableSwap<TInput extends Currency, TOutput extends Currency, TTradeType extends TradeType> {
  tradeType: TTradeType
  route: RouteWithStableSwap<TInput, TOutput>
  inputAmount: CurrencyAmount<TInput>
  outputAmount: CurrencyAmount<TOutput>
}

export interface StableSwapFeeRaw {
  fee: CurrencyAmount<Currency>
  adminFee: CurrencyAmount<Currency>
}

export interface StableSwapFeePercent {
  fee: Percent
  adminFee: Percent
}
