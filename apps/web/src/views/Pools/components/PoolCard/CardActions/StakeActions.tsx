import { Token } from '@plgswap/sdk'
import { Pool } from '@plgswap/uikit'
import StakeModal from '../../Modals/StakeModal'

export default Pool.withStakeActions<Token>(StakeModal)
