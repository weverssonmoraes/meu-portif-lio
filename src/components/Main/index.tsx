import * as C from './styles';
import {motion} from 'framer-motion'

const Main = () => {
  return (
    <C.Container >
      <C.SectionMain>
        <C.TextMain as={motion.h1} >Hi, I'm Weversson <br /> <span>web developer</span></C.TextMain>
        <C.SubText>Front End Developer / React</C.SubText>
        <C.Contact>CONTACT ME</C.Contact>

      </C.SectionMain>
      <C.SkillsSection>
        <C.TitleSkills>My Skills</C.TitleSkills>
        <C.Icons>
          <C.HtmlIcon />
          <C.CssIcon />
          <C.JavaScriptIcon />
          <C.ReactIcon />
          <C.GitHubIcon />
        </C.Icons>
      </C.SkillsSection>
      <C.SectionPortifolio>
        olá mundo
      </C.SectionPortifolio>
    </C.Container>
  );
}

export default Main;