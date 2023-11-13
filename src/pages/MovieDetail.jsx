import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function MovieDetail() {
  const {title} = useParams();
  const {state} = useLocation();

  return (
    <div className='appContainer'>
        <div>
            <img src={state.poster_path} alt="" />
            {title}
        </div>
    </div>
  )
}
