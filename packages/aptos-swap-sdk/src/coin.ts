import { Token } from '@plgswap/swap-sdk-core'
import { HexString } from 'aptos'
import { Currency } from './currency'

export class Coin extends Token {
  public constructor(
    chainId: number,
    address: string,
    decimals: number,
    symbol: string,
    name?: string,
    projectLink?: string
  ) {
    super(chainId, new HexString(address).toShortString(), decimals, symbol, name, projectLink)
  }

  public sortsBefore(other: Currency): boolean {
    return super.sortsBefore(other.wrapped)
  }

  public equals(other: Currency): boolean {
    return (
      this.chainId === other.chainId &&
      new HexString(this.address).toShortString() === new HexString(other.address).toShortString()
    )
  }
}
