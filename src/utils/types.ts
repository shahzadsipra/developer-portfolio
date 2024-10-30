

export interface Image {
  src: string
}

export interface Tag {
  label: string
  colorScheme: string
}

export interface RoleType {
  label: 'creator' | 'contributor'
  color: string
}

export interface Skill {
  name: string;
  // icon:JSX.Element;
  icon: any;
  color: string;
}

export interface SkillGroup {
  id: string
  category: string
  skills: Skill[]
}

export interface Project {
  id: string
  title: string
  description: {
    en: string
    fr: string
  }
  image: Image
  homepage?: string
  github?: string
  technologies: Skill[]
  tags: Tag[]
  isShowcased: boolean
}
