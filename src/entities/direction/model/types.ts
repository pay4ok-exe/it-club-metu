import type { LucideIcon } from 'lucide-react'

export type DirectionTone = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'pink'

export type Direction = {
  id: string
  title: string
  description: string
  icon: LucideIcon
  tags: string[]
  schedule: string
  tone: DirectionTone
}
