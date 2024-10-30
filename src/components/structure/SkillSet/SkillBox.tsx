'use client'
import type { Skill } from '@/utils/types'

import { useState } from 'react'



export interface SkillProps extends Skill {
  setBorderColor: (color: string) => void
}

export const SkillBox: React.FC<SkillProps> = ({
  name,
  icon:IconComponent,
  color,
  setBorderColor,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
       {isOpen && (
        <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm p-2 rounded">
          {name}
        </div>
      )}
      <div
        className="flex items-center justify-center w-16 h-16 bg-gray-100 p-1 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
        onMouseEnter={() => {
          setBorderColor(color)
          setIsOpen(true)
        }}
        onMouseLeave={() => {
          setBorderColor('black')
          setIsOpen(false)
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {IconComponent}
         </div>
    </div>
  )
}
