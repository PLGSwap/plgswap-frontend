import { useQueries } from '@plgswap/awgmi'
import { isUserTransaction } from '@plgswap/awgmi/core'
import { useTranslation } from '@plgswap/localization'
import { useToast } from '@plgswap/uikit'
import { ToastDescriptionWithTx } from 'components/Toast'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMemo } from 'react'
import { finalizeTransaction } from './actions'
import { useAllChainTransactions } from './hooks'
import { TransactionDetails, useTransactionState } from './reducer'

export function shouldCheck(tx: TransactionDetails): boolean {
  if (tx.receipt) return false
  return true
}

export default function Updater(): null {
  const { chainId, provider, networkName } = useActiveWeb3React()
  const { t } = useTranslation()

  const [, dispatch] = useTransactionState()
  const transactions = useAllChainTransactions()

  const { toastError, toastSuccess } = useToast()

  useQueries({
    queries: useMemo(
      () =>
        Object.keys(transactions)
          .filter((hash) => shouldCheck(transactions[hash]))
          .map((hash) => {
            return {
              enabled: Boolean(chainId && provider),
              queryFn: () => provider.waitForTransactionWithResult(hash),
              queryKey: [{ entity: 'transaction', hash, networkName }],
              onSuccess: (receipt) => {
                if (receipt && isUserTransaction(receipt)) {
                  dispatch(
                    finalizeTransaction({
                      chainId,
                      hash,
                      receipt: {
                        blockNumber: receipt.version,
                        sequenceNumber: receipt.sequence_number,
                        from: receipt.sender,
                        success: receipt.success,
                        transactionHash: receipt.hash,
                        payload: receipt.payload,
                        timestamp: receipt.timestamp,
                      },
                    }),
                  )

                  const toast = receipt.success ? toastSuccess : toastError
                  toast(t('Transaction receipt'), <ToastDescriptionWithTx txHash={receipt.hash} />)
                }
              },
              onError: (err) => {
                console.error(`failed to check transaction hash: ${hash}`, err)
              },
            }
          }),
      [chainId, dispatch, networkName, provider, t, toastError, toastSuccess, transactions],
    ),
  })

  return null
}
