'use client'

import React, { useState } from 'react'
import { Menu, X, ExternalLink } from 'lucide-react'

interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems: NavigationItem[] = [
    { label: 'Collection', href: '#collection' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
    { label: 'Discord', href: '#discord', external: true }
  ]

  return (
    <nav className="relative z-50">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-mono text-sm uppercase tracking-wider relative group"
          >
            {item.label}
            {item.external && <ExternalLink className="inline ml-1 w-3 h-3" />}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-green-400 hover:text-green-300 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-12 right-0 bg-black/90 backdrop-blur-md border border-green-400/20 rounded-lg p-6 min-w-[200px]">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block text-gray-300 hover:text-green-400 transition-colors duration-300 font-mono text-sm uppercase tracking-wider py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
              {item.external && <ExternalLink className="inline ml-1 w-3 h-3" />}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation