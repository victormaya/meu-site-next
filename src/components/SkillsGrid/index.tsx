import React from 'react'
import { SkillsContainer, SkillItem } from './styled'

interface ISkill {
  image: string
  title: string
  type: string
}

function SkillsGrid({ skills }: { skills: ISkill[] }) {
  return (
    <SkillsContainer>
      {skills.map((skill) => (
        <SkillItem key={skill.title}>
          <div className="skill-icon">
            <img src={skill.image} alt={skill.title} />
          </div>
          <span>{skill.title}</span>
        </SkillItem>
      ))}
    </SkillsContainer>
  )
}

export default SkillsGrid
