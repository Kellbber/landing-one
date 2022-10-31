import styled, { css } from "styled-components";
import backgroundImage from "../../assets/images/background-about.jpg";

export const backgroundService = styled.section`
  display: flex;
  background: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const divText = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  justify-content: center;

  flex-direction: column;
`;
export const text = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    width: 100%;
    margin-top: 1rem;
    font-family: ${theme.constants.textTopFontFamily};
    font-size: 0.8rem;
    color: #bbb;
    line-height: 22px;
  `}
`;

export const title = styled.h2`
  ${({ theme }) => css`
    font-size: 32px;
    color: #fff;
    margin: 0 0 10px;
    font-weight: 600;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: -0.04em;
    font-family: ${theme.constants.menuFontFamily};
    margin-left: 1rem;
  `}
`;

export const divServices = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const oneService = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 40%;
    height: 28vh;
    margin-top: 1rem;
    background-color: rgba(255, 255, 255, 0.03);
    flex-direction: column;
    transition: ease-in-out .1s;
    :hover{
      background-color: rgba(255, 255, 255, 0.07);
    }
  `}
`;
export const icon = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 1rem 0 0 1rem;
`;

export const titleService = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const textServiceTitle= styled.p`
${({theme})=>css`
display: flex;

width: 100%;
font-family: ${theme.constants.menuFontFamily};
color: white;
font-weight: 800;
margin: .2rem 0 0 .5rem;
`}

`
export const textOneService = styled.p`
${({theme})=>css`
display: flex;
width: 80%;
font-family: ${theme.constants.menuFontFamily};
color: whitesmoke;
font-weight: 400;
font-size: .8rem;

margin: .5rem 0 0 .5rem;

`}
`