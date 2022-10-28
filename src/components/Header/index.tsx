import React from "react";
import * as S from "./style";

type Action = {
  action:boolean;
}
const Header = ({action}:Action) => {
  return (
    <S.Header style={{backgroundColor: action ? "rgba(0,0,0,0.8)" : "transparent"}}>
      <S.logo>
        Nome <S.point>.</S.point>
      </S.logo>
      <S.menu>
        <ul>
        <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">SOBRE</a>
          </li>
          <li>
            <a href="#">SERVIÇOS</a>
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
