'use client'

import { contributions } from '@/data/contributions'
import { Contribution } from './Contribution'

export const OpenSource: React.FC = () => {


  return (
    <section className="pb-20 border-t border-black">
      <div className="px-4 md:px-8 pt-32 pb-3 bg-gradient-to-r from-[#93A5CF] to-[#E4EFE9]">
        <h2 className="text-white text-4xl font-bold uppercase font-hanson break-all sm:break-normal">
          {/* {t('open-source')} */}
          Offering Services
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-16 pt-8 px-4 md:px-8 md:grid-cols-2 xl:grid-cols-3">
        {contributions.map((contribution) => (
          <Contribution key={contribution.repository} {...contribution} />
        ))}
      </div>
    </section>
  )
}
