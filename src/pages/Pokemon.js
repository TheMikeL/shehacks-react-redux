import axios from "axios";
import { useState, useRef } from "react";
import "../App.css";
import Pokemon from '../components/Pokemon'

const PokemonPage = () => {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const inputRef = useRef();

  // useEffect(() => {
  //   axios.get(url)
  //   .then((pokemon) => {
  //     console.log(pokemon);
  //   });
  // }, []);

  const findPokemon = () => {
    axios.get(url + inputRef.current.value)
    .then((pokemon) => {
      console.log(pokemon);
      setCurrentPokemon(pokemon.data);
    });
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={findPokemon}>Submit</button>
      <Pokemon pokemon={currentPokemon}>hello</Pokemon>
    </>
  );
};

export default PokemonPage;
