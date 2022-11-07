import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 17vh;

  /* mobile */

  @media (max-width: 768px) {
    margin-top: 20vh;
  }
`;

export const SectionMain = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40vh;
  
  @media (max-width:768px) {
    align-items: baseline;
    margin-left: 20px;
    margin-bottom: 25vh;

  }
`

export const TextMain = styled.h1`
  font-size: 95px;
  line-height: 95px;
  font-weight: 400;
  text-align: center;
  cursor: default;
  width: 800px;
  &:nth-child(2) {
    position: absolute;
    filter: blur(150px);
  }
  
  
  span {
    font-weight: 500;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(135deg,#0e73cc 1.93%,#624bbb 14.86%,#ff455d 48.09%,#f35815 77.82%,#a78103 97.3%);
  }

  @media (max-width: 768px) {
    text-align: start;
    font-weight: 600;
    font-size: 65px;
    line-height: 70px;
    width: 450px;
  }

  @media (max-width: 600px) {
    text-align: start;
    font-weight: 600;
    font-size: 48px;
    line-height: 50px;
    width: 340px;
  }
  @media (max-width: 390px) {
    text-align: start;
    font-weight: 600;
    font-size: 40px;
    line-height: 45px;
    width: 280px;
  }
`;

export const SubText = styled.p`
  font-size: 20px;
  margin-top: 40px;
  font-weight: 600;
  color: #a1a1a1;

  /* mobile */

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
`

export const Contact = styled.button`
  display: inline;
  background: none;
  padding: 10px 25px;
  border: 1px solid #f35815;
  margin-top: 40px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    border: 1px solid white;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const SectionPortifolio = styled.div`
  padding-top: 20vh;
  padding-bottom: 20vh;
  background: #f3f3f3;
  margin: 0 auto;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Portifolio = styled.div`

`

export const TextPortifolio = styled.h1`
  font-size: 50px;
  color: #1D1D1D;
`