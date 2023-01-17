import { CyclesContext } from '@/contexts/CyclesContext'
import { useContext } from 'react'

export function useCycles() {
  return useContext(CyclesContext)
}
