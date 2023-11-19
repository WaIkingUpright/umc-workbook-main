import React from "react"
import {useNavigate} from 'react-router-dom';

export default function LoginControl() {
  const navigate = useNavigate();
  const onClickLoginBtn =() =>{
    navigate(`/login`);
  }
  return (
    <div className='login'>
      <button onClick={onClickLoginBtn} className='loginBtn'>로그인</button>
    </div>
  )
}

//import React, { useState } from 'react'
// const [lgnState, setLogin] = useState(true);
// if(lgnState){
//   return (
//     <div className='login'>
//       <button onClick={()=>setLogin(!lgnState)} className='loginBtn'>로그인</button>
//       <p>로그인 해주세요!</p>
//     </div>
//   )
// }
// else{
//   return (
//     <div className='login'>
//       <button onClick={()=>setLogin(!lgnState)}className='loginBtn'>로그아웃</button>
//       <p>환영합니다!</p>
//     </div>
//   )
// }