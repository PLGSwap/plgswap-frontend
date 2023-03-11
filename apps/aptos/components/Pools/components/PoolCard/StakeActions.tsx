import { Token } from '@plgswap/swap-sdk-core'
import { Pool } from '@plgswap/uikit'
import StakeModal from './StakeModal'

export default Pool.withStakeActions<Token>(StakeModal)
