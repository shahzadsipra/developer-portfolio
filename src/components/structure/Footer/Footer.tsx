'use client'


import { VscArrowUp } from 'react-icons/vsc'
import { config } from '@/config/config'

const links: { name: string; href: string }[] = [
  { name: 'Email', href: config.email_link },
  { name: 'Github', href: config.github },
  { name: 'LinkedIn', href: config.linkedin },
  { name: 'PGP/GPG Key', href: '/gpg.txt' },
]

export const Footer: React.FC = () => {


  return (
    <footer className="flex flex-col md:flex-row justify-between mt-4 pt-12 pb-24 px-4 md:px-8 border-t border-black">
      <div className="flex flex-col lg:flex-row mb-16 md:mb-0  lg:space-x-16">
        <p className="uppercase">{config.copyright}</p>
        <p className="uppercase maple flex justify-center items-center">
        {/* {
        t('made-in-mtl')} */}
        Crafted in Pakistan
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-16">
        <div className="flex flex-col sm:flex-row w-full justify-between sm:justify-start space-y-6 sm:space-y-0 sm:space-x-8">
          {links.map(({ name, href }) => (
            <a key={name} href={href} title={name} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ))}
        </div>
        <button
          aria-label={'Go Up'}
          title={'Go Up'}
          className="p-2 rounded-full text-blue-600 hover:bg-blue-100"
          onClick={() => window.scrollTo(0, 0)}
        >
          <VscArrowUp />
        </button>
      </div>
    </footer>
  )
}

// 'use client'
// import { useTranslation } from 'next-i18next'
// import { Flex, Link, Text, HStack, IconButton, Stack } from '@chakra-ui/react'
// import { VscArrowUp } from 'react-icons/vsc'
// import { config } from '@/config/config'

// const links: { name: string; href: string }[] = [
//   { name: 'Email', href: config.email_link },
//   { name: 'Github', href: config.github },
//   { name: 'LinkedIn', href: config.linkedin },
//   { name: 'PGP/GPG Key', href: '/gpg.txt' },
// ]

// export const Footer: React.FC = () => {
//   const { t } = useTranslation('common')

//   return (
//     <Flex
//       as='footer'
//       align={{ base: 'stretch', md: 'center' }}
//       justify='space-between'
//       direction={{ base: 'column', md: 'row' }}
//       mt='4'
//       pt='12'
//       pb='24'
//       px={{ base: '4', md: '8' }}
//       borderColor='black'
//       borderTop='1px solid'
//     >
//       <Stack
//         direction={{ base: 'column', lg: 'row' }}
//         spacing={{ base: '6', lg: '16' }}
//         mb={{ base: '16', md: 0 }}
//       >
//         <Text casing='uppercase'>{config.copyright}</Text>
//         <Text casing='uppercase' cursor='url(/img/maple-leaf.png), text'>
//           {t('made-in-mtl')}
//         </Text>
//       </Stack>
//       <Stack
//         direction={{ base: 'column', md: 'row' }}
//         align={{ base: 'flex-start', md: 'center' }}
//         spacing='16'
//       >
//         <HStack
//           w='full'
//           spacing={{ base: '6', md: '8' }}
//           justify={{ base: 'space-between', sm: 'flex-start' }}
//         >
//           {links.map(({ name, href }) => (
//             <Link
//               key={name}
//               title={name}
//               href={href}
//               variant='social'
//               isExternal
//             >
//               {name}
//             </Link>
//           ))}
//         </HStack>
//         <IconButton
//           aria-label={t('go-to-top')}
//           title={t('go-to-top')}
//           icon={<VscArrowUp />}
//           variant='icon'
//           size='icon'
//           onClick={() => window.scrollTo(0, 0)}
//         />
//       </Stack>
//     </Flex>
//   )
// }
