'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const MotionBox = motion.div // Use a standard div with Framer Motion

const HEADER_HEIGHT = 105

interface TagsBarProps {
  tags: string[]
  activeTag: string
  onTagClick: (tag: string) => void
}

export const TagsBar: React.FC<TagsBarProps> = ({
  tags,
  activeTag,
  onTagClick,
}) => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsSticky(ref.current.getBoundingClientRect().top <= HEADER_HEIGHT)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <MotionBox
      ref={ref}
      className={`sticky top-[var(--header-height)] bg-white px-4 md:px-8 z-dropdown border-b border-black overflow-x-auto 
        ${isSticky ? 'pt-4 pb-4' : 'pt-16 pb-6'}
        ${isSticky ? 'bg-gradient-to-r from-pink-200 to-purple-200 animate-gradient' : ''}`}
      initial={{ paddingTop: '4rem', paddingBottom: '1.5rem' }}
      animate={
        isSticky
          ? {
              paddingTop: '1rem',
              paddingBottom: '1rem',
              background: [
                'linear-gradient(90deg, #fad0c4 0%, #ffd1ff 100%)',
                'linear-gradient(90deg, #fdcbf1 0%, #e6dee9 100%)',
              ],
            }
          : {
              paddingTop: '4rem',
              paddingBottom: '1.5rem',
              background: 'white',
            }
      }
      transition={{
        background: {
          repeat: isSticky ? Infinity : 0,
          repeatType: 'reverse',
          duration: isSticky ? 2 : 0.5,
        },
      }}
    >
      <div className="flex space-x-4 w-min">
        {tags.map((tag) => (
          <button
            key={tag}
            aria-label={tag}
            className={`py-2 px-4 rounded-lg border border-gray-300 ${tag === activeTag ? 'bg-blue-500 text-white' : 'bg-transparent text-black'}`}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </MotionBox>
  )
}
