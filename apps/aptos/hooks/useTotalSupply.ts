import { Currency, CurrencyAmount } from '@plgswap/aptos-swap-sdk'
import { useCoin } from '@plgswap/awgmi'
import { FetchCoinResult } from '@plgswap/awgmi/core'
import { useMemo } from 'react'

const select = (d: FetchCoinResult) => d.supply

// returns undefined if input token is undefined, or fails to get token contract,
// or contract total supply cannot be fetched
export function useTotalSupply(token?: Currency): CurrencyAmount<Currency> | undefined {
  const { data } = useCoin({
    coin: token?.wrapped.address,
    staleTime: 0,
    watch: true,
    select,
  })

  return useMemo(
    () => (token?.wrapped && data ? CurrencyAmount.fromRawAmount(token.wrapped, data) : undefined),
    [data, token?.wrapped],
  )
}

export default useTotalSupply
