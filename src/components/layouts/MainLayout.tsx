import type { ReactNode } from 'react'
import { Footer, Header } from '@/components/structure'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => (
  <div className="container mx-auto">
    <div className="flex flex-col min-h-screen border border-black border-t sm:border-t-0 sm:border-b-0">
      <Header />
      <main className="flex-1" {...props}>
        {children}
      </main>
      <Footer />
    </div>
  </div>
)


// import type { ReactNode } from 'react'
// import { Box, type BoxProps, Flex, Container } from '@chakra-ui/react'
// import { Footer, Header } from '@/components/structure'

// interface MainLayoutProps extends BoxProps {
//   children: ReactNode
// }

// export const MainLayout: React.FC<MainLayoutProps> = ({
//   children,
//   ...props
// }) => (
//   <Container maxW='container.xl'>
//     <Flex
//       minH='100vh'
//       direction='column'
//       borderColor='black'
//       borderTop={{ base: '1px solid', sm: 'none' }}
//       borderBottom={{ base: '1px solid', sm: 'none' }}
//       borderLeft='1px solid'
//       borderRight='1px solid'
//     >
//       <Header />
//       <Box as='main' flex={1} {...props}>
//         {children}
//       </Box>
//       <Footer />
//     </Flex>
//   </Container>
// )
