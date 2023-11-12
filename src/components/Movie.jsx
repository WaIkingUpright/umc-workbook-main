import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Movie(item) {
  const navigate = useNavigate();
  const onClickMovieitem =() =>{
    navigate(`/movie/${item.title}`, {state: item});
  }
  return (
    <div className="movieContainer" onClick={onClickMovieitem}>
      <div className="contents">
        <img className="moviePicture" src={item.poster_path} alt="" />
        <div className="text">
          <p className="title">{`${item.title}`}</p>
          <p className="vote_average">{`${item.vote_average}`}</p>
        </div>
      </div>
      <div className='modal'>
        <p className="modalTitle">{`${item.title}`}</p>
        <p className="modalText">{`${item.overview}`}</p>
      </div>
    </div>
  )
}
