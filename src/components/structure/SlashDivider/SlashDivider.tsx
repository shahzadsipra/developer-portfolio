import React from 'react'

export const SlashDivider: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    className="h-12 border-t border-b border-black bg-white"
    style={{
      backgroundImage:
        'repeating-linear-gradient(135deg, transparent, transparent 24px, rgba(0, 0, 0, 1) 24px, rgba(0, 0, 0, 1) 25px)',
    }}
    {...props}
  />
)
