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
background: url(${backgroundImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 100vh;




`