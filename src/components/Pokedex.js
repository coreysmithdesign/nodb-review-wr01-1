import React from 'react'
import Pokemon from './Pokemon'
// export default props => {}

// export default function(props) {}

function Pokedex(props){
  console.log(props)
  return (
    <div>
    pokedex.js
    <Pokemon 
      saveName={props.saveName}
      releasePokemon={props.releasePokemon}
    />
    </div>
  )
}

export default Pokedex
