import { SiCloudways, SiFlutter, SiJavascript, SiPytorch, SiSecurityscorecard, SiSolidity, SiTypescript } from 'react-icons/si'

import { ServicesProps } from '@/components/structure/Services/Offered'

export const servicesOffering: ServicesProps[] = [
  {
    main: 'development',
    sub: 'websites',
    role: {
      label: 'specialist',
      color: 'blue',
    },
    url: '',
    description: "Crafting exceptional web experiences with cutting-edge technologies. Specialized in building scalable, responsive, and performance-optimized applications that deliver real business value.",
    topics: ['react', 'nextjs', 'node', 'typescript'],
    language: {
      name: 'TypeScript',
      color: 'shadow-blue',
      icon:<SiTypescript className="w-6 h-6" style={{ color: '#1C6ED2FF' }}/>
    },
  },
  {
    main: 'development',
    sub: 'blockchain',
    role: {
      label: 'specialist',
      color: 'green',
    },
    url: '',
    description: "Revolutionizing digital transactions through innovative blockchain solutions. Expert in smart contracts, DeFi protocols, and NFT marketplaces that shape the future of Web3.",
    topics: ['smart-contract', 'dapps', 'defi', 'nft'],
    language: {
      name: 'Solidity',
      color: 'shadow-yellow',
      icon:<SiSolidity className="w-6 h-6 " style={{ color: '#020202FF' }}/>
    },
  },
  {
    main: 'development',
    sub: 'mobile',
    role: {
      label: 'expert',
      color: 'orange',
    },
    url: '',
    description: "Creating seamless mobile experiences that captivate users across platforms. Specialized in building high-performance native and cross-platform applications that users love.",
    topics: ['hybrid', 'android', 'ios'],
    language: {
      name: 'React Native',
      color: 'shadow-orange',
      icon:<SiFlutter className="w-6 h-6" style={{ color: '#1C6ED2FF' }}/>
    },
  },
  {
    main: 'development',
    sub: 'cloud',
    role: {
      label: 'expert',
      color: 'violet',
    },
    url: '',
    description: "Architecting robust cloud solutions that scale effortlessly. Expert in designing and implementing cloud-native applications with cutting-edge DevOps practices.",
    topics: ['aws', 'azure', 'kubernetes'],
    language: {
      name: 'Infrastructure',
      color: 'shadow-pink',
      icon:<SiCloudways className="w-6 h-6" style={{ color: '#D2531CFF' }}/>
    },
  },
  {
    main: 'development',
    sub: 'ai-ml',
    role: {
      label: 'specialist',
      color: 'purple',
    },
    url: '',
    description: "Transforming data into intelligent solutions through advanced AI/ML technologies. Building smart systems that drive innovation and business intelligence.",
    topics: ['machine-learning', 'deep-learning', 'nlp'],
    language: {
      name: 'Python',
      color: 'shadow-purple',
      icon:<SiPytorch className="w-6 h-6" style={{ color: '#1C6ED2FF' }}/>
    },
  },
  {
    main: 'development',
    sub: 'cybersecurity',
    role: {
      label: 'specialist',
      color: 'red',
    },
    url: '',
    description: "Securing digital assets with state-of-the-art cybersecurity solutions. Protecting your applications and data with comprehensive security measures and continuous monitoring.",
    topics: ['security', 'pentesting', 'audit'],
    language: {
      name: 'Security',
      color: 'shadow-red',
      icon:<SiSecurityscorecard className="w-6 h-6" style={{ color: '#077525FF' }}/>
    },
  },
  // {
  //   main: 'development',
  //   sub: 'ecommerce',
  //   role: {
  //     label: 'specialist',
  //     color: 'emerald',
  //   },
  //   url: '',
  //   description: "Building powerful e-commerce platforms that drive sales and growth. Creating seamless shopping experiences with advanced features and integrations.",
  //   topics: ['shopify', 'woocommerce', 'payments'],
  //   language: {
  //     name: 'Commerce',
  //     color: 'shadow-green',
  //     icon:<SiSolidity className="w-6 h-6" style={{ color: 'shadow-yellow' }}/>
  //   },
  // },
  // {
  //   main: 'development',
  //   sub: 'gaming',
  //   role: {
  //     label: 'specialist',
  //     color: 'violet',
  //   },
  //   url: '',
  //   description: "Developing immersive gaming experiences that engage and entertain. Creating cross-platform games with stunning graphics and smooth gameplay.",
  //   topics: ['unity', 'unreal', 'webgl'],
  //   language: {
  //     name: 'Gaming',
  //     color: 'shadow-purple',
  //     icon:<SiSolidity className="w-6 h-6" style={{ color: 'shadow-yellow' }}/>
  //   },
  // },
  // {
  //   main: 'development',
  //   sub: 'data',
  //   role: {
  //     label: 'expert',
  //     color: 'indigo',
  //   },
  //   url: '',
  //   description: "Unlocking insights through advanced data analytics and visualization. Transform raw data into actionable intelligence with powerful analytics solutions.",
  //   topics: ['analytics', 'visualization', 'big-data'],
  //   language: {
  //     name: 'Data',
  //     color: 'shadow-indigo',
  //     icon:<SiSolidity className="w-6 h-6" style={{ color: 'shadow-yellow' }}/>
  //   },
  // }
];
// export const servicesOffering: ServicesProps[] = [
//   {
//     main: 'development',
//     sub: 'websites',
//     role: {
//       label: 'specialist',
//       color: 'green',
//     },
//     url: 'https://github.com/shahzadsipra/react-column-select',
//     description: "React component to select options by transferring them from one column to another.",
//     topics: ['react', 'nextjs', 'node', 'typescript'],
//     language: {
//       name: 'Typescript',
//       icon: SiTypescript,
//       color: 'shadow-blue',
//     },
//   },
//   {
//     main: 'development',
//     sub: 'blockchain',
//     role: {
//       label: 'specialist',
//       color: 'green',
//     },
//     url: '',
//     description: "Astrofox is a motion graphics program that lets you turn audio into amazing videos.",
//     topics: ['smart-contract', 'dapps', 'defi','nft'],
//     language: {
//       name: 'Solidity',
//       icon: SiSolidity,
//       color: 'shadow-yellow ',
//     },
    
//   },
//   {
//     main: 'development',
//     sub: 'mobile',
//     role: {
//       label: 'expert',
//       color: 'orange',
//     },
//     url: '',
//     description: "Astrofox is a motion graphics program that lets you turn audio into amazing videos.",
//     topics: ['hybrid', 'andorid', 'ios'],
//     language: {
//       name: 'Flutter',
//       icon: SiFlutter,
//       color: 'shadow-yellow ',
//     },
//     {
//       main: 'development',
//       sub: 'mobile',
//       role: {
//         label: 'expert',
//         color: 'orange',
//       },
//       url: '',
//       description: "Astrofox is a motion graphics program that lets you turn audio into amazing videos.",
//       topics: ['hybrid', 'andorid', 'ios'],
//       language: {
//         name: 'Flutter',
//         icon: <SiFlutter>,
//         color: 'shadow-yellow ',
//       },
    
//   },
// ]
