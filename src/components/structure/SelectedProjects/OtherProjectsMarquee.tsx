'use client'


import { useEffect, useState } from 'react'
import { config } from '@/config/config'

export const OtherProjectsMarquee: React.FC = () => {

  const [animationEnabled, setAnimationEnabled] = useState(true)

  // Check if the user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setAnimationEnabled(!mediaQuery.matches)
    const handleChange = () => setAnimationEnabled(!mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className="relative w-screen max-w-full border-t border-black overflow-x-hidden">
      <div
        aria-hidden="true"
        className={`relative flex space-x-12 whitespace-nowrap ${
          animationEnabled ? 'animate-loop' : ''
        }`}
        role="group"
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <a
            key={i}
            href={config.github}
            className="py-3 text-lg font-medium text-black hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out more projects
          </a>
        ))}
      </div>
    </div>
  )
}
