import { useEffect } from 'react';
import * as C from './styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Skills } from '../Skills';

const Main = () => {
  useEffect(() => {
    Aos.init({duration: 600});
  }, [])

  return (
    <C.Container >
      <C.Elements>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </C.Elements>
      <C.SectionMain>
        <C.TextMain>Hi, I'm Weversson, <span>web developer</span></C.TextMain>
        <C.TextMain>Hi, I'm Weversson, <span>web developer</span></C.TextMain>
        <C.SubText>Front End Developer / React</C.SubText>
        <C.Contact>CONTACT ME</C.Contact>
      </C.SectionMain>

      <C.SectionPortifolio data-aos='fade-up'>
        <C.Portifolio>
        <C.TextPortifolio>My Portifolio</C.TextPortifolio>
        <C.Paragraph>Alguns projetos recentes criados por mim em meu periodo de estudos. <br /> Estudo a mais ou menos 1 ano e meio.</C.Paragraph>
        </C.Portifolio>
      </C.SectionPortifolio>

      <Skills />
    </C.Container>
  );
}

export default Main;