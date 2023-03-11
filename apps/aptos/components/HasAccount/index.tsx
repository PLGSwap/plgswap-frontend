import { useAccount } from '@plgswap/awgmi'
import { useIsMounted } from '@plgswap/hooks'

export default function HasAccount({ fallbackComp, children }) {
  const { account } = useAccount()
  const isMounted = useIsMounted()

  return isMounted && account ? <>{children}</> : fallbackComp
}
