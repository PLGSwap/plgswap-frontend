import { Flex } from '@plgswap/uikit'
import IfoVesting from './IfoVesting'

const IfoPoolVaultCard = () => {
  return (
    <Flex width="100%" maxWidth={400} alignItems="center" flexDirection="column">
      <IfoVesting />
    </Flex>
  )
}

export default IfoPoolVaultCard
