import React from "react";
import * as S from "./style";
import { GiDutchBike } from "react-icons/gi";
import { FaThemeco } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { BiMobileAlt } from "react-icons/bi";
import { BsFillLayersFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

const BoxService = () => {
  return (
    <S.backgroundService>
      <S.divText>
        <S.title>SERVIÇOS</S.title>
        <S.text>
          Usando das melhores tecnologias para tornar tudo que você sempre
          sonhou em realidade.
        </S.text>
      </S.divText>
      <S.divServices>
        <S.oneService id="SERVICOS">
          <S.icon>
            <GiDutchBike size={35} color="#ff4c4c" />
          </S.icon>
          <S.titleService>
            <S.textServiceTitle>RESPONSIVIDADE</S.textServiceTitle>
          </S.titleService>
          <S.textOneService>
            Deixando seu site disponível para todos os dispositivos.
          </S.textOneService>
        </S.oneService>
        <S.oneService>
          <S.icon>
            <FaThemeco size={30} color="#ff4c4c" />
          </S.icon>
          <S.titleService>
            <S.textServiceTitle>TEMA</S.textServiceTitle>
          </S.titleService>
          <S.textOneService>
            Temas únicos, deixando o visual com a sua cara.
          </S.textOneService>
        </S.oneService>
        <S.oneService>
          <S.icon>
            <SiMarketo size={25} color="#ff4c4c" />
          </S.icon>
          <S.titleService>
            <S.textServiceTitle>ESCALONÁVEL</S.textServiceTitle>
          </S.titleService>
          <S.textOneService>
            Arquitetura limpa e organizada para eventuais atualizações.
          </S.textOneService>
        </S.oneService>
        <S.oneService>
          <S.icon>
            <BiMobileAlt size={30} color="#ff4c4c" />
          </S.icon>
          <S.titleService>
            <S.textServiceTitle>DISPOSITIVO MÓVEL</S.textServiceTitle>
          </S.titleService>
          <S.textOneService>
            Responsivo e adaptado para todo tamanho de tela.
          </S.textOneService>
        </S.oneService>
        <S.oneService>
          <S.icon>
            <BsFillLayersFill size={30} color="#ff4c4c" />
          </S.icon>
          <S.titleService>
            <S.textServiceTitle>INTERFACE</S.textServiceTitle>
          </S.titleService>
          <S.textOneService>
            Desenhos de sites para produção, seguindo suas ideias e dicas.
          </S.textOneService>
        </S.oneService>
        <S.oneService>
          <S.icon>
            <FaReact size={30} color="#ff4c4c" />
          </S.icon>
          <S.titleService>
            <S.textServiceTitle>UPDATES</S.textServiceTitle>
          </S.titleService>
          <S.textOneService>
            Atualizações em suas páginas já existentes ou criadas por mim.
          </S.textOneService>
        </S.oneService>
      </S.divServices>
    </S.backgroundService>
  );
};

export default BoxService;
