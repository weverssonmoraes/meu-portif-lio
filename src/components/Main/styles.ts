import styled, { css } from 'styled-components';

import {
  DiHtml5,
  DiJavascript1,
  DiCss3Full,
  DiReact,
  DiGithubFull
} from '../../styles/icons'

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 17vh;

  /* mobile */

  @media (max-width: 768px) {
    margin-top: 17vh;
  }
`;

export const SectionMain = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  @media (max-width:768px) {
    align-items: baseline;
    margin-left: 20px;
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

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30vh;
  margin-bottom: 30vh;
`

export const TitleSkills = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #a1a1a1;
  margin-bottom: 30px;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const iconCSS = css`
  width: 80px;
  height: 80px;
  margin: 0 30px;
  cursor: pointer;
  transition: all ease .2s;
  fill: #a1a1a1;

  &:hover {
    transform: translate(0px, -8%);
  }

  &:nth-child(1) {
    &:hover {
      fill: #F16529
    }
  }
  &:nth-child(2) {
    &:hover {
      fill: #2BA8E4
    }
  }
  &:nth-child(3) {
    &:hover {
      fill: #EAD41C
    }
  }
  &:nth-child(4) {
    &:hover {
      fill: #5CCFEE
    }
  }
  &:nth-child(5) {
    &:hover {
      fill: white
    }
  }

  /* mobile */

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 0 10px;
  }
`

export const HtmlIcon = styled(DiHtml5)`
  ${iconCSS}
`
export const CssIcon = styled(DiCss3Full)`
  ${iconCSS}
`
export const JavaScriptIcon = styled(DiJavascript1)`
  ${iconCSS}
`
export const ReactIcon = styled(DiReact)`
  ${iconCSS}
`
export const GitHubIcon = styled(DiGithubFull)`
  ${iconCSS}
`
export const SectionPortifolio = styled.div`
  padding-bottom: 100vh;
  background: white;
`