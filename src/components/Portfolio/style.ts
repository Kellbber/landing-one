import styled , {css} from 'styled-components'

export const background = styled.div`
display: flex;
width: 100%;
height: 100vh;

background-color: rgba(0,0,0,0.97);
@media only screen and (max-width: 900px) {

     flex-direction: column;
     justify-content: center;
     align-items: center;
    }
`


export const divText = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
      justify-content: flex-start;
      align-items: center;
      margin-top: 2rem;
     
      height: 60vh;
    }
`;

export const text = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    width: 100%;
    margin-top: 1rem;
    font-family: ${theme.constants.textTopFontFamily};
    font-size: 1.2rem;
    color: #bbb;
    line-height: 22px;
    @media only screen and (max-width: 900px) {
      text-align: center;
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      line-height: 32px;
      margin-bottom: 1rem;
    }
    @media only screen and (max-width: 770px) {
        font-size: 1rem;
        text-align: center;
    }
    @media only screen and (max-width: 520px) {
        font-size: .8rem;
        text-align: center;
        line-height: 20px;
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
    @media only screen and (max-width: 900px) {
        font-size: 30px;
        text-align: center;
        
    }
    @media only screen and (max-width: 770px) {
        font-size: 25px;
        text-align: center;
    }
  `}
`;
export const divServices = styled.div`
  display: flex;
  width: 50%;
  height: 100vh;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  @media only screen and (max-width: 900px) {
      width: 100%;
      justify-content: space-evenly;
      align-items: flex-start; 
    }
    @media only screen and (max-width: 590px) {
      width: 100%;
      justify-content: space-evenly;
      align-items:flex-start;
    }
    @media only screen and (max-width: 530px) {

      
      justify-content: space-evenly;
    }
    @media only screen and (max-width: 400px) {
      justify-content: space-evenly;
    }
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
@media only screen and (max-width: 900px) {
      width: 30%;
      height: 25vh;
      margin-top: 1rem;
    }
    @media only screen and (max-width: 530px) {
      width: 20%;
    }
    @media only screen and (max-width: 400px) {
      width: 22%;
      height: 20vh;
    }
    @media only screen and (max-width: 360px) {
      width: 22%;
      height: 20vh;
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
@media only screen and (max-width: 900px) {
  width: 30%;
  height: 25vh;
      margin-top: 1rem;
    }
    @media only screen and (max-width: 530px) {
      width: 20%;
    }
    @media only screen and (max-width: 400px) {
      width: 22%;
      height: 20vh;
    }
    @media only screen and (max-width: 360px) {
      width: 22%;
      height: 20vh;
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
@media only screen and (max-width: 900px) {
  width: 30%;
  height: 25vh;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    @media only screen and (max-width: 530px) {
      width: 20%;
     
    }
    @media only screen and (max-width: 400px) {
      width: 22%;
      height: 20vh;
    }
    @media only screen and (max-width: 360px) {
      width: 22%;
      height: 20vh;
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
@media only screen and (max-width: 900px) {
  width: 30%;
  height: 25vh;
  margin-top: 1rem;
      margin-bottom: 3rem;
    }
    @media only screen and (max-width: 530px) {
      width: 20%;
 
    }
    @media only screen and (max-width: 400px) {
      width: 22%;
      height: 20vh;
    }
    @media only screen and (max-width: 360px) {
      width: 22%;
      height: 20vh;
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