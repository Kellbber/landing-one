import styled, { css } from "styled-components";

export const ButtonSubmit = styled.a`
  ${({ theme }) => css`
font-size: .9rem;
  background: ${theme.colors.detailButton};
  color: white;
  border: transparent;
  padding: 0.5rem 0.5rem;
  width: 23%;
  margin: 3rem 0 0 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 1rem 0 1rem 0;
  :hover{
    color: rgba(0,0,0,0.60);
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
@media only screen and (max-width: 900px) {
       font-size: .8rem;
    }
    @media only screen and (max-width: 500px) {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 350px) {
        font-size: 1rem;
    }
    @media only screen and (max-width: 280px) {
        font-size: .8rem;
    }
`}
`;
