import { Currency, Price } from '@plgswap/swap-sdk-core'
/**
 * Helper to multiply a Price object by an arbitrary amount
 */
const multiplyPriceByAmount = (price: Price<Currency, Currency>, amount: number, significantDigits = 18) => {
  if (!price) {
    return 0
  }

  try {
    return parseFloat(price.toSignificant(significantDigits)) * amount
  } catch (error) {
    return 0
  }
}

export default multiplyPriceByAmount
