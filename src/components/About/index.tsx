import React from 'react'
import Button from '../Button';
import * as S from './style'

const About = () => {
  return (
   <S.background>
    <S.divText>
    <S.title id='SOBRE'>
        SOBRE MIM
    </S.title>
    <S.text>
      Sou desenvolvedor e me comprometo com as funcionalidades.
      Maximizo a qualidade e eficiência das minhas entregas.
      Utilizo das melhores tecnologias do mercado, sempre atribuindo com as regras de negócio de sua empresa.
      Cultivo sempre a cultura de atendimento individual e profissional.
    </S.text>
    <Button/>
    </S.divText>
    <S.divImg/>
   </S.background>
  )
}

export default About;