import { ChainId } from '@plgswap/aptos-swap-sdk'
import { useNetwork } from '@plgswap/awgmi'
import { useIsMounted } from '@plgswap/hooks'
import { useTranslation } from '@plgswap/localization'
import { Box, Text, UserMenu, UserMenuDivider, UserMenuItem } from '@plgswap/uikit'
import { APEX_DOMAIN } from 'config'
import { defaultChain } from 'config/chains'
import Image from 'next/image'
import { aptosLogoClass } from './Logo/CurrencyLogo.css'

const evmChains = [
  { id: 56, name: 'BNB Smart Chain', chainName: 'bsc' },
  { id: 1, name: 'Ethereum', chainName: 'eth' },
  { id: 4242, name: 'Polygomic Smart Chain', chainName: 'plg' },
]
const networks = [
  { id: 4242, name: 'Polygomic Smart Chain', chainName: 'plg' },
  { id: 56, name: 'BNB Smart Chain', chainName: 'bsc' },
  { id: 1, name: 'Ethereum', chainName: 'eth' },
];

const NetworkSelect = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box px="16px" py="8px">
        <Text color="textSubtle">{t('Select a Network')}</Text>
      </Box>
      <UserMenuDivider />
      {networks.map((network) => (
        <UserMenuItem
          key={network.id}
          style={{ justifyContent: 'flex-start' }}
          as="a"
          target="_blank"
          href={`${APEX_DOMAIN}?chain=${network.chainName}`}
        >
          <Image
            src={`${APEX_DOMAIN}/images/chains/${network.id}.png`}
            width={24}
            height={24}
            unoptimized
            alt={`chain-${network.id}`}
          />
          <Text color="text" pl="12px">
            {network.id === 4242 ? 'Polygomic Smart Chain' : network.name}
          </Text>
        </UserMenuItem>
      ))}

    </>
  )
}

export const NetworkSwitcher = () => {
  const network = useNetwork() || defaultChain

  const { chain = defaultChain } = network

  const isMounted = useIsMounted()

  return (
    <UserMenu
      mr="8px"
      variant="default"
      avatarSrc="https://tokens.pancakeswap.finance/images/symbol/apt.png"
      avatarClassName={aptosLogoClass({
        isProduction: isMounted && chain?.id === ChainId.MAINNET,
      })}
      placement="bottom"
      text={
        <>
          <Box display={['none', null, null, null, null, 'block']}>
            {`Aptos${isMounted && chain?.testnet && chain?.name ? ` ${chain?.name}` : ''}`}
          </Box>
          <Box display={['block', null, null, null, null, 'none']}>APT</Box>
        </>
      }
    >
      {() => <NetworkSelect />}
    </UserMenu>
  )
}
