import React, { useState } from "react";
import ButtonSubmit from "../ButtonWhats";
import * as S from "./style";
import { IoLogoWhatsapp } from "react-icons/io";
import { stringify } from "querystring";
interface Name{
  name: string;
}
const Contact = () => {

  const [name, setName]=useState({
    name:""
  });

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setName((name:Name)=>({
      ...name,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <S.background>
      <S.title>
        VAMOS TRABALHAR JUNTOS
        <br />
        ME CHAME NO WHATSAPP
        <IoLogoWhatsapp style={{marginLeft:"1rem"}} />
      </S.title>
      <S.form id="CONTACT">
        <S.input type="text"  autoComplete="off" placeholder="Digite seu nome" required name="name" onChange={handleChangeValues}/>
        <S.DivLine />
        {name.name?
        <S.buttonContact  href={`https://wa.me/5554996580748?text=Olá,%20meu%20nome%20é%20${name.name}%20e%20gostaria%20de%20fazer%20um%20orçamento!`} target="blank">
          MANDAR MENSAGEM
        </S.buttonContact>
          :<S.buttonDisable>MANDAR MENSAGEM</S.buttonDisable>}
      </S.form>
      <S.footer>
      <p>© 2022 •  Kellbber • Todos os direitos reservados •</p>
      </S.footer>
    </S.background>
  );
};

export default Contact;
