import { Currency } from '@plgswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency?.isNative) return currency.symbol?.toUpperCase()
  if (currency?.isToken) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
