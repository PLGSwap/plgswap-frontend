import { useMemo } from 'react'
import { Card, Text, BunnyPlaceholderIcon, Box, IfoGenericIfoCard, BunnyKnownPlaceholder } from '@plgswap/uikit'
import { useTranslation } from '@plgswap/localization'
import styled from 'styled-components'
import { PoolIds } from 'config/constants/types'

import { CardsWrapper } from './IfoCardStyles'
import { StyledCardBody } from './IfoFoldableCard/index'
import { cardConfig } from './IfoFoldableCard/IfoPoolCard'

const CurveBox = styled(Box)`
  border-bottom-left-radius: 100% 40px;
  border-bottom-right-radius: 100% 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

export default function ComingSoonSection() {
  const { t } = useTranslation()

  const basicConfig = useMemo(
    () =>
      cardConfig(t, PoolIds.poolBasic, {
        version: 3.1,
      }),
    [t],
  )

  const unlimitedConfig = useMemo(
    () =>
      cardConfig(t, PoolIds.poolUnlimited, {
        version: 3.1,
      }),
    [t],
  )

  return (
    <Card
      background="bubblegum"
      style={{
        width: '100%',
      }}
    >
      <CurveBox
        height={[100, 110, 160, 160]}
        backgroundImage={[
          "url('/images/ifos/assets/ifo-coming-soon.png')",
          "url('/images/ifos/assets/ifo-coming-soon.png')",
          "url('/images/ifos/assets/ifo-coming-soon-desktop.png')",
          "url('/images/ifos/assets/ifo-coming-soon-desktop.png')",
        ]}
      />
      <StyledCardBody>
        <CardsWrapper>
          <IfoGenericIfoCard
            title={unlimitedConfig?.title}
            variant={unlimitedConfig?.variant}
            tooltip={unlimitedConfig?.tooltip}
            content={
              <>
                <BunnyKnownPlaceholder width={80} mb="16px" />
                <Text textAlign="center" fontWeight={600}>
                  {t('Follow our social channels to learn more about the next IFO.')}
                </Text>
              </>
            }
            action={null}
          />
          <IfoGenericIfoCard
            title={basicConfig?.title}
            variant={basicConfig?.variant}
            tooltip={basicConfig?.tooltip}
            content={
              <>
                <BunnyPlaceholderIcon width={80} mb="16px" />
                <Text textAlign="center" fontWeight={600}>
                  {t('Follow our social channels to learn more about the next IFO.')}
                </Text>
              </>
            }
            action={null}
          />
        </CardsWrapper>
      </StyledCardBody>
    </Card>
  )
}
