import React from 'react'
import TVprogram from '../components/TVprogram'

export default function TV(programs) {
  return (
    <div className="app-container">
    {
      programs.results.map((item) => {
        return (
          <TVprogram {...item}/>
        )
      })
    }
  </div>
  )
}
