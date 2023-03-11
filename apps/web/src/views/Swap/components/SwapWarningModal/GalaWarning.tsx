import { LinkExternal, Text } from '@plgswap/uikit'
import { useTranslation } from '@plgswap/localization'

const GalaWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>{t('Warning: The pGALA token pool is not a valid token trading pair - please stop buying.')}</Text>
      <LinkExternal href="https://twitter.com/pNetworkDeFi/status/1588266897061031936">
        {t('For more info, please see pGALA’s twitter.')}
      </LinkExternal>
    </>
  )
}

export default GalaWarning
