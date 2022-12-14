import styled, { css } from "styled-components";

export const button = styled.button`
  ${({ theme }) => css`
  font-size: 1rem;
  background: ${theme.colors.detailButton};
  color: #fff;
  border: transparent;
  padding: 0.5rem 0.5rem;
  width: 40%;
  margin: 3rem 0 0 1rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  a{
    text-decoration: none;
    color: rgba(69,69,69,0.8);
    font-family: ${theme.constants.menuFontFamily};
    font-weight: 500;
  }

::after {
  content: "";
  background: #ecf0f1;
  position: absolute;
  z-index: -1;
  padding: 0.85em 0.75em;
  display: block;
}::after {
  transition: all 0.35s;
}:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.35s;
}::after {
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
}
  `}
  @media only screen and (max-width: 900px) {
      margin: .3rem 0 .3rem 1rem; 
      font-size: .8rem;
      width: 30%;
     align-items: center;
     justify-content: center;
    }
    @media only screen and (max-width: 750px) {
      width: 40%;
    }
    @media only screen and (max-width: 570px) {
      width: 50%;
    }
    @media only screen and (max-width: 500px) {
      margin: .3rem 0 .3rem 1rem; 
      font-size: .6rem;
      width: 50%;
     align-items: center;
     justify-content: center;
    }
    @media only screen and (max-width: 350px) {
      width: 60%
    }
    @media only screen and (max-width: 290px) {
      width: 70%;
    }
`;
