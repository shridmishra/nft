import React from 'react'

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-20 grid-bg animate-grid"
      />
      
      {/* Horizon Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-500/30 via-orange-500/10 to-transparent" />
      
      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-50 animate-scan" />
    </div>
  )
}

export default GridBackground