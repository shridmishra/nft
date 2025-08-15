export interface NFTCollection {
  id: string
  title: string
  description: string
  totalSupply: number
  blockchain: string
  mintPrice?: number
  mintDate?: Date
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export interface StatItem {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  color: string
}