import { CallOverrides } from '@ethersproject/contracts'
import { createMulticall, Call } from '@plgswap/multicalll'
import { provider } from './wagmi'

export type { Call }

export interface MulticallOptions extends CallOverrides {
  requireSuccess?: boolean
}

const { multicall, multicallv2, multicallv3, multicallv2Typed, multicallv3Typed } = createMulticall(provider)

export default multicall

export { multicallv2, multicallv3, multicallv2Typed, multicallv3Typed }
