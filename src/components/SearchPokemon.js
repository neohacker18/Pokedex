import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import Pokeinfo from "./Pokeinfo";

const SearchPokemon = () => {
  var searchText=""
  const [text, setText] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [type, setType] = useState("");
  const [pokeImage, setPokeImage] = useState("");
  const [check, setCheck] = useState(true);
  const [stats, setStats] = useState([]);
  const [height, setHeight] = useState("");
  const [abilities, setAbilities] = useState("");
  const url = " https://pokeapi.co/api/v2/pokemon/";
  const handleSubmit = async () => {
    searchText=text
    try {
      const res = await axios.get(url + searchText.toLowerCase());
      const image =res.data.sprites.other.dream_world.front_default;
      setStats(res.data.stats)
      setPokemon(res.data.name);
      setPokeImage(image);
      setHeight(res.data.height);
      setAbilities(res.data.abilities[0].ability.name)
      setType(res.data.types[0].type.name)
    } catch (error) {
      alert('Pokemon doesnt exist in our Pokedex!');
    }

  };
  return (
        <div className="search-hero">
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
        <button className="btn btn-outline-dark" type="submit" onClick={()=>handleSubmit()}>
          Submit
        </button>
      </div>
      {type?(check?(<div class="d-flex justify-content-center search-card">
      <div class="card" style={{width: "20rem"}}>
        <div>
        <img src={pokeImage} className="card-img-top" alt={text}/>
        </div>
  <div class="card-body">
  <h5 class="card-title">{pokemon.charAt(0).toUpperCase()+pokemon.substring(1)}</h5>
  <button disabled="disabled" className={`poke poke-${type}`} style={{width:'100px',height:'25px'}}>{type}</button>
  <div class="form-check form-switch" style={{marginTop:'10px'}}>
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{
    setCheck(check?false:true)
  }}/>
</div>
  </div>
</div>
      </div>):
      <div>
        <Pokeinfo abilities={abilities} image={pokeImage} name={pokemon} stats={stats} check={check} setCheck={setCheck} type={type} height={height}/>  
      </div>):null}
    </div>
  );
};

export default SearchPokemon;
