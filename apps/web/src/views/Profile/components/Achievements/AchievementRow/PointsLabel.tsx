import { Flex, FlexProps, PrizeIcon, Text } from '@plgswap/uikit'
import { useTranslation } from '@plgswap/localization'

interface PointsLabelProps extends FlexProps {
  points: number
}

const PointsLabel: React.FC<React.PropsWithChildren<PointsLabelProps>> = ({ points, ...props }) => {
  const { t } = useTranslation()
  const localePoints = points.toLocaleString()

  return (
    <Flex alignItems="center" {...props}>
      <PrizeIcon mr="4px" color="textSubtle" />
      <Text color="textSubtle">{t('%num% points', { num: localePoints })}</Text>
    </Flex>
  )
}

export default PointsLabel
