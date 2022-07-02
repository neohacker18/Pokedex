import React from 'react'

const PokemonCard = ({name,image}) => {
  // console.log(name)
  return (
    <div>
        <p>{name}</p>
        <img src={image} alt="" style={{width:'100px',height:'100px'}} />
    </div>
  )
}

export default PokemonCard