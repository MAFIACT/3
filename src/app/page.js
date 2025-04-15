'use client'

import { useAccount } from 'wagmi'
import { Web3Button } from '@web3modal/wagmi/react'

export default function Home() {
  const { address, isConnected } = useAccount()

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">🧠 Web3 Dashboard</h1>
        <Web3Button />
      </header>
      {isConnected && <p>Wallet: {address}</p>}
    </main>
  )
}
