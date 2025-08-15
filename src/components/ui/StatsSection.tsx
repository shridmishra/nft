import React from 'react'
import { Users, Trophy, Zap } from 'lucide-react'

const StatsSection: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Total Supply', value: '2,525', color: 'text-green-400' },
    { icon: Trophy, label: 'Floor Price', value: '0.05 ETH', color: 'text-cyan-400' },
    { icon: Zap, label: 'Unique Traits', value: '150+', color: 'text-purple-400' }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 text-center group hover:border-green-400/30 transition-all duration-300"
        >
          <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
          <div className="text-2xl font-bold font-mono text-white mb-1">{stat.value}</div>
          <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatsSection