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
  @media only screen and (max-width: 770px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
    @media only screen and (max-width: 770px) {
      font-size: 0.6rem;
      text-align: center;
      line-height: 0px;
    }
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
    font-family: ${theme.constants.textTopFontFamily};
    margin-top: 3rem;
    margin-left: 1rem;
    @media only screen and (max-width: 380px) {
      font-size: 1rem;
    }
    @media only screen and (max-width: 770px) {
      font-size: 1rem;
      text-align: center;
    }
  `}
`;

export const divServices = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media only screen and (max-width: 770px) {
    justify-content: space-evenly;
    width: 100%;
  }
  @media only screen and (max-width: 485px) {
    margin-bottom: 1rem;
  }

`;

export const oneService = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 30%;
    height: 28vh;
    margin-top: 1rem;
    background-color: rgba(255, 255, 255, 0.03);
    flex-direction: column;
    transition: ease-in-out 0.1s;
    :hover {
      background-color: rgba(255, 255, 255, 0.07);
    }
    @media only screen and (max-width: 770px) {
      height: 25vh;
    }
    @media only screen and (max-width: 500px) {
      width: 30%;
      height: 20vh;
      margin-left: .2rem;
   
    }
    @media only screen and (max-width: 380px) {
      width: 30%;
      height: 17vh;
    }
  `}
`;
export const icon = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 1rem 0 0 1rem;
  @media only screen and (max-width: 770px) {
    margin: 0;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const titleService = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const textServiceTitle = styled.p`
  ${({ theme }) => css`
    display: flex;

    width: 100%;
    font-family: ${theme.constants.menuFontFamily};
    color: white;
    font-weight: 800;
    margin: 0.2rem 0 0 0.5rem;
    @media only screen and (max-width: 770px) {
      font-size: 0.6rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 0.4rem;
    }
    @media only screen and (max-width: 400px) {
      font-size: 0.3rem;
    }
  `}
`;
export const textOneService = styled.p`
  ${({ theme }) => css`
    display: flex;
    width: 80%;
    font-family: ${theme.constants.menuFontFamily};
    color: whitesmoke;
    font-weight: 400;
    font-size: 0.8rem;

    margin: 0.5rem 0 0 0.5rem;
    @media only screen and (max-width: 770px) {
      font-size: 0.6rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      align-self: center;
      margin: 0;
    }
    @media only screen and (max-width: 500px) {
      font-size: 0.5rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      align-self: center;
      margin: 0;
    }
    @media only screen and (max-width: 380px) {
      font-size: 0.4rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      align-self: center;
      margin: 0;
    }
  `}
`;
