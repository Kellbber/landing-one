import React from "react";
import * as S from "./style";
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineFullscreenExit} from 'react-icons/md'
type Action = {
  action: boolean;
};

const Header = ({ action }: Action) => {
  
  const [extend, setExtend] = useState<boolean>(false);

  return (
    <S.Header
     
      style={{ backgroundColor: action ? "rgba(66,65,65,0.9)" : "transparent" }}
    >
      <S.NavbarInnerContainer>
        <S.rightContainer> 
          <S.logo>
            kellbber <S.point>.</S.point>
          </S.logo>
        </S.rightContainer>
        <S.leftContainer>
          <S.NavbarLinkContainer>
            <S.NavbarLink href="#HOME">HOME</S.NavbarLink>
            <S.NavbarLink href="#SERVICOS">SERVIÇOS</S.NavbarLink>
            <S.NavbarLink href="#PORTFOLIO">PORTIFÓLIO</S.NavbarLink>
            <S.NavbarLink href="#CONTACT">CONTATO</S.NavbarLink>
            <S.OpenLinksButton onClick={()=>{
              setExtend((curr)=>!curr)
              }}>
                {extend? <MdOutlineFullscreenExit size={20}/>:<AiOutlineMenu size={20}/>}
              </S.OpenLinksButton>
          </S.NavbarLinkContainer>
           </S.leftContainer>
      </S.NavbarInnerContainer>
      {extend &&(
      <S.NavbarExtendContainer>
      <S.NavbarLinkExtend href="#HOME">HOME</S.NavbarLinkExtend>
            <S.NavbarLinkExtend href="#SERVICOS">SERVIÇOS</S.NavbarLinkExtend>
            <S.NavbarLinkExtend href="#PORTFOLIO">PORTIFÓLIO</S.NavbarLinkExtend>
            <S.NavbarLinkExtend href="#CONTACT">CONTATO</S.NavbarLinkExtend>
      </S.NavbarExtendContainer>
)}
    </S.Header>
  );
};

export default Header;
