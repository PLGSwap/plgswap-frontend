import { useTranslation } from '@plgswap/localization'
import { Swap } from '@plgswap/uikit'
import { ChainId } from '@plgswap/sdk'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { EXCHANGE_HELP_URLS } from 'config/constants'

const Page: React.FC<
  React.PropsWithChildren<{
    removePadding?: boolean
    hideFooterOnDesktop?: boolean
    noMinHeight?: boolean
    helpUrl?: string
  }>
> = ({
  children,
  removePadding = false,
  hideFooterOnDesktop = false,
  noMinHeight = false,
  helpUrl = EXCHANGE_HELP_URLS,
  ...props
}) => {
  const { t } = useTranslation()
  const { chainId } = useActiveChainId()
  const isBSC = chainId === ChainId.BSC
  const externalText = isBSC ? t('Bridge assets to BNB Chain') : ''
  const externalLinkUrl = isBSC ? 'https://bridge.pancakeswap.finance/' : ''

  return (
    <>
      <Swap.Page
        removePadding={removePadding}
        noMinHeight={noMinHeight}
        hideFooterOnDesktop={hideFooterOnDesktop}
        helpUrl={helpUrl}
        externalText={externalText}
        externalLinkUrl={externalLinkUrl}
        {...props}
      >
        {children}
      </Swap.Page>
    </>
  )
}

export default Page
