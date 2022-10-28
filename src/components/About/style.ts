import styled, {css} from 'styled-components'

export const background = styled.section`
${({theme})=>css`
background-color: ${theme.colors.backgroundAbout};
width: 100%;
height: 100vh;
justify-content: center;
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
    text-align: right;
    `}

`