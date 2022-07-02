import React, { useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const SearchPokemon = () => {
  const [text, setText] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [type, setType] = useState("");
  const [pokeImage, setPokeImage] = useState("");
  const url = " https://pokeapi.co/api/v2/pokemon/";

  const handleSubmit = async () => {
    const res = await axios.get(url + text.toLowerCase());
    const image = res.data.sprites.other.dream_world.front_default;
    setPokemon(res.data.name);
    setPokeImage(image);
    setType(res.data.types[0].type.name)

  };
  return (
    <div>
      <div class="d-flex justify-content-center">
        <input
          type="search"
          className="form-control rounded poke-search"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          style={{width:'400px'}}
        />
        <button className="btn btn-outline-dark" type="submit" onClick={handleSubmit()}>
          Submit
        </button>
      </div>
      {type?<div class="d-flex justify-content-center search-card">
      <div class="card" style={{width: "20rem"}}>
  <img src={pokeImage} className="card-img-top" alt={text}/>
  <div class="card-body">
  <h5 class="card-title">{pokemon.charAt(0).toUpperCase()+pokemon.substring(1)}</h5>
  <button disabled="disabled" className={`poke poke-${type}`} style={{width:'100px',height:'25px'}}>{type}</button>
  </div>
</div>
      </div>:null}
    </div>
  );
};

export default SearchPokemon;
