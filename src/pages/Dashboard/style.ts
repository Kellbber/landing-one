import styled, {css} from 'styled-components'
import backgroundImage from '../../assets/images/background.png'

export const background = styled.section`
${({theme})=>css`
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;

`}

`
export const imgTop = styled.div`
display: flex;
width: 100%;
flex-direction: column;
background: url(${backgroundImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 100vh;
align-items: center;

`
export const topText = styled.div`
${({theme})=>css`
display: flex;
width: 100%;
align-items: center;
justify-content: space-around;
flex-direction: column;

height: 50vh;
p{
    font-family: ${theme.constants.textTopFontFamily};
    font-size: 14px;
    color: whitesmoke;
}
`}
`

export const textRotate = styled.div`
${({theme})=>css`
display: flex;
  flex-direction: column;
  margin-top: -6rem;
`}

`
export const textContainer = styled.div`
  display: flex;
  overflow: hidden;
  height: calc(56px + (64 - 56) * ((100vw - 320px) / (1600 - 320)));

`
export const textline = styled.div`
  transition: all 0.7s cubic-bezier(.92,.01,.28,.92);
  animation:  
    text-swiper 9s infinite,
    text-swiper-blur 9s infinite;
    @keyframes text-swiper {
  0% {
    transform: translateY(calc(0 * (56px + (64 - 56) * ((100vw - 320px) / (1600 - 320)))));
  }
  20% {
    transform: translateY(calc(-1 * (56px + (64 - 56) * ((100vw - 320px) / (1600 - 320)))));
  }
  40% {
    transform: translateY(calc(-2 * (56px + (64 - 56) * ((100vw - 320px) / (1600 - 320)))));
  }
  60% {
    transform: translateY(calc(-3 * (56px + (64 - 56) * ((100vw - 320px) / (1600 - 320)))));
  }
  70% {
    transform: translateY(calc(-4 * (56px + (64 - 56) * ((100vw - 320px) / (1600 - 320)))));
  }
  85% {
    transform: translateY(calc(-5 * (56px + (64 - 56) * ((100vw - 320px) / (1600 - 320)))));
  }
  90% {
    transform: translateY(calc(-6 * (56px + (64 - 56) * ((100vw - 320px) / (1600 - 320)))));
  }
  100% {
    transform: translateY(calc(-6 * (56px + (64 - 56) * ((100vw - 320px) / (1600 - 320)))));
  }
}

@keyframes text-swiper-blur {
  0% { opacity: 1; }
  10% { opacity: .2; }
  20% { opacity: 1; }
  30% { opacity: .2; }
  40% { opacity: 1; }
  50% { opacity: .2; }
  60% { opacity: 1; }
  65% { opacity: .2; }
  70% { opacity: 1; }
  80% { opacity: .2; }
  85% { opacity: 1; }
  90% { opacity: .2; }
  100% {  opacity: 1; }
}
`
export const textFirst = styled.p`
${({theme})=>css`
font-size: calc(40px + (48 - 40) * ((100vw - 320px) / (1600 - 320)));
  line-height: calc(48px + (56 - 48) * ((100vw - 320px) / (1600 - 320)));
text-align: center;
margin-bottom:.5rem;
  padding: 0;
  color: ${theme.colors.primaryColor};
  font-family: ${theme.constants.textTopFontFamily};
`}
`

export const textFinal = styled.p`
${({theme})=>css`
display: flex;
width: 100%;
align-items: center;
text-align: center;
justify-content: center;
margin-top: 2rem;
font-family: ${theme.constants.menuFontFamily};
font-weight: 400;
color: ${theme.colors.primaryColor};
font-size: .8rem;
`}

`