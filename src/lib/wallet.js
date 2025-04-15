'use client'

import { configureChains, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { Web3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi'

const projectId = '465e1e1d0e40f88070f30ea5af2cd7fd'

const metadata = {
  name: 'at work',
  description: 'Connect Wallet & View PNL',
  url: 'https://web3secondxork.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [base]

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata
})

export { config, projectId, chains, Web3Modal }
