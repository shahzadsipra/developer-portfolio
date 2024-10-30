import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si'
import type { Project } from '@/utils/types'
const HypzzImage = '/img/projects/portfolio.jpg'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio',
    description: {
      en: 'Connecting influencers and brands to collaborate on product advertisements and more.',
      fr: 'Nous connectons des influenceurs et des marques pour collaborer sur des publicités de produits et plus encore.',
    },
    image: { src: HypzzImage },
    homepage: 'https://techdigi.dev',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
]
