import styled , {css} from 'styled-components'

export const background = styled.div`
display: flex;
width: 100%;
height: 100vh;

background-color: rgba(0,0,0,0.97);

`


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
    font-family: ${theme.constants.textTopFontFamily};
    margin-top: 3rem;
    margin-left: 1rem;
  `}
`;
export const divServices = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const firstProject = styled.a`
${({theme})=>css`
display: flex;
background-color: rgb(46, 168, 220); ;
width: 50%;
height: 40vh;
flex-direction: column;
justify-content: center;
transition: ease-in-out .5s;
border: 10px solid transparent;
cursor: pointer;
align-items: center;
list-style: none;
text-decoration: none;
color: rgba(255,255,255,0.97);
:hover{
    background-color: rgba(255,255,255,0.9);
    border: 10px solid rgb(46,168,220);
    color: gray;
}
`}

`
export const secondProject = styled.a`
${({theme})=>css`
display: flex;
background-color: #ff4c4c;
width: 50%;
height: 40vh;
flex-direction: column;
justify-content: center;
transition: ease-in-out .5s;
border: 10px solid transparent;
cursor: pointer;
align-items: center;
list-style: none;
text-decoration: none;
color: rgba(255,255,255,0.97);
:hover{
    background-color: rgba(255,255,255,0.9);
    border: 10px solid #ff4c4c;
    color: gray;
}
`}

`
export const thirdProject = styled.a`
${({theme})=>css`
display: flex;
background-color: #0A956B;
width: 50%;
height: 40vh;
flex-direction: column;
justify-content: center;
transition: ease-in-out .5s;
border: 10px solid transparent;
cursor: pointer;
align-items: center;
list-style: none;
text-decoration: none;
color: rgba(255,255,255,0.97);
:hover{
    background-color: rgba(255,255,255,0.9);
    border: 10px solid #0A956B;
    color: gray;
}
`}

`
export const fourthProject = styled.a`
${({theme})=>css`
display: flex;
background-color: #0F102E;
width: 50%;
height: 40vh;
flex-direction: column;
justify-content: center;
transition: ease-in-out .5s;
border: 10px solid transparent;
cursor: pointer;
align-items: center;
list-style: none;
text-decoration: none;
color: rgba(255,255,255,0.97);
:hover{
    background-color: rgba(255,255,255,0.9);
    border: 10px solid #0F102E;
    color: gray;
}
`}

`

export const imgFirstProject = styled.img`
display: flex;
background: url();
background-position: center;
background-size: contain;
background-repeat: no-repeat;
padding: 4rem 3rem 4rem 3rem;
transition: ease-in-out .5s;
`
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
justify-content: center;
`}
`