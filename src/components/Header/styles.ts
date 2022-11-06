import styled, { css } from 'styled-components';
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineMail,
  GiHamburgerMenu
} from '../../styles/icons'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  max-width: 1100px;
  margin: 0 auto;


  @media (max-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const HamburguerMenu = styled(GiHamburgerMenu)`
  position: absolute;
  right: 0;
  margin-right: 5px;
  width: 35px;
  height: 35px;
  fill: #a1a1a1;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  
  ul {
    display: flex;
    margin: 10px;

    @media(max-width: 768px) {
      display: none;
    }

    li {
      cursor: pointer;
      font-weight: 600;
      padding: 5px 5px;
      margin: 0 5px;
      list-style: none;
      transition: all ease .2s;

      &:hover {
        color: #f35815;
      }
    }
  }
  
  img {
    width: 40px;
    height: 40px;
  }
`;


export const ListIcon = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  `;

const iconCss = css`
    width: auto;
    height: 30px;
    margin-right: 10px;
    cursor: pointer;
    transition: all ease .2s;
  
    &:hover {
      &:nth-child(1) {
        fill: #a1a1a1;
      }
      &:nth-child(2) {
        fill: #a1a1a1;
      }
      &:nth-child(3) {
        fill: #a1a1a1;
      }
    }
`

export const GitHubIcon = styled(AiFillGithub)`
  ${iconCss}
`
export const LinkedinIcon = styled(AiOutlineLinkedin)`
  ${iconCss}
`
export const EmailIcon = styled(AiOutlineMail)`
  ${iconCss}
`