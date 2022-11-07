import styled, { css } from "styled-components";

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