'use client'
import { useState } from 'react'

import { motion, type Variants } from 'framer-motion'
import type { SkillGroup as ISkillGroup } from '@/utils/types'
import { SkillBox } from './SkillBox'

const group: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkillGroupProps extends ISkillGroup {}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, skills }) => {

  const [borderColor, setBorderColor] = useState('black')

  return (
    <motion.div variants={group}>
      <div
        className={`flex flex-col p-6 border ${borderColor} border-solid transition-colors duration-100 ease-in-out`}
        style={{ borderColor }}
      >
        <h3 className="text-lg font-semibold font-gilroy uppercase mb-3">
          {/* {t(category as TFuncKey<'common'>)} */}
          {category}
        </h3>
        <div className="grid grid-cols-3 gap-5">
          {skills.map((skill) => (
            <SkillBox
              key={skill.name}
              setBorderColor={setBorderColor}
              {...skill}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
