import axios from "axios";
import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

export const GetNames = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=50"
  );

  const handleSubmit = async () => {
    const res = await axios.get(loadMore);
    const { data } = res;
    const { results } = data;
    var myMap=[];
    setLoadMore(data.next);

    function createPokemon(results) {
      results.forEach(async (pokemon) => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const { data } = response;
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
        myMap[pokemon.name]=data
      });
    }
    createPokemon(results);
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div className="hero-names">
      <h1>Pokemon Evolution</h1>
      
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonStats, index) => (
            <PokemonCard
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />
          ))}
        </div>
        <button className="load-more" onClick={() => handleSubmit()}>
          Load more
        </button>
      </div>
    </div>
  );
};
