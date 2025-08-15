import React from 'react'
import { Wallet } from 'lucide-react'
import Navigation from '@/components/ui/navigation'
import Button from '@/components/ui/button'
import ConnectWallet from '../ui/ConnectWallet'

const Header: React.FC = () => {
  return (
    <header className=" top-0 left-0 right-0 z-40 bg-hero">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          
          <div className="text-2xl font-voltec">
            EXYZ
          </div>
          <div className="text-2xl font-voltec">
            Leaderboard
          </div>

          <ConnectWallet />



        </div>
      </div>
    </header>
  )
}

export default Header