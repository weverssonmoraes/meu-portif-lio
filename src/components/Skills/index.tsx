import * as C from './styles'

export const Skills = () => {
  return (
    <C.SkillsSection>
        <C.TitleSkills data-aos='fade-left'>My Skills</C.TitleSkills>
        <C.Icons data-aos='fade-right'>
          <C.HtmlIcon />
          <C.CssIcon />
          <C.JavaScriptIcon />
          <C.ReactIcon />
          <C.GitHubIcon />
        </C.Icons>
    </C.SkillsSection>
  )
  
}