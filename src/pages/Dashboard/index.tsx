import React from "react";
import Header from "../../components/Header";
import * as S from "./style";
import { useState, useEffect } from "react";
import {AiOutlineArrowDown} from 'react-icons/ai'
const Dashboard = () => {
  
  const [color, setColor] = useState<boolean>(false);

  const changeBackground = () => {
    if (window.scrollY > 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <S.background>
      <S.imgTop>
        <Header action={color} />
        <S.topText>
          <p>FRONTEND DEVELOPER & UI/UX</p>
        </S.topText>
        <S.textRotate>
          <S.textContainer>
            <S.textline>
              <S.textFirst>CRIAR</S.textFirst>
              <S.textFirst>INOVAR</S.textFirst>
              <S.textFirst>ORGANIZAR</S.textFirst>
              <S.textFirst>PROJETAR</S.textFirst>
              <S.textFirst>DESENVOLVER</S.textFirst>
              <S.textFirst>REALIZAR</S.textFirst>
              <S.textFirst>ENCANTAR</S.textFirst>
            </S.textline>
          </S.textContainer>
        </S.textRotate>
       <S.textFinal>
       Tornando o seu maior sonho em realidade.
       </S.textFinal>
       <S.divIcons>
        <S.imgGit/>
        <S.imgLink/>
       </S.divIcons>
       <S.arrowAnimated>
        Scroll down <AiOutlineArrowDown size={15}/>
       </S.arrowAnimated>
      </S.imgTop>

      <S.imgTop></S.imgTop>
    </S.background>
  );
};

export default Dashboard;
