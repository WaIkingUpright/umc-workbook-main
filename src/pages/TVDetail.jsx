import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function TVDetail() {
  const {name} = useParams();
  const {state} = useLocation();

  return (
    <div className='appContainer'>
        <div>
            <img src={state.poster_path} alt="" />
            {name}
        </div>
    </div>
  )
}
