import React from "react";
import Header from "../../components/Header";
import * as S from "./style";
import { useState, useEffect } from "react";
import {BsArrowUpShort} from 'react-icons/bs'
import {AiOutlineArrowDown} from 'react-icons/ai'
import About from "../../components/About";
import BoxService from "../../components/BoxService";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
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
    <S.background id="HOME">
      {color ?
      <S.scrollToTop href="#HOME">
        <BsArrowUpShort size={25}/>
      </S.scrollToTop>
      : null}
      <S.imgTop>
        <Header action={color} />
        <S.topText>
          <p>DESENVOLVEDOR FRONT-END & UI/UX</p>
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
        <S.imgGit href="https://www.github.com/Kellbber" target="blank"/>
        <S.imgLink href="https://www.linkedin.com/in/kellbber/" target="blank"/>
       </S.divIcons>
       <S.arrowAnimated href="#SOBRE">
        role para baixo <AiOutlineArrowDown size={15}/>
       </S.arrowAnimated>
      </S.imgTop>
      <About/>
      <BoxService/>
      <Portfolio/>
      {/* <Contact/> */}
    </S.background>
  );
};

export default Dashboard;
