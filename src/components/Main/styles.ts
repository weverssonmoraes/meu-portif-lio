import styled from 'styled-components';

export const Elements = styled.div`
  div {
    position: absolute;
    width: 60px;
    height: 60px;
    background: transparent;
    border: 6px solid white;
    overflow-x: hidden;
    overflow-y: hidden;

    &:nth-child(1) {
      top: 12%;
      left: 42%;
      animation: animate 10s linear infinite;
    }
    &:nth-child(2) {
      top: 50%;
      left: 90%;
      animation: animate 7s linear infinite;
    }
    &:nth-child(3) {
      top: 17%;
      left: 10%;
      animation: animate 9s linear infinite;
    }
    &:nth-child(4) {
      top: 20%;
      left: 60%;
      animation: animate 10s linear infinite;
    }
    &:nth-child(5) {
      top: 50%;
      left: 19%;
      animation: animate 10s linear infinite;
    }
    &:nth-child(6) {
      top: 67%;
      left: 60%;
      animation: animate 6s linear infinite;
    }
    &:nth-child(7) {
      top: 80%;
      left: 70%;
      animation: animate 12s linear infinite;
    }
    &:nth-child(8) {
      top: 60%;
      left: 80%;
      animation: animate 15s linear infinite;
    }
    &:nth-child(9) {
      top: 32%;
      left: 25%;
      animation: animate 16s linear infinite;
    }
    &:nth-child(10) {
      top: 90%;
      left: 25%;
      animation: animate 9s linear infinite;
    }
  }

  @keyframes animate {
    0% {
      transform: scale(0) translateY(0px) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(1.3) translateY(-90px) rotate(360deg);
      border-radius: 50%;
      opacity: 0;
    }
  }
`

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 17vh;

  /* mobile */

  @media (max-width: 768px) {
    margin-top: 25vh;
  }
`;

export const SectionMain = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40vh;
  
  @media (max-width:768px) {
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
  z-index: 1;
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
    text-align: center;
    font-weight: 600;
    font-size: 65px;
    line-height: 70px;
    width: 550px;
  }

  @media (max-width: 600px) {
    text-align: center;
    font-weight: 600;
    font-size: 48px;
    line-height: 50px;
    width: 440px;
  }
  @media (max-width: 390px) {
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    line-height: 45px;
    width: 380px;
  }
`;

export const SubText = styled.p`
  font-size: 20px;
  margin-top: 40px;
  font-weight: 600;
  z-index: 1000;
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
  z-index: 1000;
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
  padding-top: 10vh;
  padding-bottom: 40vh;
  display: flex;
`

export const Portifolio = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

export const TextPortifolio = styled.h1`
  font-size: 50px;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;

  @media (max-width:768px) {
    font-size: 38px;
  }
`

export const Paragraph = styled.p`
  text-align: center;
  color: #a1a1a1;
  font-size: 20px;

  @media (max-width: 390px) {
    font-size: 16px;
    width: 350px;
  }
`