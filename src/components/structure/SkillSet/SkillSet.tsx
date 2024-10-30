'use client'

import { motion, type Variants } from 'framer-motion'
import { SkillGroup } from './SkillGroup'
import { skills } from '@/data/skills'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
}

const MotionSimpleGrid = motion.div

export const SkillSet: React.FC = () => {


  return (
    <section className="py-20 px-4 md:px-8 border-t border-black">
      <h2 className="md:text-4xl mb-4 text-2xl font-bold font-hanson uppercase">
        {/* {t('skills-heading')} */}
        My Skill Set

        </h2>
      <MotionSimpleGrid
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <SkillGroup key={skill.id} {...skill} />
        ))}
      </MotionSimpleGrid>
    </section>
  )
}
