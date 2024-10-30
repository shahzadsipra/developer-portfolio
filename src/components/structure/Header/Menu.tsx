import { AnimatePresence, motion } from 'framer-motion'
import { NavItem, type NavItemProps } from './NavItem'

export const navItems: Omit<NavItemProps, 'onClose'>[] = [
  { name: 'home', href: '/' },
  { name: 'projects', href: '/#projects' },
  // { name: 'bookmarks', href: '/bookmarks' },
  { name: 'contact', href: '/#contact' },
]

const MotionNav = motion.nav

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => (
  <AnimatePresence initial={false}>
    {isOpen && (
      <MotionNav
        key='header-menu'
        className="absolute  left-0 right-0 z-50 flex flex-col md:flex-row bg-gradient-to-r from-[#DFE9F3] to-white border-b border-black py-4 px-4 md:px-8"
        initial={{ opacity: 0, top: '0rem' }}
        animate={{ opacity: 1, top: '4rem' }}  // Adjust the top value as needed
        exit={{ opacity: 0, top: '0rem' }}
        transition={{ ease: 'circOut' }}
      >
        {navItems.map((item) => (
          <NavItem key={item.name} onClose={onClose} {...item} />
        ))}
      </MotionNav>
      )} 
  </AnimatePresence>
)
