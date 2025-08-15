import React from 'react'
import { Wallet } from 'lucide-react'
import Navigation from '@/components/ui/navigation'
import Button from '@/components/ui/button'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-green-400/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold font-mono text-green-400">
            EXYZ
          </div>
          
          {/* Navigation */}
          <Navigation />
          
          {/* Connect Wallet Button */}
          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
            <Wallet size={16} />
            CONNECT WALLET
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header