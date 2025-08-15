"use client"
import React, { useState } from 'react';
import ConnectWallet from '../ui/ConnectWallet';
import { Menu, X } from 'lucide-react'; // icon set, you can use any

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 right-0 z-40 bg-hero">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-voltec">EXYZ</div>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-8">
            <div className="text-2xl font-voltec">Leaderboard</div>
            
          </div>
          <div className='hidden md:block'>
            <ConnectWallet />
          </div>
          

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden mt-4 flex flex-col gap-6">
            <div className="text-xl font-voltec">Leaderboard</div>
            <ConnectWallet />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
