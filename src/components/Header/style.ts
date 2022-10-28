import styled, { css } from "styled-components";

export const Header = styled.header`
  background-color: transparent;
  min-width: 100%;
  height: 80px;
  z-index: 999;
  align-items: center;
  position: fixed;
  color: white;
  flex-direction: row;
  display: flex;
`;

export const logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 20%;
    margin: 0 0 0 1rem;
    font-family: ${theme.constants.logoFontFamily};
    font-weight: 800;
    color: ${theme.colors.primaryColor};
    font-size: 2.5rem;
  `}
`;
export const point = styled.p`
${({theme})=>css`
display: flex;
color: ${theme.colors.detailColor}

`}
`
export const menu = styled.div`
${({theme})=>css`
display: flex;
width: 80%;
justify-content: flex-end;
margin-right: 1rem;
 ul{
  display: flex;
  align-items: center;

 }
 li{
  list-style: none;
  margin-left: 1rem;
 }
 a{
  text-decoration: none;
  font-weight: bold;
  color: ${theme.colors.primaryColor};
  opacity: 1;
  font-family: ${theme.constants.menuFontFamily};
  font-size: .7rem;
  transition: ease-in-out .2s;
 }
 a:hover{
  opacity: 0.7;
 }
`}
`
