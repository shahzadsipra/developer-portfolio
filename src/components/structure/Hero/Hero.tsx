'use client'

import NextLink from 'next/link'

import { motion } from 'framer-motion'
import { config } from '@/config/config'
import { ButtonArrow } from '@/components/meta' 
import { fontGilroy, fontHanson } from '@/app/fonts'

const MotionFlex = motion.div
const MotionHeading = motion.h1
const MotionButton = motion.a

export const Hero: React.FC = () => {


  return (
    <MotionFlex
      className="h-[calc(100vh-var(--header-height))] px-4 md:px-8 flex items-center"
      animate={{
        background: [
          'linear-gradient(80deg, #ddcbf8 0%, #eaed9e 100%)',
          'linear-gradient(120deg, #ddfffc 0%, #C79DEE 100%)',
        ],
      }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.75 }}
    >
      <div className={`flex flex-col items-start pb-48 pt-14 max-w-2xl space-y-12 `}>
        <MotionHeading
          className={` text-3xl md:text-5xl pt-5 font-bold break-words font-hanson uppercase`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {/* {t('hero-title')} */}
          {/* I build things with my mouse and keyboard. */}
          Designing and coding digital solutions that matter.
        </MotionHeading>
        <NextLink href="/#projects" passHref legacyBehavior>
          <MotionButton
            className="inline-flex items-center px-4 py-2  text-white font-semibold bg-black rounded "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            <span className="mr-4">
              
              {/* {t('hero-cta')} */}
              {/* See what I've built */}
              Hire Me
              </span>
            <ButtonArrow
              className="transform transition-transform duration-200 text-black"
              style={{ transformOrigin: 'left' }}
            />
          </MotionButton>
        </NextLink>
      </div>
    </MotionFlex>
  )
}
