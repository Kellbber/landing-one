import React from "react";
import * as S from "./style";
import {TbHeartRateMonitor} from 'react-icons/tb'
import {GiConsoleController} from 'react-icons/gi'
import {SiPremierleague} from 'react-icons/si'
import {SiAntdesign} from 'react-icons/si'
import ButtonPort from "../ButtonPort";
const Portfolio = () => {
  return (
    <S.background>
      <S.divText id="PORTFOLIO">
        <S.title>PORTIFÓLIO</S.title>
        <S.text>Alguns dos projetos ou páginas que criei ao longo do tempo.</S.text>
        <ButtonPort/>
      </S.divText>

      <S.divServices>
        <S.firstProject href="https://colunareta.vercel.app" target="blank">
        <TbHeartRateMonitor size={150}/>
        </S.firstProject>
        <S.secondProject href="https://projeto-megadrive.vercel.app" target="blank">
          <GiConsoleController size={150}/>
        </S.secondProject>
        <S.thirdProject  href="https://league-client-clone-6sgu.vercel.app" target="blank">
        <SiPremierleague size={150}/>
        </S.thirdProject>
        <S.fourthProject href="https://www.figma.com/proto/Lg5Gq7rzLpwPCjq9MwoV5X/Petlove" target="blank">
        <SiAntdesign size={150}/>
        </S.fourthProject>
      </S.divServices>
    </S.background>
  );
};

export default Portfolio;
