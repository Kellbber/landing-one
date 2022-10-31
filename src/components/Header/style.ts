import styled, { css } from "styled-components";

type Props = {
  extendBar: boolean;
};
export const Header = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const leftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const rightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-left: 50px;
`;

export const NavbarExtendContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 30%;
align-self: flex-start;
margin-top: 2rem;
border-radius: .2rem;
background: rgba(66,65,65,0.9);
@media (min-width: 700px){
  display: none;
}
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
`;
export const NavbarLink = styled.a`
  ${({ theme }) => css`
    color: white;
    font-size: 0.8rem;
    font-family: ${theme.constants.menuFontFamily};
    text-decoration: none;
    margin: 10px;
    opacity: 1;
    transition: ease-in-out 0.4s;

    :hover {
      opacity: 0.5;
    }
    @media (max-width: 700px){
  display: none;
}
  `}
`;
export const NavbarLinkExtend = styled.a`
  ${({ theme }) => css`
    color: white;
    font-size: 0.8rem;
    font-family: ${theme.constants.menuFontFamily};
    font-weight: 500;
    text-decoration: none;
    margin: 10px;
    opacity: 1;
    transition: ease-in-out 0.4s;
 
    :hover {
      opacity: 0.5;
    }

  `}
`;

export const logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    font-family: ${theme.constants.logoFontFamily};
    font-weight: 800;
    color: ${theme.colors.primaryColor};
    font-size: 2.5rem;
    margin-right: 1rem;
    @media (max-width: 700px){
    font-size: 2rem;
    margin-right: 3rem;
}
  `}
`;
export const point = styled.p`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.detailColor};
  `}
`;

export const OpenLinksButton = styled.button`
width: 50px;
height: 30px;
background: none;
border: none;
color: white;
font-size: 30px;
cursor: pointer;
@media (min-width: 700px){
  display: none;
}
`;
