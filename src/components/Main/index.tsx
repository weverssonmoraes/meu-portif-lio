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

      <C.SectionPortifolio data-aos='fade-up'>
        <C.Portifolio>
        <C.TextPortifolio>My Portifolio</C.TextPortifolio>

        </C.Portifolio>
      </C.SectionPortifolio>
    </C.Container>
  );
}

export default Main;