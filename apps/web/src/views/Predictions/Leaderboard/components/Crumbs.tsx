/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link'
import { Box, Breadcrumbs, Text, Link } from '@plgswap/uikit'
import { useTranslation } from '@plgswap/localization'

const Crumbs = () => {
  const { t } = useTranslation()

  return (
    <Box mb="24px">
      <Breadcrumbs>
        <NextLink href="/" passHref>
          <Link>{t('Home')}</Link>
        </NextLink>
        <NextLink href="/prediction" passHref>
          <Link>{t('Prediction')}</Link>
        </NextLink>
        <Text>{t('Leaderboard')}</Text>
      </Breadcrumbs>
    </Box>
  )
}

export default Crumbs
