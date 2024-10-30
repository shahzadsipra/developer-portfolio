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

// 'use client'
// import { useTranslation } from 'next-i18next'
// import type { TFuncKey } from 'i18next'
// import NextLink from 'next/link'
// import { useRouter,usePathname } from 'next/navigation'
// import { Button } from '@chakra-ui/react'

// export interface NavItemProps {
//   name: TFuncKey<'common'>
//   href: string
//   onClose: () => void
// }

// export const NavItem: React.FC<NavItemProps> = ({ name, href, onClose }) => {
//   const { t } = useTranslation('common')
//   const pathname  = usePathname()

//   return (
//     <NextLink href={href} passHref legacyBehavior>
//       <Button
//         as='a'
//         aria-current={pathname === href ? 'page' : 'false'}
//         variant='navItem'
//         onClick={onClose}
//       >
//         {t(name)}
//       </Button>
//     </NextLink>
//   )
// }
