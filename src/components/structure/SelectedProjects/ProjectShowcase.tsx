'use client'


// import NextImage from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@/utils/types'
import { config } from '@/config/config'

const MotionBox = motion.div

export const ProjectShowcase: React.FC<Project> = ({
  title,
  description,
  image,
  homepage,
  github,
}) => {


  return (
    <div
    onClick={()=>{
      // console.log(image)
    }}
      className=" flex flex-col md:flex-row h-96 px-6 border border-black overflow-hidden w-full"
      role="group"
    >
      {/* Text Section */}
      <div className="flex-2 py-4 flex flex-col justify-center space-y-4 w-1/2 pr-6">
        <h3 className="text-2xl font-bold font-hanson ">
          {title}
          </h3>
        <hr className="border-t border-black/50 opacity-100" />
        <p>

          {description.en}
          </p>
        <div className="flex space-x-4">
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              {/* {t('website')} */}
              website
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Github
            </a>
          )}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex-3 flex items-end w-1/2">
        {/* Image for Mobile */}
        <div className="md:hidden mt-4 pt-1.5 px-1.5 border border-black rounded-t-xl">
          <ImageWithBorder title={title} image={image} />
        </div>
        
        {/* Image for Desktop */}
        <MotionBox
          className="hidden md:block absolute pt-3.5 px-3.5 bg-[#F9FBFD] w-full top-0 left-0 right-0 border border-black border-b-0 rounded-t-lg"
          initial={{ y: '4rem' }}
          whileHover={{ y: '2.5rem' }}
        >
          <ImageWithBorder title={title} image={image} />
        </MotionBox>
      </div>
    </div>
  )
}

const ImageWithBorder: React.FC<Pick<Project, 'title' | 'image'>> = ({
  title,
  image,
}) => (
  <div className="relative w-full overflow-hidden border border-black border-t-1 rounded-t-xl">
    <img src={image.src} alt={title}  draggable="false" />
  </div>
)
