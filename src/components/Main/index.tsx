import { useEffect } from 'react';
import * as C from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    Aos.init({duration: 600});
  }, [])

  return (
    <C.Container >
      <C.SectionMain>
        <C.TextMain>Hi, I'm Weversson, <span>web developer</span></C.TextMain>
        <C.TextMain>Hi, I'm Weversson, <span>web developer</span></C.TextMain>
        <C.SubText>Front End Developer / React</C.SubText>
        <C.Contact>CONTACT ME</C.Contact>
      </C.SectionMain>


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


      <C.SectionPortifolio>
        olá mundo
      </C.SectionPortifolio>
    </C.Container>
  );
}

export default Main;