import React from 'react'


const Navigation = ({setSearch}) => {
  return (
    <div>
    <input placeholder='search' onChange={(e)=>setSearch(e.target.value)}></input>
    </div>
  )
}

export default Navigation