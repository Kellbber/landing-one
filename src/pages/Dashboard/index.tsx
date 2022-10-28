import React from 'react'
import Header from '../../components/Header';
import * as S from './style'
import {useState, useEffect} from 'react'

const Dashboard = () => {

  const [color, setColor] = useState<boolean>(false);
  const changeBackground = ()=>{
    if(window.scrollY>10){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeBackground);
  
  return (

    <S.background>
      <S.imgTop>
      <Header action={color}/>
      </S.imgTop>
    <S.imgTop>

    </S.imgTop>
    </S.background>
  )
}

export default Dashboard;