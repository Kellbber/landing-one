import styled, {css} from 'styled-components'
import person from '../../assets/images/person-about.jpg'
export const background = styled.section`
${({theme})=>css`
width: 100%;
height: 60vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
`}

`
export const title = styled.h2`
    ${({theme})=>css`
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
    @media (max-width: 800px){
        font-size: 22px;
}
    `}


`

export const divText = styled.div`
display: flex;
width: 50%;
flex-direction: column;
background-color: rgba(0,0,0,0.97);
@media (max-width: 800px){
  width: 100%;
  align-items: center;
  justify-content: center;
}
`

export const text = styled.p`
${({theme})=>css`
display: flex;
align-items: center;
margin-left: 1rem;
width: 100%;
margin-top: 1rem;
font-family: ${theme.constants.textTopFontFamily};
font-size: .8rem;
color: #bbb;
line-height: 22px;
@media (max-width: 800px){
        line-height: 18px;
        align-items: center;
        justify-content: center;
        text-align: center;
}
`}

`
export const divImg = styled.div`
display: flex;
width: 50%;
align-items: center;
justify-content: center;
background: url(${person});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 800px){
        display: none;
}
`