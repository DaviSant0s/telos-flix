import React, { useContext, useEffect } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { MovieContext } from '../../contexts/MovieContext'

export default function Video() {
  const [movies, setMovies] = useContext(MovieContext);

  return (

    <div style={{marginTop: '0.80%', marginLeft: '3.52%', backgroundColor: 'transparent'}}>
      <div style={{paddingTop: '1%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
       
       <div>
        {movies.map((movie, index) => {
          return(          
          <div>
            <h5>
              {movie.Title}
              {movie.Year}
              {movie.Runtime}
              <img src={movie.Poster} alt="filme" />
            </h5>
          </div>
          );

        })}
       </div>

        <Link to="/">Home</Link>
      </div>
    </div>

    )
  }

  {/* <div className='video'>
    Video
    <Link to="/">Home</Link>
  </div> */}
