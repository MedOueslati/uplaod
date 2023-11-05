import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({movies}) => {
  return (
	<div className='container-fluid'>
	  {movies.map (el => <MovieCard movie={el}/>)}
	</div>
  )
}
export default MoviesList ;
