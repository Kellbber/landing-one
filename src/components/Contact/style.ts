import styled, {css} from 'styled-components'

export const background = styled.div`
display: flex;
width: 100%;
height: 60vh;
flex-direction: column;
background-color: rgba(0,0,0,0.97);
justify-content: space-between;
align-items: center;
`

export const title = styled.div`
${({theme})=>css`
display: flex;
font-family: ${theme.constants.menuFontFamily};
font-size: 2.5rem;
color: ${theme.colors.primaryColor};
text-align: center;
font-weight: 600;
line-height: 1.2;
text-align: center;

`}

`

export const form = styled.form`
display: flex;
align-items: center;
justify-content: center;
width: 80%;
flex-direction: column;
align-self: center;


`

export const input = styled.input`
${({theme})=>css`

display: flex;
width: 30%;
align-items: center;
justify-content: center;
background-color: transparent;
border: transparent;
outline: none;
font-family: ${theme.constants.logoFontFamily};
font-size: 1rem;
color: ${theme.colors.primaryColor};
margin-top: 2rem;
margin-bottom: .3rem;
`}

`
export const DivLine = styled.div`
  width: 30%;
  align-self: center;
  padding: .5px;
  background-color: #5d5f65;

`

export const buttonContact = styled.a`
  ${({ theme }) => css`
font-size: .9rem;
  background: ${theme.colors.detailButton};
  color: white;
  border: transparent;
  padding: 0.5rem 0.5rem;
  width: 23%;
  text-decoration: none;
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

`}

`

export const buttonDisable = styled.div`
  ${({ theme }) => css`
font-size: .9rem;
  background: #bbb;
  color: white;
  border: transparent;
  padding: 0.5rem 0.5rem;
  width: 23%;
  text-decoration: none;
  margin: 3rem 0 0 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 1rem 0 1rem 0;
`}

`

export const footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: white;

    p{
      margin: 0;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  `}
`