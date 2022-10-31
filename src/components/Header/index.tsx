import React from "react";
import * as S from "./style";

type Action = {
  action:boolean;
}
const Header = ({action}:Action) => {
  return (
    <S.Header style={{backgroundColor: action ? "rgba(66,65,65,0.9)" : "transparent"}}>
      <S.logo>
        kellbber <S.point>.</S.point>
      </S.logo>
      <S.menu>
        <ul>
        <li>
            <a href="#HOME">HOME</a>
          </li>
          <li>
            <a href="#SOBRE">SOBRE</a>
          </li>
          <li>
            <a href="#SERVICOS">SERVIÇOS</a>
          </li>
          <li>
            <a href="#PORTFOLIO">PORTIFÓLIO</a>
          </li>
          <li>
            <a href="#">CONTATO</a>
          </li>
        </ul>
      </S.menu>
    </S.Header>
  );
};

export default Header;
