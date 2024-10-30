'use client'


export interface ContributionProps {
  user: string
  repository: string
  role: { label: string; color: string }
  githubUrl: string
  description: { en: string; fr: string }
  topics: string[]
  language: { name: string; color: string; icon: React.ComponentType }
}

export const Contribution: React.FC<ContributionProps> = ({
  user,
  repository,
  role,
  githubUrl,
  description,
  topics,
  language,
}) => {

  

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-4 border border-black ${language.color} 
      
      transition-all  hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]
      `}
    >
      <div className="flex flex-col h-full">
        {/* User and Repository */}
        <div className="flex items-center space-x-1 text-xl">
          <span>{user}</span>
          <span>/</span>
          <span className="font-semibold">{repository}</span>
        </div>
        
        {/* Role Badge */}
        <div className="mt-2 mb-4">
          <span
            className={`px-2 py-1 text-sm rounded-md`}
            style={{ backgroundColor: role.color, color: '#fff' }}
          >
            {role.label}
          </span>
        </div>

        {/* Description */}
        <p className="flex-1 mb-4">{description.en}</p>

        {/* Topics and Language Icon */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full"
              >
                {topic}
              </span>
            ))}
          </div>
          {/* <language.icon className="w-6 h-6" style={{ color: language.color }} /> */}
        </div>
      </div>
    </a>
  )
}
