import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MovieList = ({search}) => {
  const data=useSelector((state)=>state.Data)
  return (
    <div>{data.filter(item =>item.name.toLowerCase().includes(search.toLowerCase().trim()) ).map(el =><MovieCard key={Math.random()}el={el}/>)}</div>
  )
}

export default MovieList