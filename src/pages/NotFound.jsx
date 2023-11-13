import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='appContainer'>
      <div style={{
        fontSize: '30px',
        fontWeight: 'bold'
      }}>페이지를 찾지 못했습니다.</div>
      <div style={{
        fontSize: '17px',
      }}>주소가 잘못되었거나 더이상 제공되지 않는 페이지입니다.</div>
      <div onClick={()=>navigate('/')} style={{
        cursor: 'pointer',
        color: 'red',
        fontSize: '25px',
        fontWeight: 'bold'
      }}>메인 페이지로 이동</div>
    </div>
  )
}
