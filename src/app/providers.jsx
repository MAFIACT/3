'use client'

import { WagmiConfig } from 'wagmi'
import { Web3Modal } from '@web3modal/wagmi/react'
import { config, projectId, chains } from '../lib/wallet'

export default function Providers({ children }) {
  return (
    <WagmiConfig config={config}>
      {children}
      <Web3Modal projectId={projectId} chains={chains} />
    </WagmiConfig>
  )
}
