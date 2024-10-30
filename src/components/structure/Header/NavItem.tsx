'use client'

// import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface NavItemProps {
  name: any
  href: string
  onClose: () => void
}

export const NavItem: React.FC<NavItemProps> = ({ name, href, onClose }) => {

  const pathname = usePathname()

  return (
    // <Link href={href}>
      <a href={href}
        aria-current={pathname === href ? 'page' : undefined}
        onClick={onClose}
        className={`px-4 py-2 text-sm font-medium ${
          pathname === href ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
        } hover:text-blue-600 transition-colors`}
      >
        {name}
      </a>
    // </Link>
  )
}

