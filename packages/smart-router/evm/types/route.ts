import type { Currency, Pair } from '@plgswap/sdk'

import { BasePair } from './pair'

export interface BaseRoute<TInput extends Currency, TOutput extends Currency, TPair extends BasePair | Pair> {
  pairs: TPair[]
  input: TInput
  output: TOutput
  path: Currency[]
}
