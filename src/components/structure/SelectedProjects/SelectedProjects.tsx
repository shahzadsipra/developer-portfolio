'use client'


import { motion, Variants } from 'framer-motion'
import { projects } from '@/data/projects'
import { OtherProjectsMarquee } from './OtherProjectsMarquee'
import { ProjectShowcase } from './ProjectShowcase'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.25,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
}

export const SelectedProjects: React.FC = () => {


  return (
    <>
      <section
        id="projects"
        className="flex flex-col items-stretch py-20 px-4 md:px-8 space-y-16"
        style={{ scrollMarginTop: 'var(--header-height)' }}
      >
        <h2 className="text-4xl font-bold font-hanson uppercase">
          {/* {t('selected-projects')} */}
          Selected Projects

          </h2>
        <motion.div
          className="flex flex-col items-stretch space-y-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects
            .filter((project) => project.isShowcased)
            .map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectShowcase {...project} />
              </motion.div>
            ))}
        </motion.div>
      </section>
      <OtherProjectsMarquee />
    </>
  )
}
