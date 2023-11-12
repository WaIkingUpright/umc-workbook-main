import React from 'react'
import Movie from "../components/Movie"

export default function Movies(movies) {
  return (
    <div className="app-container">
    {
      movies.results.map((item) => {
        return (
          <Movie {...item}/>

        )
      })
    }
  </div>
  )
}
