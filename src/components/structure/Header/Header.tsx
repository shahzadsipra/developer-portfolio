'use client'

import Link from 'next/link'
import {  usePathname } from 'next/navigation'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import { NAME } from '@/config/config'
import { Menu, navItems } from './Menu'
import { useState } from 'react'


export const Header: React.FC = () => {

  
  const pathname = usePathname()
  
  const [isOpen, setIsOpen] = useState(false)

 

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky  z-50 top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="relative bg-white flex items-center justify-between py-4 px-4 md:px-8">
        <Link className="font-bold text-lg md:text-2xl uppercase" href="/" passHref>

            {NAME}

        </Link>
        <div className="flex items-center space-x-2">
          <div className="md:flex hidden">
          {navItems.map((item) => (
          <a href={item.href}
          key={item.name}
          aria-current={pathname === item.href ? 'page' : undefined}
          className={`px-4 py-2 text-sm font-medium uppercase ${
            pathname === item.href ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
          } hover:text-blue-600 transition-colors`}
        >
          {item.name}
        </a>
        ))}
          </div>
          <button

            aria-label={isOpen ? 'close-menu' : 'open-menu'}
            onClick={toggleMenu}
            className="p-2 md:hidden"
          >
            {isOpen ? <VscChromeClose size={24} /> : <HiOutlineMenuAlt4 size={24} />}
          </button>
        </div>
      </div>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  )
}



