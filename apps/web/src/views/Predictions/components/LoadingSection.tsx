import { Flex, Spinner } from '@plgswap/uikit'

export default function LoadingSection() {
  return (
    <Flex justifyContent="center" width="100%" alignItems="center" height="404px">
      <Spinner />
    </Flex>
  )
}
