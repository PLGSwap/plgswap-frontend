import { LinkExternal, Text } from '@plgswap/uikit'
import { useTranslation } from '@plgswap/localization'

const ABNBWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>
        {t(
          'Warning: aBNB token from Ankr has been exploited. Please proceed with caution. We do not recommend users to trade the token.',
        )}
      </Text>
      <LinkExternal href="https://twitter.com/ankr/status/1598503332477280256">{t('Learn More')}</LinkExternal>
    </>
  )
}

export default ABNBWarning
