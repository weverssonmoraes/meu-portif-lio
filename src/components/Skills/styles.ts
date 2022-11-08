import styled, { css, keyframes } from "styled-components";

import {
  DiHtml5,
  DiJavascript1,
  DiCss3Full,
  DiReact,
  DiGithubFull
} from '../../styles/icons'

export const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30vh;
  margin-bottom: 30vh;
  overflow: hidden;
  white-space: nowrap;
`

export const TitleSkills = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin-bottom: 60px;
  text-align: center;
`

export const Icons = styled.div`
  animation: animate1 80s linear infinite;

  &:nth-child(2) {
    animation: animate1 80s reverse infinite;
    animation-delay: -60s;
  }

  @keyframes animate1 {
    0% {
      transform: translateX(-100%)
    }
    100% {
      transform: translateX(0%)
    }
  }
`


const iconCSS = css`
  width: 70px;
  height: 70px;
  margin: 0 15px;
  cursor: default;
  transition: 1s;
  fill: #a1a1a1;

  &:hover {
    transition: 0s;
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

  &:hover {
      fill: #F16529
    }
`
export const CssIcon = styled(DiCss3Full)`
  ${iconCSS}

  &:hover {
      fill: #2BA8E4
    }
`
export const JavaScriptIcon = styled(DiJavascript1)`
  ${iconCSS}

  &:hover {
      fill: #EAD41C
    }
`
export const ReactIcon = styled(DiReact)`
  ${iconCSS}

  &:hover {
      fill: #5CCFEE
    }
  
`
export const GitHubIcon = styled(DiGithubFull)`
  ${iconCSS}

  &:hover {
      fill: white
    }
`